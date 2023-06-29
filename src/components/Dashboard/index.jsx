import React from 'react';
import './style.css';

export const Dashboard = () => {
  return (
    <main class="dashboard">
      <div class="lights">
        <div class="light">
          <div class="light__icon">
            {/* <img src="./images/light-off.svg"> */}
          </div>
          <div class="light__name">Obývací pokoj</div>
        </div>

        <div class="light">
          <div class="light__icon">
            {/* <img src="./images/light-on.svg"> */}
          </div>
          <div class="light__name">Ložnice</div>
        </div>

        <div class="light">
          <div class="light__icon">
            {/* <img src="./images/light-on.svg"> */}
          </div>
          <div class="light__name">Kuchyň</div>
        </div>

        <div class="light">
          <div class="light__icon">
            {/* <img src="./images/light-off.svg"> */}
          </div>
          <div class="light__name">Chodba</div>
        </div>
      </div>

      <div class="climate">
        <div class="climate__icon">{/* <img src="./images/temp.svg"> */}</div>
        <div class="climate__content">
          <div class="climate__temperature">24&deg;C</div>
          <div class="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
        </div>
        <div class="climate__controls">
          <button class="button">+</button>
          <button class="button">-</button>
        </div>
      </div>

      <div class="blinds">
        <div class="blinds__icon">
          {/* <img src="./images/blinds-open.svg"> */}
        </div>
        <div class="blinds__name">Žaluzie</div>
        <div class="blinds__controls">
          <button class="button button--active">Otevřeno</button>
          <button class="button">Zavřeno</button>
        </div>
      </div>

      <div class="energy">
        <div class="energy__source">
          <div class="energy__icon">
            {/* <img src="./images/electricity.svg"> */}
          </div>
          <div class="energy__consumption">
            <div class="energy__description">Elektřina</div>
            <div class="energy__value">36.7 kW</div>
          </div>
        </div>
        <div class="energy__source">
          <div class="energy__icon">{/* <img src="./images/water.svg"> */}</div>
          <div class="energy__consumption">
            <div class="energy__description">Voda</div>
            <div class="energy__value">
              14.1 m<sup>3</sup>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
