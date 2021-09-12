import { detectedLocale } from '_app/i18n/languageDetector';

export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

// TODO: type locale
export const compareLocale = (languageTag: string, locale: any) => {
  return languageTag === locale.toLowerCase();
};

// TODO: refactor and type
export const withLocalization = (fieldName: string, field: string, locale, localizations) => {
  const languageTag = detectedLocale?.languageTag;

  const hasLocalization = languageTag
    ? localizations && localizations.find(l => l.locale === languageTag.toUpperCase())
    : null;

  const sameLocale = languageTag ? compareLocale(languageTag, locale) : null;

  return !hasLocalization || sameLocale ? field : hasLocalization[`${fieldName}`];
};
