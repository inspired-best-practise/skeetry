import { findBestAvailableLanguage } from 'react-native-localize';

import { languagesResources } from '_app/i18n/languageConfig';

export const languageTags = Object.keys(languagesResources);
export const detectedLocale = findBestAvailableLanguage(languageTags);
