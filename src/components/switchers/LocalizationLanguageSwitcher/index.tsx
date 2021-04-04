import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { setLocalizationLanguage } from '../../../store/state/app/actions';
import { LanguageCode } from '../../../store/static/localization/types/LanguageCode';
import { Button } from '../../buttons/Button';
import { ButtonSwitcher } from '../ButtonSwitcher';
import { languageNames } from '../../../store/static/localization/localization';
import classnames from 'classnames';
import styles from './styles.scss';

export const LocalizationLanguageSwitcher: React.FC = () => {
  const appState = useTypedSelector((state) => state.app);
  const dispatch = useDispatch();
  const localizationLanguages = Object.values(LanguageCode);

  return (
    <ButtonSwitcher className={styles['localization-language-switcher']}>
      {localizationLanguages.map((localizationLanguage, index) => {
        const languageName = languageNames[localizationLanguage];

        return (
          <Button
            key={index}
            className={classnames(styles['button'], { [styles['button_selected']]: appState.localizationLanguage === localizationLanguage })}
            title={languageName}
            onClick={() => dispatch(setLocalizationLanguage(localizationLanguage))}
          >
            {languageName}
          </Button>
        );
      })}
    </ButtonSwitcher>
  );
};
