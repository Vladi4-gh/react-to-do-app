import { LocalizationDataKey } from './LocalizationDataKey';

export type DefaultLocalizationData = { [key in LocalizationDataKey]: string };

export type LocalizationData = { [key in LocalizationDataKey]?: string };
