import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { logger } from '../../src/logger';

describe('logger', () => {
  // Spy on console methods
  const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  const consoleErrorSpy = vi
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Reset verbose mode after each test
    logger.setVerbose(false);
  });

  describe('log levels', () => {
    it('should log info messages', () => {
      logger.info('Test info message');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('[INFO]');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Test info message');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('ℹ');
    });

    it('should log success messages', () => {
      logger.success('Test success message');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('[SUCCESS]');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Test success message');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('✓');
    });

    it('should log warning messages', () => {
      logger.warn('Test warning message');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('[WARN]');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Test warning message');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('⚠');
    });

    it('should log error messages', () => {
      logger.error('Test error message');

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy.mock.calls[0][0]).toContain('[ERROR]');
      expect(consoleErrorSpy.mock.calls[0][0]).toContain('Test error message');
      expect(consoleErrorSpy.mock.calls[0][0]).toContain('✗');
    });
  });

  describe('debug logging', () => {
    it('should not log debug messages when verbose is false', () => {
      logger.setVerbose(false);
      logger.debug('Test debug message');

      expect(consoleLogSpy).not.toHaveBeenCalled();
    });

    it('should log debug messages when verbose is true', () => {
      logger.setVerbose(true);
      logger.debug('Test debug message');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('[DEBUG]');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Test debug message');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('•');
    });
  });

  describe('divider', () => {
    it('should log a divider line', () => {
      logger.divider();

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('='.repeat(80));
    });
  });

  describe('progress', () => {
    it('should display progress bar with percentage', () => {
      logger.progress(50, 100, 'Processing items');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Processing items:');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('50/100');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('(50%)');
      // Check for progress bar characters
      expect(consoleLogSpy.mock.calls[0][0]).toContain('[');
      expect(consoleLogSpy.mock.calls[0][0]).toContain(']');
    });

    it('should include action message when provided', () => {
      logger.progress(25, 100, 'Processing items', 'Processing item 25');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Processing items:');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('25/100');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Processing item 25');
    });

    it('should handle 0% progress correctly', () => {
      logger.progress(0, 100, 'Starting process');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Starting process:');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('0/100');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('(0%)');
    });

    it('should handle 100% progress correctly', () => {
      logger.progress(100, 100, 'Completed process');

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy.mock.calls[0][0]).toContain('Completed process:');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('100/100');
      expect(consoleLogSpy.mock.calls[0][0]).toContain('(100%)');
      // For 100%, the progress bar should be full
      const progressBarPattern = /\[█{20}\]/;
      expect(progressBarPattern.test(consoleLogSpy.mock.calls[0][0])).toBe(
        true,
      );
    });
  });
});
