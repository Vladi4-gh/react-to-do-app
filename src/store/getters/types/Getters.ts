import { LocalizationDataKey } from '../../state/localization/types/LocalizationData';

export interface Getters {
  getLocalizedText: (dataKey: LocalizationDataKey) => string;
}
