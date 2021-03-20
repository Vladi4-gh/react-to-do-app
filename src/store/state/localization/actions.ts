import { LocalizationActionType } from './types/ActionType';
import { LanguageCode } from './types/LanguageCode';
import { LocalizationAction } from './types/Actions';

export const setLanguage = (language: LanguageCode): LocalizationAction => ({
  type: LocalizationActionType.SET_LANGUAGE,
  payload: language
});
