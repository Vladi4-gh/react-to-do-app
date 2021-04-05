import React from 'react';
import classNames from 'classnames';
import { Props } from './types/Props';
import styles from './styles.scss';

export const Button: React.FC<Props> = (props) => {
  return (
    <button type="button" className={classNames(styles['button'], props.className)} title={props.title} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
