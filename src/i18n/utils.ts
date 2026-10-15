export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = [
  { code: 'en', name: 'English', label: 'English' },
  { code: 'es', name: 'Español', label: 'Spanish' },
  { code: 'ja', name: '日本語', label: 'Japanese' },
  { code: 'fr', name: 'Français', label: 'French' },
  { code: 'de', name: 'Deutsch', label: 'German' },
  { code: 'pt', name: 'Português', label: 'Portuguese' },
  { code: 'ko', name: '한국어', label: 'Korean' },
  { code: 'it', name: 'Italiano', label: 'Italian' },
] as const;

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]['code'];

export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (SUPPORTED_LOCALES.some(l => l.code === lang)) {
    return lang as SupportedLocale;
  }
  return DEFAULT_LOCALE;
}

export function getRawPathname(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && SUPPORTED_LOCALES.some(l => l.code === segments[0])) {
    const raw = '/' + segments.slice(1).join('/');
    return raw === '' ? '/' : raw;
  }
  return pathname === '' ? '/' : pathname;
}

export function getLocalizedPathname(pathname: string, targetLang: string): string {
  const raw = getRawPathname(pathname);
  if (targetLang === DEFAULT_LOCALE) {
    return raw;
  }
  return raw === '/' ? `/${targetLang}` : `/${targetLang}${raw}`;
}

export function getCronstrueLocale(lang: string): string {
  switch (lang) {
    case 'pt':
      return 'pt_BR';
    case 'es':
    case 'ja':
    case 'fr':
    case 'de':
    case 'ko':
    case 'it':
      return lang;
    default:
      return 'en';
  }
}

export { useTranslations, ui } from './ui';

