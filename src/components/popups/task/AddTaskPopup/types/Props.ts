import { Task } from '../../../../../store/state/task/types/Task';

export type Props = {
  opened: boolean;
  onSave: (task: Task) => void;
  onCancel: () => void;
};
