import { LanguageCode } from '../types/LanguageCode';
import { LocalizationData } from '../types/LocalizationData';
import localizationJson from './localization.json';

export const localization: { [key in LanguageCode]?: LocalizationData } = localizationJson;
