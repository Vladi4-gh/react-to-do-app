import { LanguageCode } from '../../../state/localization/types/LanguageCode';
import { LocalizationData } from './LocalizationData';

export type Localization = { [key in LanguageCode]?: LocalizationData };
