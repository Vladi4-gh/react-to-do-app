import { TaskActionType } from './types/ActionType';
import { TaskAction } from './types/Actions';

export const switchTest = (): TaskAction => ({
  type: TaskActionType.SWITCH_TEST
});
