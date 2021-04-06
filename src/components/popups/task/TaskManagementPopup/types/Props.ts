import { Task } from '../../../../../store/state/task/types/Task';

export type Props = {
  opened: boolean;
  title: string;
  task: Task;
  onSave: (task: Task) => void;
  onCancel: () => void;
};
