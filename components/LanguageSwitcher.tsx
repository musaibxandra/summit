'use client';

import {useRouter} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';
import {useTransition} from 'react'; // Add this import for smooth switching

export default function LanguageSwitcher() {
  const router = useRouter();
  const currentLocale = useLocale();
  const t = useTranslations('HomePage'); // Assuming your button uses HomePage namespace
  const [isPending, startTransition] = useTransition(); // Add this for non-blocking updates

  const switchLocale = async (newLocale: 'en' | 'ar') => { // Generalize to handle both locales
    if (currentLocale === newLocale) return; // No-op if already selected

    try {
      // Call API to set cookie server-side
      const response = await fetch('/api/set-locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale: newLocale }),
      });

      if (!response.ok) {
        throw new Error('Failed to set locale');
      }

      // Use transition for smooth refresh
      startTransition(() => {
        router.refresh(); // Re-fetches with new locale
      });
    } catch (error) {
      console.error('Locale switch failed:', error);
      // Fallback: Client-side cookie + reload
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
      window.location.reload();
    }
  };

  const isArabic = currentLocale === 'ar';
  const buttonText = isArabic ? 'English' : 'العربية'; // Dynamic text for toggle
  const targetLocale = isArabic ? 'en' : 'ar'; // Toggle logic

  return (
    <button 
      onClick={() => switchLocale(targetLocale)}
      disabled={isPending}
      style={{ // Optional: Basic styling for feedback
        opacity: isPending ? 0.5 : 1,
        cursor: isPending ? 'not-allowed' : 'pointer',
      }}
    >
      {isPending ? 'Switching...' : buttonText}
    </button>
  );
}