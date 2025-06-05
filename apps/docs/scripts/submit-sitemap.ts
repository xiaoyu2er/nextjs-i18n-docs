#!/usr/bin/env tsx

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { google } from 'googleapis';

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration types
interface SubmitOptions {
  serviceAccountPath?: string;
  dryRun?: boolean;
  sitemapUrls?: string[];
  useEnvAuth?: boolean;
}

interface ServiceAccount {
  client_email: string;
  private_key: string;
  [key: string]: unknown;
}

interface SiteEntry {
  siteUrl: string;
}

interface SitemapEntry {
  path: string;
}

// Rate limiting and quota management
const QUOTA = {
  rpm: {
    retries: 3,
    waitingTime: 60000, // 1 minute
  },
};

class SitemapSubmitter {
  private accessToken = '';
  private serviceAccount: ServiceAccount | null = null;
  private siteUrl: string;
  private options: SubmitOptions;

  constructor(siteUrl: string, options: SubmitOptions = {}) {
    this.siteUrl = this.formatSiteUrl(siteUrl);
    this.options = {
      dryRun: false,
      ...options,
    };
  }

  /**
   * Initialize the submitter with authentication
   */
  async initialize(): Promise<void> {
    await this.authenticateServiceAccount();
    await this.validateSiteAccess();
  }

  /**
   * Authenticate using Google service account
   */
  private async authenticateServiceAccount(): Promise<void> {
    try {
      let serviceAccount: ServiceAccount;

      // Check if we should use environment variables for authentication
      const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
      const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

      if (clientEmail && privateKey) {
        // Use environment variables
        console.log('🔑 Using environment variables for authentication');
        serviceAccount = {
          client_email: clientEmail,
          private_key: privateKey.replace(/\\n/g, '\n'), // Handle escaped newlines
        };
      } else {
        // Fall back to service account file
        console.log('📁 Using service account file for authentication');
        const serviceAccountPath =
          this.options.serviceAccountPath ||
          path.join(__dirname, '..', 'zyq-io-3f5752deaee6.json');

        if (!existsSync(serviceAccountPath)) {
          throw new Error(
            `Service account file not found: ${serviceAccountPath}. Please provide either:\n- Service account file at ${serviceAccountPath}\n- Environment variables: GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`,
          );
        }

        serviceAccount = JSON.parse(
          readFileSync(serviceAccountPath, 'utf8'),
        ) as ServiceAccount;
      }

      this.serviceAccount = serviceAccount;

      const jwtClient = new google.auth.JWT({
        email: serviceAccount.client_email,
        key: serviceAccount.private_key,
        scopes: [
          'https://www.googleapis.com/auth/webmasters.readonly',
          'https://www.googleapis.com/auth/webmasters',
        ],
      });

      const tokens = await jwtClient.authorize();
      if (!tokens.access_token) {
        throw new Error('Failed to obtain access token');
      }

      this.accessToken = tokens.access_token;
      console.log('✅ Successfully authenticated with Google APIs');
    } catch (error) {
      console.error(
        '❌ Authentication failed:',
        error instanceof Error ? error.message : error,
      );
      process.exit(1);
    }
  }

  /**
   * Validate that the service account has access to the site
   */
  private async validateSiteAccess(): Promise<void> {
    try {
      const response = await this.fetchWithRetry(
        'https://www.googleapis.com/webmasters/v3/sites',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.accessToken}`,
          },
        },
      );

      if (response.status === 403) {
        throw new Error('Service account does not have access to any sites');
      }

      const data = (await response.json()) as { siteEntry?: SiteEntry[] };
      const sites =
        data.siteEntry?.map((entry: SiteEntry) => entry.siteUrl) || [];

      if (!sites.includes(this.siteUrl)) {
        console.log('Available sites:', sites);
        throw new Error(
          `Service account does not have access to ${this.siteUrl}`,
        );
      }

      console.log(`✅ Confirmed access to site: ${this.siteUrl}`);
    } catch (error) {
      console.error(
        '❌ Site access validation failed:',
        error instanceof Error ? error.message : error,
      );
      process.exit(1);
    }
  }

  /**
   * Format site URL to the correct format for Google Search Console
   */
  private formatSiteUrl(url: string): string {
    // Handle domain properties (sc-domain:example.com)
    if (url.startsWith('sc-domain:')) {
      return url;
    }

    // Handle URL-prefix properties
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url.endsWith('/') ? url : `${url}/`;
    }

    // Default to https URL-prefix property
    return `https://${url}/`;
  }

  /**
   * Fetch with retry logic for rate limiting
   */
  private async fetchWithRetry(
    url: string,
    options: RequestInit,
    retries = 3,
  ): Promise<Response> {
    try {
      const response = await fetch(url, options);

      if (response.status === 429) {
        if (retries > 0) {
          console.log(
            `🚦 Rate limit hit, waiting ${QUOTA.rpm.waitingTime / 1000}s before retry...`,
          );
          await this.sleep(QUOTA.rpm.waitingTime);
          return this.fetchWithRetry(url, options, retries - 1);
        }
        throw new Error('Rate limit exceeded, no retries left');
      }

      if (response.status >= 500) {
        throw new Error(
          `Server error: ${response.status} ${response.statusText}`,
        );
      }

      return response;
    } catch (error) {
      if (
        retries > 0 &&
        error instanceof Error &&
        error.message.includes('fetch')
      ) {
        console.log(`🔄 Network error, retrying... (${retries} attempts left)`);
        await this.sleep(1000);
        return this.fetchWithRetry(url, options, retries - 1);
      }
      throw error;
    }
  }

  /**
   * Get sitemap URLs from Google Search Console
   */
  async getSitemaps(): Promise<string[]> {
    try {
      const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(this.siteUrl)}/sitemaps`;
      const response = await this.fetchWithRetry(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      if (response.status === 403) {
        throw new Error(
          'Service account does not have access to sitemaps for this site',
        );
      }

      const data = (await response.json()) as { sitemap?: SitemapEntry[] };
      const sitemaps =
        data.sitemap?.map((s: SitemapEntry) => s.path).filter(Boolean) || [];

      console.log(`📄 Found ${sitemaps.length} sitemaps for ${this.siteUrl}`);
      for (const sitemap of sitemaps) {
        console.log(`  • ${sitemap}`);
      }

      return sitemaps;
    } catch (error) {
      console.error(
        '❌ Failed to fetch sitemaps:',
        error instanceof Error ? error.message : error,
      );
      return [];
    }
  }

  /**
   * Submit sitemap directly to Google Search Console
   */
  async submitSitemap(sitemapUrl: string): Promise<boolean> {
    if (this.options.dryRun) {
      console.log(`🧪 [DRY RUN] Would submit sitemap: ${sitemapUrl}`);
      return true;
    }

    try {
      const encodedSitemapUrl = encodeURIComponent(sitemapUrl);
      const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(this.siteUrl)}/sitemaps/${encodedSitemapUrl}`;

      const response = await this.fetchWithRetry(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
      });

      if (response.status === 403) {
        console.error(`🔐 Access denied for sitemap: ${sitemapUrl}`);
        return false;
      }

      if (response.status === 429) {
        console.error(`🚦 Rate limit exceeded for sitemap: ${sitemapUrl}`);
        return false;
      }

      if (response.status >= 300) {
        const errorText = await response.text();
        console.error(
          `❌ Failed to submit sitemap ${sitemapUrl}: ${response.status} ${errorText}`,
        );
        return false;
      }

      console.log(`✅ Successfully submitted sitemap: ${sitemapUrl}`);
      return true;
    } catch (error) {
      console.error(
        `❌ Error submitting sitemap ${sitemapUrl}:`,
        error instanceof Error ? error.message : error,
      );
      return false;
    }
  }

  /**
   * Submit all sitemaps to Google Search Console
   */
  async submit(): Promise<void> {
    console.log('📄 Submitting sitemaps to Google Search Console...');
    console.log(`📍 Site: ${this.siteUrl}`);
    console.log('🔧 Options:', {
      dryRun: this.options.dryRun,
      customSitemaps: this.options.sitemapUrls?.length || 0,
    });

    let sitemapsToSubmit: string[] = [];

    if (this.options.sitemapUrls && this.options.sitemapUrls.length > 0) {
      sitemapsToSubmit = this.options.sitemapUrls;
      console.log(`📋 Using provided sitemaps (${sitemapsToSubmit.length})`);
    } else {
      // Discover sitemaps from common patterns
      const commonSitemapPaths = [
        '/sitemap.xml',
        '/sitemap_index.xml',
        '/sitemaps.xml',
      ];

      // Try to detect the site's base URL from the domain property
      let baseUrl = '';
      if (this.siteUrl.startsWith('sc-domain:')) {
        const domain = this.siteUrl.replace('sc-domain:', '');
        baseUrl = `https://${domain}`;
      } else {
        baseUrl = this.siteUrl.replace(/\/$/, ''); // Remove trailing slash
      }

      // Check for existing sitemaps in Search Console
      const existingSitemaps = await this.getSitemaps();
      if (existingSitemaps.length > 0) {
        sitemapsToSubmit = existingSitemaps;
        console.log(
          `📋 Found ${existingSitemaps.length} existing sitemaps in Search Console`,
        );
      } else {
        // Generate potential sitemap URLs
        for (const path of commonSitemapPaths) {
          sitemapsToSubmit.push(`${baseUrl}${path}`);
        }
        console.log(
          `📋 Will try to submit common sitemap paths for ${baseUrl}`,
        );
      }
    }

    if (sitemapsToSubmit.length === 0) {
      console.log('❌ No sitemaps found to submit');
      return;
    }

    const stats = {
      total: sitemapsToSubmit.length,
      submitted: 0,
      errors: 0,
    };

    console.log(`🚀 Submitting ${stats.total} sitemaps...`);

    for (const sitemapUrl of sitemapsToSubmit) {
      const success = await this.submitSitemap(sitemapUrl);
      if (success) {
        stats.submitted++;
      } else {
        stats.errors++;
      }

      // Rate limiting between submissions
      await this.sleep(1000);
    }

    console.log('\n📊 Sitemap Submission Summary:');
    console.log(`  Total sitemaps: ${stats.total}`);
    console.log(`  Successfully submitted: ${stats.submitted}`);
    console.log(`  Errors: ${stats.errors}`);

    if (stats.submitted > 0) {
      console.log('\n✨ Sitemaps submitted successfully!');
      console.log(
        '🕐 Note: It may take some time for Google to process the sitemaps.',
      );
    }
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    console.log(`
📄 Google Search Console Sitemap Submitter

Usage: tsx submit-sitemap.ts <siteUrl> [options]

Arguments:
  siteUrl                 The site URL as defined in Search Console
                         Examples: 
                         - https://example.com/ (URL-prefix property)
                         - sc-domain:example.com (Domain property)

Options:
  --service-account <path>  Path to service account JSON file
  --dry-run                 Preview what would be submitted without making requests
  --sitemap-urls <urls>     Comma-separated list of specific sitemap URLs to submit
  --help, -h                Show this help message

Environment Variables (alternative to --service-account):
  GOOGLE_SERVICE_ACCOUNT_EMAIL       Service account email address
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY Service account private key (with escaped \\n)

Examples:
  # Submit all sitemaps for a domain
  tsx submit-sitemap.ts sc-domain:nextjs.im
  
  # Preview what would be submitted (dry run)
  tsx submit-sitemap.ts sc-domain:nextjs.im --dry-run
  
  # Submit specific sitemaps
  tsx submit-sitemap.ts sc-domain:nextjs.im --sitemap-urls "https://nextjs.im/sitemap.xml"
  
  # Submit to URL-prefix property
  tsx submit-sitemap.ts https://example.com/
  
  # Using environment variables for authentication
  export GOOGLE_SERVICE_ACCOUNT_EMAIL="your-service-account@project.iam.gserviceaccount.com"
  export GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"
  tsx submit-sitemap.ts sc-domain:nextjs.im
`);
    process.exit(0);
  }

  const siteUrl = args[0];
  const options: SubmitOptions = {};

  // Parse arguments
  for (let i = 1; i < args.length; i++) {
    switch (args[i]) {
      case '--service-account':
        options.serviceAccountPath = args[++i];
        break;
      case '--dry-run':
        options.dryRun = true;
        break;
      case '--sitemap-urls':
        options.sitemapUrls = args[++i].split(',').map((url) => url.trim());
        break;
    }
  }

  try {
    const submitter = new SitemapSubmitter(siteUrl, options);
    await submitter.initialize();
    await submitter.submit();
  } catch (error) {
    console.error(
      '💥 Fatal error:',
      error instanceof Error ? error.message : error,
    );
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { SitemapSubmitter };
