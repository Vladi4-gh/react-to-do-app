import React from 'react';
import { Props } from './types/Props';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import { TaskManagementPopup } from '../TaskManagementPopup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useGetters } from '../../../../store/getters/getters';

export const EditTaskPopup: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  return (
    <TaskManagementPopup
      opened={props.opened}
      title={getLocalizedText(LocalizationDataKey.POPUPS_EDIT_TASK_POPUP_TITLE)}
      task={{
        id: props.task.id,
        title: props.task.title,
        description: props.task.description,
        completed: props.task.completed
      }}
      onSave={(task) => props.onSave(task)}
      onCancel={props.onCancel}
    />
  );
};
