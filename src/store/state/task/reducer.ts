import { TaskActionType } from './types/ActionType';
import { TaskAction } from './types/Actions';
import { TaskState } from './types/State';
import { defaultTaskState } from './defaultState';

export const taskReducer = (state = defaultTaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionType.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TaskActionType.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.title = action.payload.title;
            task.description = action.payload.description;
          }

          return task;
        })
      };
    case TaskActionType.SET_TASK_COMPLETION:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            task.completed = action.payload.completed;
          }

          return task;
        })
      };
    case TaskActionType.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.payload;
        })
      };
    case TaskActionType.REMOVE_ALL_TASKS:
      return {
        ...state,
        tasks: []
      };
    case TaskActionType.REMOVE_ALL_COMPLETED_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return !task.completed;
        })
      };
    case TaskActionType.SET_TASKS_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
