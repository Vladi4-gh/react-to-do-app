import { TaskState } from './types/State';
import { TaskFilter } from './types/TaskFilter';
import { v4 } from 'uuid';

export const defaultTaskState: TaskState = {
  tasks: [
    { id: v4(), title: 'Title', description: 'Description', completed: false },
    {
      id: v4(),
      title: `Title ${v4()}${v4()}${v4()}${v4()}${v4()}${v4()}`,
      description: `Description ${v4()}${v4()}${v4()}${v4()}${v4()}${v4()}`,
      completed: true
    },
    { id: v4(), title: 'Title', description: 'Description', completed: false },
    { id: v4(), title: 'Title', description: 'Description', completed: false }
  ],
  filter: TaskFilter.all
};
