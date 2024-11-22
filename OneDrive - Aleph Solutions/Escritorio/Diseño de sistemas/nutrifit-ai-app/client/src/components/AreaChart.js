// src/components/AreaChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  const options = {
    chart: {
      height: 380,
      type: 'area',
      stacked: false,
    },
    stroke: {
      curve: 'straight'
    },
    series: [
      { name: "Music", data: [11, 15, 26, 20, 33, 27] },
      { name: "Photos", data: [32, 33, 21, 42, 19, 32] },
      { name: "Files", data: [20, 39, 52, 11, 29, 43] }
    ],
    xaxis: {
      categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2'],
    },
    tooltip: {
      followCursor: true
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div id="areachart">
      <ReactApexChart options={options} series={options.series} type="area" height={380} />
    </div>
  );
};

export default AreaChart;
