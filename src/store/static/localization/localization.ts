import languageNamesJson from './data/languageNames.json';
import defaultLocalizationJson from './data/defaultLocalization.json';
import localizationJson from './data/localization.json';
import { LanguageNames } from './types/LanguageNames';
import { DefaultLocalizationData } from './types/LocalizationData';
import { Localization } from './types/Localization';

export const languageNames: LanguageNames = languageNamesJson;

export const defaultLocalization: DefaultLocalizationData = defaultLocalizationJson;

export const localization: Localization = localizationJson;
