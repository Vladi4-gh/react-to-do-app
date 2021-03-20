import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Props } from './types/Props';
import { useGetters } from '../../store/getters/getters';

export const LocalizedText: React.FC<Props> = (props) => {
  const state = useTypedSelector((state) => state);
  const getters = useGetters(state);
  const localizedText = getters.getLocalizedText(props.dataKey);

  return <>{localizedText}</>;
};
