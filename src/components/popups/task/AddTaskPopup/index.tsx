import React, { useState } from 'react';
import { Props } from './types/Props';
import { v4 } from 'uuid';
import { DataManagementPopup } from '../../base/DataManagementPopup';
import { LocalizedText } from '../../../LocalizedText';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useGetters } from '../../../../store/getters/getters';
import styles from './styles.scss';

export const AddTaskPopup: React.FC<Props> = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  const resetState = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <DataManagementPopup
      opened={props.opened}
      title={getLocalizedText(LocalizationDataKey.POPUPS_REMOVE_TASK_CONFIRMATION_POPUP_TITLE)}
      saveButtonDisabled={!title.trim().length}
      onSave={() => {
        props.onSave({
          id: v4(),
          title: title.trim(),
          description: description.trim(),
          completed: false
        });
        resetState();
      }}
      onCancel={() => {
        resetState();
        props.onCancel();
      }}
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
