import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { v4 } from 'uuid';
import { TaskFilter } from '../../store/state/task/types/TaskFilter';
import { Button } from '../Button';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { setTasksFilter } from '../../store/state/task/actions';
import './styles.scss';

export const TaskFilterSwitcher: React.FC = () => {
  const { filter } = useTypedSelector((state) => state.task);
  const dispatch = useDispatch();
  const taskFilters = Object.values(TaskFilter);

  return (
    <ButtonSwitcher className={'task-filter-switcher'}>
      {taskFilters.map((taskFilter) => (
        <Button key={v4()} selected={filter === taskFilter} onClick={() => dispatch(setTasksFilter(taskFilter))}>
          {taskFilter}
        </Button>
      ))}
    </ButtonSwitcher>
  );
};
