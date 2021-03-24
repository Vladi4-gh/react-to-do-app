import { AppActionType } from './types/ActionType';
import { AppAction } from './types/Actions';
import { AppState } from './types/State';
import { defaultAppState } from './defaultState';

export const appReducer = (state = defaultAppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.SET_LOCALIZATION_LANGUAGE:
      return {
        ...state,
        localizationLanguage: action.payload
      };
    default:
      return state;
  }
};
