import { TaskState } from './types/State';
import { TaskFilter } from './types/TaskFilter';

export const defaultTaskState: TaskState = {
  tasks: [
    { id: '1', title: 'test', description: 'desc', completed: false },
    { id: '2', title: 'test', description: 'desc', completed: true },
    { id: '3', title: 'test', description: 'desc', completed: false },
    { id: '4', title: 'test', description: 'desc', completed: false }
  ],
  filter: TaskFilter.all
};
