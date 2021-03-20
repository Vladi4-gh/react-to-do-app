export enum LocalizationDataKey {
  TEST = 'TEST'
}

export type LocalizationData = { [key in keyof typeof LocalizationDataKey]?: string };
