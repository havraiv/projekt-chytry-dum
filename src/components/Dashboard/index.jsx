import React from 'react';
import './style.css';
import { Lights } from './components/Lights';

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data.lights} />
    </main>
  );
};
