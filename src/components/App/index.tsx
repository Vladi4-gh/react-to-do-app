import React from 'react';
import { LocalizationDataKey } from '../../store/static/localization/types/LocalizationDataKey';
import { LocalizationLanguageSwitcher } from '../LocalizationLanguageSwitcher';
import { LocalizedText } from '../LocalizedText';
import { TaskFilterSwitcher } from '../TaskFilterSwitcher';
import { TaskList } from '../TaskList';
import styles from './styles.scss';

export const App: React.FC = () => {
  return (
    <div className={styles['app']}>
      <div className={styles['container']}>
        <div className={styles['title']}>
          <LocalizedText dataKey={LocalizationDataKey.APP_TITLE_TEXT} />
        </div>
        <TaskList />
        <div className={styles['switchers']}>
          <TaskFilterSwitcher />
          <LocalizationLanguageSwitcher />
        </div>
      </div>
    </div>
  );
};
