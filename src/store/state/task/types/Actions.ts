import { TaskActionType } from './ActionType';
import { Task } from './Task';
import { TasksFilter } from './TasksFilter';

interface AddTaskAction {
  type: TaskActionType.ADD_TASK;
  payload: Task;
}

interface EditTaskAction {
  type: TaskActionType.EDIT_TASK;
  payload: Task;
}

interface SetTaskCompletionAction {
  type: TaskActionType.SET_TASK_COMPLETION;
  payload: { id: string; completed: boolean };
}

interface RemoveTaskAction {
  type: TaskActionType.REMOVE_TASK;
  payload: string;
}

interface RemoveAllTasksAction {
  type: TaskActionType.REMOVE_ALL_TASKS;
}

interface RemoveAllCompletedTasksAction {
  type: TaskActionType.REMOVE_ALL_COMPLETED_TASKS;
}

interface SetTasksFilterAction {
  type: TaskActionType.SET_TASKS_FILTER;
  payload: TasksFilter;
}

export type TaskAction =
  | AddTaskAction
  | EditTaskAction
  | SetTaskCompletionAction
  | RemoveTaskAction
  | RemoveAllTasksAction
  | RemoveAllCompletedTasksAction
  | SetTasksFilterAction;
