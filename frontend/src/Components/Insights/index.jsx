import React from 'react';
import AreaChart from './AreaChart';
import BarGraph from './BarGraph';

export default function index() {
  return (
    <div>
      <h2>Hi, John Doe!</h2>
      <p>
        Here are this months insights, check back regularlry for suggestions on
        how to imporve you working life.
      </p>
      <div className="d-flex flex-row">
        <BarGraph />
        <AreaChart />
      </div>
    </div>
  );
}
