import React from 'react';
import { Props } from './types/Props';
import { Button } from '../../buttons/Button';
import { Popup } from '../Popup';
import { LocalizedText } from '../../LocalizedText';
import { LocalizationDataKey } from '../../../store/static/localization/types/LocalizationDataKey';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useGetters } from '../../../store/getters/getters';
import styles from './styles.scss';

export const RemoveTaskConfirmationPopup: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  return (
    <Popup opened={props.opened} title={'TASK_LIST_REMOVE_TASK_CONFIRMATION_POPUP_TITLE'}>
      <LocalizedText dataKey={LocalizationDataKey.TASK_LIST_REMOVE_TASK_CONFIRMATION_POPUP_TEXT} />
      <div className={styles['buttons-container']}>
        <Button
          className={styles['remove-task-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_TASK_BUTTON_TITLE)}
          onClick={() => props.onConfirm(props.task.id)}
        >
          OK
        </Button>
        <Button
          className={styles['cancel-button']}
          title={getLocalizedText(LocalizationDataKey.TASK_LIST_REMOVE_TASK_BUTTON_TITLE)}
          onClick={() => props.onCancel()}
        >
          Cancel
        </Button>
      </div>
    </Popup>
  );
};
