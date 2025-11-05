import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from Accept-Language header or default to 'en'
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  // Simple detection: check if Arabic is preferred
  let locale = 'en';
  if (acceptLanguage?.includes('ar')) {
    locale = 'ar';
  }

  // Or you could store it in a cookie and read it:
  // const cookieStore = await cookies();
  // const locale = cookieStore.get('locale')?.value || 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
