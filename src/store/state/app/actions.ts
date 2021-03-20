import { AppActionType } from './types/ActionType';
import { AppAction } from './types/Actions';

export const switchTest = (): AppAction => ({
  type: AppActionType.SWITCH_TEST
});
