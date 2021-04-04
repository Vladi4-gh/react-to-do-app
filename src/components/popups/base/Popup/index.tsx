import React from 'react';
import ReactJsPopup from 'reactjs-popup';
import { Props } from './types/Props';
import styles from './styles.scss';

export const Popup: React.FC<Props> = (props) => {
  const popupOverlayStyle = { background: 'rgba(0, 0, 0, 0.5)' };

  return (
    <ReactJsPopup open={props.opened} modal closeOnDocumentClick={false} closeOnEscape={false} {...{ overlayStyle: popupOverlayStyle }}>
      <div className={styles['popup-content']}>
        {props.title && <div className={styles['popup-content__header']}>{props.title}</div>}
        <div className={styles['popup-content__body']}>{props.children}</div>
      </div>
    </ReactJsPopup>
  );
};
