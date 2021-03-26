import { Task } from './Task';
import { TasksFilter } from './TasksFilter';

export interface TaskState {
  tasks: Task[];
  filter: TasksFilter;
}
