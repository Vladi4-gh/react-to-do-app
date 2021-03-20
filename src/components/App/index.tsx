import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { switchTest } from '../../store/state/app/actions';
import { LocalizationDataKey } from '../../store/state/localization/types/LocalizationData';
import { Button } from '../Button';
import { LocalizedText } from '../LocalizedText';
import styles from './styles.scss';

export const App: React.FC = () => {
  const appState = useTypedSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className={styles['app']}>
      <Button className={styles['button']} onClick={() => dispatch(switchTest())}>
        <LocalizedText dataKey={LocalizationDataKey.TEST} />: {appState.test.toString()}
      </Button>
    </div>
  );
};
