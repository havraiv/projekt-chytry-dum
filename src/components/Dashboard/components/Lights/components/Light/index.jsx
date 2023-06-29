import React from 'react';
import './style.css';
import lightOffImg from './img/light-off.svg';
import lightOnImg from './img/light-on.svg';

export const Light = () => {
  return (
    <div className="light">
      <div className="light__icon">
        <img src={lightOffImg} />
      </div>
      <div className="light__name">Chodba</div>
    </div>
  );
};
