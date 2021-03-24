import { LanguageCode } from '../../../static/localization/types/LanguageCode';
import { AppActionType } from './ActionType';

interface SetLocalizationLanguageAction {
  type: AppActionType.SET_LOCALIZATION_LANGUAGE;
  payload: LanguageCode;
}

export type AppAction = SetLocalizationLanguageAction;
