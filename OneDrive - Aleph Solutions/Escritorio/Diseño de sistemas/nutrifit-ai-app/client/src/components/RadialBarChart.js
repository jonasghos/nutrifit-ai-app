// src/components/RadialBarChart.js

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = () => {
  const options = {
    chart: {
      type: 'radialBar',
      height: 350,
      width: 380,
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: '48%',
          background: 'transparent',
        },
        track: {
          show: false,
        },
        startAngle: -180,
        endAngle: 180
      },
    },
    stroke: {
      lineCap: 'round'
    },
    series: [80, 65, 40],
    labels: ['Pasos', 'Calorías Quemadas', 'Horas de sueño'],
    legend: {
      show: true,
      floating: true,
      position: 'right',
      offsetX: 0,
      offsetY: 230
    },
  };

  return (
    <div id="radialBarBottom">
      <h2 className=' text-[#ee4c59]'> Objetivos Semanales </h2>
      <ReactApexChart options={options} series={options.series} type="radialBar" height={350} width={380} />
    </div>
  );
};

export default RadialBarChart;
