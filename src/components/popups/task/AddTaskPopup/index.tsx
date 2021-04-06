import React from 'react';
import { Props } from './types/Props';
import { v4 } from 'uuid';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import { TaskManagementPopup } from '../TaskManagementPopup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useGetters } from '../../../../store/getters/getters';

export const AddTaskPopup: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  return (
    <TaskManagementPopup
      opened={props.opened}
      title={getLocalizedText(LocalizationDataKey.POPUPS_ADD_TASK_POPUP_TITLE)}
      task={{
        id: v4(),
        title: '',
        description: '',
        completed: false
      }}
      onSave={(task) => props.onSave(task)}
      onCancel={props.onCancel}
    />
  );
};
