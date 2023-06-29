import React from 'react';
import './style.css';
import electricityImg from './img/electricity.svg';
import waterImg from './img/water.svg';

export const Energy = () => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          {/* <img src="./images/electricity.svg"> */}
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">36.7 kW</div>
        </div>
      </div>
    </div>
  );
};
