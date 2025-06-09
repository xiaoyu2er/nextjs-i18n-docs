import { LOCALES } from '@next-i18n/const';
import { devError, devLog, devWarn } from './utils';

devLog('🌐 Next.js Translation Helper loaded (React-compatible version)');

// Utility function to wait for element with retries
function waitForTargetButton(callback: () => void, maxAttempts = 30) {
  let attempts = 0;
  const check = () => {
    try {
      // Check for Learn button first
      const learnButton = document.querySelector('a[href="/learn"]');
      // Also check for search button
      const searchButton = document.querySelector(
        'button[aria-label="Search documentation"]',
      );

      if (learnButton || searchButton) {
        callback();
        return;
      }

      if (attempts < maxAttempts) {
        attempts++;
        setTimeout(check, 200);
      } else {
        devLog(
          '⚠️ Neither Learn button nor Search button found after maximum attempts',
        );
      }
    } catch (error) {
      devWarn('Error checking for target buttons:', error);
    }
  };
  check();
}

// Create translation dropdown
function createTranslationDropdown() {
  const enabledLocales = LOCALES.filter((l) => l.enabled && l.locale !== 'en');

  // Create the main container
  const container = document.createElement('div');
  container.className = 'next-i18n-translate-container';
  container.style.cssText = `
    position: relative;
    display: inline-block;
    margin-left: 4px;
  `;

  // Create the trigger button (icon-only)
  const button = document.createElement('button');
  button.style.cssText = `
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.2s ease;
    color: #666;
    position: relative;
  `;
  button.title = 'View this page in other languages';
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--geist-foreground)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide size-5"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>`;

  // Add hover effects
  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = '#f1f3f4';
    button.style.transform = 'scale(1.1)';
    button.style.color = '#333';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'transparent';
    button.style.transform = 'scale(1)';
    button.style.color = '#666';
  });

  // Create the dropdown menu
  const dropdown = document.createElement('div');
  dropdown.className = 'next-i18n-translate-dropdown';
  dropdown.style.cssText = `
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    z-index: 10000;
    margin-top: 4px;
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    display: none;
    opacity: 0;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  `;

  // Smart positioning function to prevent cutoff
  const positionDropdown = () => {
    const buttonRect = button.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Reset positioning
    dropdown.style.left = 'auto';
    dropdown.style.right = '0';
    dropdown.style.top = '100%';
    dropdown.style.bottom = 'auto';
    dropdown.style.marginTop = '4px';
    dropdown.style.marginBottom = '0';

    // Check if dropdown would be cut off on the right
    if (buttonRect.right < 200) {
      // Not enough space on the right, position to the left
      dropdown.style.right = 'auto';
      dropdown.style.left = '0';
    }

    // Check if dropdown would be cut off at the bottom
    if (buttonRect.bottom + 300 > viewportHeight) {
      // Not enough space below, position above
      dropdown.style.top = 'auto';
      dropdown.style.bottom = '100%';
      dropdown.style.marginTop = '0';
      dropdown.style.marginBottom = '4px';
    }
  };

  // Add locale options
  for (let index = 0; index < enabledLocales.length; index++) {
    const locale = enabledLocales[index];
    const option = document.createElement('div');
    option.className = 'next-i18n-locale-option';
    option.style.cssText = `
      padding: 12px 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: ${index === enabledLocales.length - 1 ? 'none' : '1px solid #f0f0f0'};
      transition: background-color 0.15s ease;
      user-select: none;
    `;

    const flag = document.createElement('span');
    flag.style.cssText = 'font-size: 16px; min-width: 20px;';
    flag.textContent = locale.flag;

    const name = document.createElement('span');
    name.style.cssText = 'font-weight: 500; color: #333; flex: 1;';
    name.textContent = locale.nativeName;

    option.appendChild(flag);
    option.appendChild(name);

    option.addEventListener('mouseenter', () => {
      option.style.backgroundColor = '#f8f9fa';
    });

    option.addEventListener('mouseleave', () => {
      option.style.backgroundColor = 'transparent';
    });

    option.addEventListener('click', () => {
      // Close the dropdown immediately when a locale is clicked
      hideDropdown();

      try {
        const currentPath = window.location.pathname;
        const targetUrl = new URL(currentPath, locale.url).href;
        devLog(`🌐 Navigating to ${locale.nativeName}: ${targetUrl}`);
        window.location.href = targetUrl;
      } catch (error) {
        devError('Error navigating to locale:', error);
        // Fallback to just the domain
        window.location.href = locale.url;
      }
    });

    dropdown.appendChild(option);
  }

  let isDropdownOpen = false;

  // Show dropdown with animation
  function showDropdown() {
    dropdown.style.display = 'block';
    // Position dropdown to prevent cutoff
    positionDropdown();
    requestAnimationFrame(() => {
      dropdown.style.opacity = '1';
      dropdown.style.transform = 'translateY(0)';
    });
    isDropdownOpen = true;
  }

  // Hide dropdown with animation
  function hideDropdown() {
    dropdown.style.opacity = '0';
    dropdown.style.transform = 'translateY(-8px)';
    setTimeout(() => {
      if (!isDropdownOpen) {
        dropdown.style.display = 'none';
      }
    }, 200);
    isDropdownOpen = false;
  }

  // Toggle dropdown
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isDropdownOpen) {
      hideDropdown();
    } else {
      showDropdown();
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target as Node) && isDropdownOpen) {
      hideDropdown();
    }
  });

  // Close dropdown on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isDropdownOpen) {
      hideDropdown();
    }
  });

  container.appendChild(button);
  container.appendChild(dropdown);

  return container;
}

// Find and add the translation button(s)
function addTranslationButton() {
  let addedCount = 0;

  // Strategy 1: Add next to the Learn button (desktop)
  const learnButtonSelectors = [
    'a[href="/learn"]',
    'a[href*="/learn"]',
    'nav a:contains("Learn")',
    '[data-testid="learn-link"]',
  ];

  let learnButton: Element | null = null;
  for (const selector of learnButtonSelectors) {
    learnButton = document.querySelector(selector);
    if (learnButton) {
      devLog(`🎯 Found Learn button with selector: ${selector}`);
      break;
    }
  }

  if (learnButton) {
    // Check if translation button already exists next to learn button
    const existingLearnButton = learnButton.parentNode?.querySelector(
      '.next-i18n-translate-container',
    );
    if (!existingLearnButton) {
      try {
        const translationDropdown = createTranslationDropdown();
        translationDropdown.setAttribute('data-placement', 'learn-button');

        const parentNode = learnButton.parentNode;
        if (parentNode) {
          if (learnButton.nextSibling) {
            parentNode.insertBefore(
              translationDropdown,
              learnButton.nextSibling,
            );
          } else {
            parentNode.appendChild(translationDropdown);
          }
          devLog('✅ Translation button added next to Learn button');
          addedCount++;
        }
      } catch (error) {
        devError(
          '❌ Error adding translation button next to Learn button:',
          error,
        );
      }
    } else {
      devLog('✅ Translation button already exists next to Learn button');
    }
  }

  // Strategy 2: Add next to the search button (mobile)
  const searchButtonSelectors = [
    'button[aria-label="Search documentation"]',
    'button.navbar_search__dZT2b',
    'button[data-variant="small"]',
  ];

  let searchButton: Element | null = null;
  for (const selector of searchButtonSelectors) {
    try {
      searchButton = document.querySelector(selector);
      if (searchButton) {
        devLog(`🔍 Found Search button with selector: ${selector}`);
        break;
      }
    } catch (error) {
      // Skip invalid selectors
    }
  }

  if (searchButton) {
    // Check if translation button already exists next to search button
    const existingSearchButton = searchButton.parentNode?.querySelector(
      '.next-i18n-translate-container',
    );
    if (!existingSearchButton) {
      try {
        const translationDropdown = createTranslationDropdown();
        translationDropdown.setAttribute('data-placement', 'search-button');

        const parentNode = searchButton.parentNode;
        if (parentNode) {
          if (searchButton.nextSibling) {
            parentNode.insertBefore(
              translationDropdown,
              searchButton.nextSibling,
            );
          } else {
            parentNode.appendChild(translationDropdown);
          }
          devLog('✅ Translation button added next to Search button');
          addedCount++;
        }
      } catch (error) {
        devError(
          '❌ Error adding translation button next to Search button:',
          error,
        );
      }
    } else {
      devLog('✅ Translation button already exists next to Search button');
    }
  }

  if (addedCount === 0 && !learnButton && !searchButton) {
    devLog('⚠️ Neither Learn button nor Search button found, will retry...');
    return false;
  }

  // Verify buttons were actually added and stay there
  if (addedCount > 0) {
    setTimeout(() => {
      const verifyButtons = document.querySelectorAll(
        '.next-i18n-translate-container',
      );
      if (verifyButtons.length === 0) {
        devWarn(
          '⚠️ Translation buttons were removed shortly after adding, React might be re-rendering',
        );
        // Try one more time after a longer delay
        setTimeout(() => {
          devLog(
            '🔄 Attempting to re-add translation buttons after React stabilization',
          );
          addTranslationButton();
        }, 1000);
      } else {
        devLog(
          `🎉 ${verifyButtons.length} translation button(s) are stable and working!`,
        );
      }
    }, 500); // Wait 500ms to verify stability
  }

  return addedCount > 0;
}

// Initialize the script
devLog('🚀 Initializing Next.js Translation Helper...');

// Initialize immediately and set up monitoring
function initializeScript() {
  devLog('📍 Current URL:', window.location.href);
  devLog('📍 Document ready state:', document.readyState);

  // Wait for React to finish initial rendering before adding our button
  devLog('⏳ Waiting for React to stabilize...');
  setTimeout(() => {
    devLog('🎬 React should be stable now, adding translation button');
    addTranslationButton();

    // If it still didn't work, wait for target buttons to appear
    setTimeout(() => {
      const existingButtons = document.querySelectorAll(
        '.next-i18n-translate-container',
      );
      if (existingButtons.length === 0) {
        devLog('🔄 First attempt failed, trying again...');
        waitForTargetButton(() => {
          devLog(
            '🎯 Target button found, attempting to add translation button',
          );
          addTranslationButton();
        });
      }
    }, 500);
  }, 1000); // Wait 1 seconds for React to stabilize
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeScript);
} else {
  initializeScript();
}
