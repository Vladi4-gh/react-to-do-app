import { localization } from '../state/localization/localization/localization';
import { LanguageCode } from '../state/localization/types/LanguageCode';
import { LocalizationDataKey } from '../state/localization/types/LocalizationData';
import { State } from '../types/State';
import { Getters } from './types/Getters';

const getLocalizedText = (language: LanguageCode, dataKey: LocalizationDataKey): string => {
  const localizationForLanguage = localization[language];

  return (localizationForLanguage ? localizationForLanguage[dataKey] ?? null : null) ?? dataKey;
};

export const useGetters = (state: State): Getters => ({
  getLocalizedText: (dataKey: LocalizationDataKey) => getLocalizedText(state.localization.language, dataKey)
});
