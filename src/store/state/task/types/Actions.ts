import { TaskActionType } from './ActionType';

interface SwitchTestAction {
  type: TaskActionType.SWITCH_TEST;
}

export type TaskAction = SwitchTestAction;
