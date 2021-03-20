import { AppState } from '../state/app/types/State';
import { LocalizationState } from '../state/localization/types/State';

export interface State {
  app: AppState;
  localization: LocalizationState;
}
