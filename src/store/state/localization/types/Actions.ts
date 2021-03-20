import { LocalizationActionType } from './ActionType';
import { LanguageCode } from './LanguageCode';

interface SetLanguageAction {
  type: LocalizationActionType.SET_LANGUAGE;
  payload: LanguageCode;
}

export type LocalizationAction = SetLanguageAction;
