import React from 'react';
import classNames from 'classnames';
import { Props } from './types/Props';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import styles from './styles.scss';

export const CheckButton: React.FC<Props> = (props) => {
  return (
    <Button
      className={classNames(styles['check-button'], { [styles['check-button_checked']]: props.checked }, props.className)}
      title={props.title}
      onClick={props.onClick}
    >
      {!props.checked && <FontAwesomeIcon icon={faCircle} />}
      {props.checked && <FontAwesomeIcon icon={faCheckCircle} />}
    </Button>
  );
};
