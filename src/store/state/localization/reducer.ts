import { LocalizationActionType } from './types/ActionType';
import { LocalizationAction } from './types/Actions';
import { LocalizationState } from './types/State';
import { defaultLocalizationState } from './defaultState';

export const localizationReducer = (state = defaultLocalizationState, action: LocalizationAction): LocalizationState => {
  switch (action.type) {
    case LocalizationActionType.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};
