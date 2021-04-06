import React, { useState } from 'react';
import { Props } from './types/Props';
import { DataManagementPopup } from '../../base/DataManagementPopup';
import { LocalizedText } from '../../../LocalizedText';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import styles from './styles.scss';

export const TaskManagementPopup: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.task.title);
  const [description, setDescription] = useState(props.task.description);

  const resetState = () => {
    setTitle(props.task.title);
    setDescription(props.task.description);
  };

  return (
    <DataManagementPopup
      opened={props.opened}
      title={props.title}
      saveButtonDisabled={!title.trim().length}
      onSave={() => {
        props.onSave({
          id: props.task.id,
          title: title.trim(),
          description: description.trim(),
          completed: props.task.completed
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
            <LocalizedText dataKey={LocalizationDataKey.POPUPS_TASK_MANAGEMENT_POPUP_TITLE_INPUT_LABEL} />
          </span>
          <input type="text" className={styles['input']} value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className={styles['input-container']}>
          <span className={styles['label']}>
            <LocalizedText dataKey={LocalizationDataKey.POPUPS_TASK_MANAGEMENT_POPUP_DESCRIPTION_INPUT_LABEL} />
          </span>
          <input type="text" className={styles['input']} value={description} onChange={(event) => setDescription(event.target.value)} />
        </div>
      </div>
    </DataManagementPopup>
  );
};
