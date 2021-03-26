import { TaskState } from './types/State';
import { TasksFilter } from './types/TasksFilter';

export const defaultTaskState: TaskState = {
  tasks: [],
  filter: TasksFilter.all
};
