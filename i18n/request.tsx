import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Get locale from cookie - next-intl uses NEXT_LOCALE by default
  const cookieStore = await cookies();
  let locale = cookieStore.get('NEXT_LOCALE')?.value || 
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
