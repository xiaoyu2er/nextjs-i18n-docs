type LogLevel = 'info' | 'success' | 'warn' | 'error' | 'debug';

class Logger {
  private verbose = false;
  private readonly colors = {
    reset: '\x1b[0m',
    info: '\x1b[36m', // Cyan
    success: '\x1b[32m', // Green
    warn: '\x1b[33m', // Yellow
    error: '\x1b[31m', // Red
    debug: '\x1b[90m', // Gray
  };

  private readonly icons = {
    info: 'ℹ',
    success: '✓',
    warn: '⚠',
    error: '✗',
    debug: '•',
  };

  constructor(verbose = false) {
    this.verbose = verbose;
  }

  setVerbose(verbose: boolean): void {
    this.verbose = verbose;
  }

  private formatMessage(level: LogLevel, message: string): string {
    const timestamp = new Date()
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19);
    return `${this.colors[level]}${this.icons[level]} ${timestamp} [${level.toUpperCase()}]${
      this.colors.reset
    } ${message}`;
  }

  info(message: string): void {
    console.log(this.formatMessage('info', message));
  }

  success(message: string): void {
    console.log(this.formatMessage('success', message));
  }

  warn(message: string): void {
    console.log(this.formatMessage('warn', message));
  }

  error(message: string): void {
    console.error(this.formatMessage('error', message));
  }

  debug(message: string): void {
    if (this.verbose) {
      console.log(this.formatMessage('debug', message));
    }
  }

  divider(): void {
    console.log(`\n${'='.repeat(80)}\n`);
  }

  /**
   * Log progress of a batch operation
   */
  progress(
    current: number,
    total: number,
    message: string,
    actionMessage?: string,
  ): void {
    const percentage = Math.floor((current / total) * 100);
    const progressBar = this.createProgressBar(percentage);
    const progressInfo = `${message}: ${progressBar} ${current}/${total} (${percentage}%)`;

    if (actionMessage) {
      this.info(`${progressInfo} - ${actionMessage}`);
    } else {
      this.info(progressInfo);
    }
  }

  private createProgressBar(percentage: number): string {
    const width = 20;
    const filled = Math.floor((width * percentage) / 100);
    const empty = width - filled;
    return `[${'█'.repeat(filled)}${' '.repeat(empty)}]`;
  }
}

export const logger = new Logger();
