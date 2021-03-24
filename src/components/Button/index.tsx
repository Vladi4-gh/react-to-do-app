import React from 'react';
import classNames from 'classnames';
import { Props } from './types/Props';
import styles from './styles.scss';

export const Button: React.FC<Props> = (props) => {
  return (
    <button className={classNames(styles['button'], { [styles['button_selected']]: props.selected }, props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
