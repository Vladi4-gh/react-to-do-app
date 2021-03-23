import { LocalizationDataKey } from '../../static/localization/types/LocalizationDataKey';

export interface Getters {
  getLocalizedText: (dataKey: LocalizationDataKey) => string;
}
