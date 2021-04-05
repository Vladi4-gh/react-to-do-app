import React, { useState } from 'react';
import { Props } from './types/Props';
import { DataManagementPopup } from '../../base/DataManagementPopup';
import { LocalizedText } from '../../../LocalizedText';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useGetters } from '../../../../store/getters/getters';
import styles from './styles.scss';

export const EditTaskPopup: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  return (
    <DataManagementPopup
      opened={props.opened}
      title={getLocalizedText(LocalizationDataKey.POPUPS_REMOVE_TASK_CONFIRMATION_POPUP_TITLE)}
      saveButtonDisabled={!title.trim().length}
      onSave={() =>
        props.onSave({
          id: props.task.id,
          title: title.trim(),
          description: description.trim(),
          completed: props.task.completed
        })
      }
      onCancel={props.onCancel}
    >
      <div className={styles['container']}>
        <div className={styles['input-container']}>
          <span className={styles['label']}>
            <LocalizedText dataKey={LocalizationDataKey.POPUPS_REMOVE_ALL_COMPLETED_TASKS_CONFIRMATION_POPUP_TEXT} />
          </span>
          <input type="text" className={styles['input']} value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className={styles['input-container']}>
          <span className={styles['label']}>
            <LocalizedText dataKey={LocalizationDataKey.POPUPS_REMOVE_ALL_COMPLETED_TASKS_CONFIRMATION_POPUP_TEXT} />
          </span>
          <input type="text" className={styles['input']} value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
      </div>
    </DataManagementPopup>
  );
};
