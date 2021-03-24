import { LanguageCode } from './LanguageCode';
import { LocalizationData } from './LocalizationData';

export type Localization = { [key in LanguageCode]?: LocalizationData };
