import React from 'react';
import './style.css';
import blindsOpenImg from './blinds-open.svg';
import blindsClosedImg from './blinds-closed.svg';

export const Blinds = () => {
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsOpenImg} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button className="button button--active">Otevřeno</button>
        <button className="button">Zavřeno</button>
      </div>
    </div>
  );
};
