import React from 'react';
import './style.css';
import { Lights } from './components/Lights';
import { Climate } from './components/Climate';

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
      <Climate
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      />
    </main>
  );
};
