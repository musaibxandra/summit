import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from cookie or header (set by middleware)
  const cookieStore = await cookies();
  const headersList = await headers();

  let locale =
    headersList.get('x-next-intl-locale') ||
    cookieStore.get('NEXT_LOCALE')?.value ||
    cookieStore.get('locale')?.value ||
    'en';

  // Validate locale
  if (locale !== 'en' && locale !== 'ar') {
    locale = 'en';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
