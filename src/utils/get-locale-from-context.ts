import { TLang } from '../types/language';

export function getLocaleFromContext({ context }: { context: any }): {
  locale: TLang;
} {
  const { req, locale: localeFromPath } = context;
  if (!req) {
    return {
      locale: 'en'
    };
  }

  const { headers } = req;

  const { locale: localeFromHeader = localeFromPath } = headers;

  const finalLocale = localeFromHeader;

  return {
    locale: finalLocale
  };
}
