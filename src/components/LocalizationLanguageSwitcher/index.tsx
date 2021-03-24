import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { v4 } from 'uuid';
import { setLocalizationLanguage } from '../../store/state/app/actions';
import { LanguageCode } from '../../store/static/localization/types/LanguageCode';
import { Button } from '../Button';
import { ButtonSwitcher } from '../ButtonSwitcher';
import styles from './styles.scss';
import { languageNames } from '../../store/static/localization/localization';

export const LocalizationLanguageSwitcher: React.FC = () => {
  const appState = useTypedSelector((state) => state.app);
  const dispatch = useDispatch();
  const localizationLanguages = Object.values(LanguageCode);

  return (
    <ButtonSwitcher className={styles['localization-language-switcher']}>
      {localizationLanguages.map((localizationLanguage) => (
        <Button
          key={v4()}
          className={styles['button']}
          selected={appState.localizationLanguage === localizationLanguage}
          onClick={() => dispatch(setLocalizationLanguage(localizationLanguage))}
        >
          {languageNames[localizationLanguage]}
        </Button>
      ))}
    </ButtonSwitcher>
  );
};
