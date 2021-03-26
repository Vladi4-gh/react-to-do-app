import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Props } from './types/Props';
import { useGetters } from '../../store/getters/getters';

export const LocalizedText: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const { getLocalizedText } = useGetters(state);
  const localizedText = getLocalizedText(props.dataKey);

  return <>{localizedText}</>;
};
