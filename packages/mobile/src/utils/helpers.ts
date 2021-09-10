export const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

// TODO: type locale
export const compareLocale = (languageTag: string, locale: any) => {
  return languageTag === locale.toLowerCase();
};
