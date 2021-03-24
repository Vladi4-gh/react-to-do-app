import React from 'react';
import { LocalizationDataKey } from '../../store/static/localization/types/LocalizationDataKey';
import { LocalizationLanguageSwitcher } from '../LocalizationLanguageSwitcher';
import { LocalizedText } from '../LocalizedText';
import styles from './styles.scss';

export const App: React.FC = () => {
  return (
    <div className={styles['app']}>
      <LocalizedText dataKey={LocalizationDataKey.TEST} />
      <LocalizationLanguageSwitcher />
    </div>
  );
};
