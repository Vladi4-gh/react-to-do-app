import { Task } from '../../../../store/state/task/types/Task';

export type Props = {
  opened: boolean;
  task: Task;
  onConfirm: (id: string) => void;
  onCancel: () => void;
};
