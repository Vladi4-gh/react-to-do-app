import { LanguageCode } from '../static/localization/types/LanguageCode';
import { defaultLocalization, localization } from '../static/localization/localization';
import { LocalizationDataKey } from '../static/localization/types/LocalizationDataKey';
import { State } from '../types/State';
import { Getters } from './types/Getters';
import { Task } from '../state/task/types/Task';
import { TasksFilter } from '../state/task/types/TasksFilter';

const getFilteredTasks = (state: State): Task[] => {
  return state.task.tasks.filter((task) => {
    switch (state.task.filter) {
      case TasksFilter.all:
        return true;
      case TasksFilter.active:
        return !task.completed;
      case TasksFilter.completed:
        return task.completed;
    }
  });
};

const getLocalizedText = (language: LanguageCode, dataKey: LocalizationDataKey): string => {
  const localizationForLanguage = localization[language];

  return (localizationForLanguage ? localizationForLanguage[dataKey] ?? null : null) ?? defaultLocalization[dataKey];
};

export const useGetters = (state: State): Getters => ({
  get filteredTasks() {
    return getFilteredTasks(state);
  },
  getLocalizedText: (dataKey: LocalizationDataKey) => getLocalizedText(state.app.localizationLanguage, dataKey)
});
