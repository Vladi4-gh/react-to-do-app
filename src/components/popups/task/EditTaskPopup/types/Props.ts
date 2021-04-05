import { Task } from '../../../../../store/state/task/types/Task';

export type Props = {
  opened: boolean;
  task: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
};
