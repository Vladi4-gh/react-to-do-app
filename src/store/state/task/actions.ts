import { TaskActionType } from './types/ActionType';
import { TaskAction } from './types/Actions';
import { Task } from './types/Task';
import { TaskFilter } from './types/TaskFilter';

export const addTask = (task: Task): TaskAction => ({
  type: TaskActionType.ADD_TASK,
  payload: task
});

export const editTask = (task: Task): TaskAction => ({
  type: TaskActionType.EDIT_TASK,
  payload: task
});

export const setTaskCompletion = (id: string, completed: boolean): TaskAction => ({
  type: TaskActionType.SET_TASK_COMPLETION,
  payload: { id, completed }
});

export const removeTask = (id: string): TaskAction => ({
  type: TaskActionType.REMOVE_TASK,
  payload: id
});

export const removeAllTasks = (): TaskAction => ({
  type: TaskActionType.REMOVE_ALL_TASKS
});

export const removeAllCompletedTasks = (): TaskAction => ({
  type: TaskActionType.REMOVE_ALL_COMPLETED_TASKS
});

export const setTasksFilter = (filter: TaskFilter): TaskAction => ({
  type: TaskActionType.SET_TASKS_FILTER,
  payload: filter
});
