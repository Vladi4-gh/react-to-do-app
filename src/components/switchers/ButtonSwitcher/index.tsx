import React from 'react';
import { Props } from './types/Props';
import classNames from 'classnames';
import styles from './styles.scss';

export const ButtonSwitcher: React.FC<Props> = (props) => {
  return <div className={classNames(styles['button-switcher'], props.className)}>{props.children}</div>;
};
