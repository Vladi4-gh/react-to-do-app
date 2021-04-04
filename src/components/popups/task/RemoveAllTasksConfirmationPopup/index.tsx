import React from 'react';
import { Props } from './types/Props';
import { ConfirmationPopup } from '../../base/ConfirmationPopup';
import { LocalizedText } from '../../../LocalizedText';
import { LocalizationDataKey } from '../../../../store/static/localization/types/LocalizationDataKey';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useGetters } from '../../../../store/getters/getters';

export const RemoveAllTasksConfirmationPopup: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);

  return (
    <ConfirmationPopup
      opened={props.opened}
      title={getLocalizedText(LocalizationDataKey.POPUPS_REMOVE_ALL_TASKS_CONFIRMATION_POPUP_TITLE)}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
    >
      <LocalizedText dataKey={LocalizationDataKey.POPUPS_REMOVE_ALL_TASKS_CONFIRMATION_POPUP_TEXT} />
    </ConfirmationPopup>
  );
};
