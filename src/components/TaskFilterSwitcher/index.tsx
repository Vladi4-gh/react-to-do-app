import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TaskFilter } from '../../store/state/task/types/TaskFilter';
import { Button } from '../Button';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { setTasksFilter } from '../../store/state/task/actions';
import { LocalizationDataKey } from '../../store/static/localization/types/LocalizationDataKey';
import { LocalizedText } from '../LocalizedText';
import { useGetters } from '../../store/getters/getters';
import classnames from 'classnames';
import styles from './styles.scss';

export const TaskFilterSwitcher: React.FC = () => {
  const state = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const { getLocalizedText } = useGetters(state);
  const taskFilters = Object.values(TaskFilter);

  const getLocalizationDataKey = (taskFilter: TaskFilter): LocalizationDataKey => {
    switch (taskFilter) {
      case TaskFilter.all:
        return LocalizationDataKey.TASK_FILTER_SWITCHER_ALL;
      case TaskFilter.active:
        return LocalizationDataKey.TASK_FILTER_SWITCHER_ACTIVE;
      case TaskFilter.completed:
        return LocalizationDataKey.TASK_FILTER_SWITCHER_COMPLETED;
    }
  };

  return (
    <ButtonSwitcher className={styles['task-filter-switcher']}>
      {taskFilters.map((taskFilter, index) => {
        const localizationDataKey = getLocalizationDataKey(taskFilter);

        return (
          <Button
            key={index}
            className={classnames(styles['button'], { [styles['button_selected']]: state.task.filter === taskFilter })}
            title={getLocalizedText(localizationDataKey)}
            onClick={() => dispatch(setTasksFilter(taskFilter))}
          >
            <LocalizedText dataKey={localizationDataKey} />
          </Button>
        );
      })}
    </ButtonSwitcher>
  );
};
