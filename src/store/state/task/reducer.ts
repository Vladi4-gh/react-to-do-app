import { TaskActionType } from './types/ActionType';
import { TaskAction } from './types/Actions';
import { TaskState } from './types/State';
import { defaultTaskState } from './defaultState';

export const taskReducer = (state = defaultTaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionType.SWITCH_TEST:
      return {
        ...state,
        test: !state.test
      };
    default:
      return state;
  }
};
