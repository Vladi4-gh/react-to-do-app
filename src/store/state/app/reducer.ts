import { AppActionType } from './types/ActionType';
import { AppAction } from './types/Actions';
import { AppState } from './types/State';
import { defaultAppState } from './defaultState';

export const appReducer = (state = defaultAppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.SWITCH_TEST:
      return {
        ...state,
        test: !state.test
      };
    default:
      return state;
  }
};
