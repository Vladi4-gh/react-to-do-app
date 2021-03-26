import { Task } from '../../state/task/types/Task';
import { LocalizationDataKey } from '../../static/localization/types/LocalizationDataKey';

export interface Getters {
  readonly filteredTasks: Task[];
  readonly getLocalizedText: (dataKey: LocalizationDataKey) => string;
}
