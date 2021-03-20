import { AppActionType } from './ActionType';

interface SwitchTestAction {
  type: AppActionType.SWITCH_TEST;
}

export type AppAction = SwitchTestAction;
