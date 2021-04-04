import React from 'react';
import classnames from 'classnames';
import { Props } from './types/Props';
import { Button } from '../../../buttons/Button';
import { Popup } from '../Popup';
import { LocalizedText } from '../../../LocalizedText';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useGetters } from '../../../../store/getters/getters';
import styles from './styles.scss';

export const ConfirmationPopup: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  return (
    <Popup opened={props.opened} title={props.title}>
      <div className={styles['text']}>{props.children}</div>
      <div className={styles['buttons-container']}>
        <Button
          className={classnames(styles['button'], styles['ok-button'])}
          title={getLocalizedText(LocalizationDataKey.POPUPS_CONFIRMATION_POPUP_OK_BUTTON_TITLE)}
          onClick={props.onConfirm}
        >
          <LocalizedText dataKey={LocalizationDataKey.POPUPS_CONFIRMATION_POPUP_OK_BUTTON_TEXT} />
        </Button>
        <Button
          className={classnames(styles['button'], styles['cancel-button'])}
          title={getLocalizedText(LocalizationDataKey.POPUPS_CONFIRMATION_POPUP_CANCEL_BUTTON_TITLE)}
          onClick={props.onCancel}
        >
          <LocalizedText dataKey={LocalizationDataKey.POPUPS_CONFIRMATION_POPUP_CANCEL_BUTTON_TEXT} />
        </Button>
      </div>
    </Popup>
  );
};
