import { AppActionType } from './types/ActionType';
import { AppAction } from './types/Actions';
import { LanguageCode } from '../../static/localization/types/LanguageCode';

export const setLocalizationLanguage = (localizationLanguage: LanguageCode): AppAction => ({
  type: AppActionType.SET_LOCALIZATION_LANGUAGE,
  payload: localizationLanguage
});
