import { Task } from './Task';
import { TaskFilter } from './TaskFilter';

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
}
