import { AppState } from '../state/app/types/State';
import { TaskState } from '../state/task/types/State';

export interface State {
  app: AppState;
  task: TaskState;
}
