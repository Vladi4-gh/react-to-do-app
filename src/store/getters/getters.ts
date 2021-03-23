import { LanguageCode } from '../state/localization/types/LanguageCode';
import { defaultLocalization, localization } from '../static/localization/localization';
import { LocalizationDataKey } from '../static/localization/types/LocalizationDataKey';
import { State } from '../types/State';
import { Getters } from './types/Getters';

const getLocalizedText = (language: LanguageCode, dataKey: LocalizationDataKey): string => {
  const localizationForLanguage = localization[language];

  return (localizationForLanguage ? localizationForLanguage[dataKey] ?? null : null) ?? defaultLocalization[dataKey];
};

export const useGetters = (state: State): Getters => ({
  getLocalizedText: (dataKey: LocalizationDataKey) => getLocalizedText(state.localization.language, dataKey)
});
