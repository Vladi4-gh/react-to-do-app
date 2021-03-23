import { Localization } from './types/Localization';
import defaultLocalizationJson from './data/defaultLocalization.json';
import localizationJson from './data/localization.json';
import { DefaultLocalizationData } from './types/LocalizationData';

export const defaultLocalization: DefaultLocalizationData = defaultLocalizationJson;

export const localization: Localization = localizationJson;
