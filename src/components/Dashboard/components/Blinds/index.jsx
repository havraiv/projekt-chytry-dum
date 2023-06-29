import React from 'react';
import './style.css';

export const Blinds = () => {
  return (
    <div className="blinds">
      <div className="blinds__icon">
        {/* <img src="./images/blinds-open.svg"> */}
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button className="button button--active">Otevřeno</button>
        <button className="button">Zavřeno</button>
      </div>
    </div>
  );
};
