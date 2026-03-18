export interface LocaleMessages {
  meta: {
    title: string;
    [key: string]: string | number | boolean | object;
  };
  [key: string]: string | number | boolean | object;
}

/**
 * Get the current locale from environment variables or use default
 */
export function getLocale(): string {
  return (process.env.LOCALE as string) || 'en';
}

/**
 * Load locale messages from the messages directory
 */
export async function loadLocaleMessages(
  locale?: string,
): Promise<LocaleMessages> {
  const currentLocale = locale || getLocale();

  const message = (
    await import(`../../../messages/${currentLocale.toLowerCase()}.json`, {
      with: { type: 'json' },
    })
  ).default;

  return message;
}

/**
 * Complete locale setup for a test - loads messages and returns both locale and messages
 */
export async function setupLocale(locale?: string) {
  const currentLocale = locale || getLocale();
  const messages = await loadLocaleMessages(currentLocale);

  return {
    locale: currentLocale,
    messages,
  };
}
