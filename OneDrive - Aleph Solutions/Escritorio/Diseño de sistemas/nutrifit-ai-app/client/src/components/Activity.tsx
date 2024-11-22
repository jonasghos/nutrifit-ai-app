import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

import LineChart from './LineChart';
import RadialBarChart from './RadialBarChart';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Card from './Card';
import { BsHeartPulseFill,  } from "react-icons/bs";
import { PiSneakerMove } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import ReactApexChart from 'react-apexcharts';
import HeartRateChart from './HeartRateChart';
import UserInfo from './UserInfo';

// Registra los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Activity: React.FC = () => {
  // Datos de actividad
  const activityData = {
    calorias: [2000, 2200, 2400, 2600, 2800],
    pasos: [3000, 4000, 5000, 6000, 7500],
    distancia: [2, 3, 4, 5, 6],
    tiempoSentado: [5, 4, 3, 2, 1],
  };

  // Configuración del gráfico
  const chartData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'], // Días de la semana
    datasets: [
      {
        label: 'Calorías Consumidas',
        data: activityData.calorias,
        borderColor: '#84bc65',
        backgroundColor: 'rgba(132, 188, 101, 0.2)',
        fill: true,
      },
      {
        label: 'Pasos Realizados',
        data: activityData.pasos,
        borderColor: '#c4deb4',
        backgroundColor: 'rgba(196, 222, 180, 0.2)',
        fill: true,
      },
      {
        label: 'Distancia Recorrida (km)',
        data: activityData.distancia,
        borderColor: '#a40b21',
        backgroundColor: 'rgba(164, 11, 33, 0.2)',
        fill: true,
      },
      {
        label: 'Tiempo Sentado (h)',
        data: activityData.tiempoSentado,
        borderColor: '#ee4c5a',
        backgroundColor: 'rgba(238, 76, 90, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex gap-6">
        <div>
        <h1 className='text-[#ee4c59]'>Mi Dashboard</h1>
        <br />
        <div className='flex gap-4 w-full '>
          <Card 
          color="blue-500"  // Color del card
          icon={<BsHeartPulseFill />
        }   // Icono del card
          title="Pulsasiones"   // Título
          value="80 LPM" 
          classes='bg-gradient-to-r from-[#84bc65] to-[#c4deb4] text-[#ee4c59]'      // Valor
          />
          <Card 
            color="blue-500"  // Color del card
            icon={<PiSneakerMove />}   // Icono del card
            title="Pasos"   // Título
            value="50784" 
            classes='bg-gradient-to-r from-[#84bc65] to-[#c4deb4] text-[#ee4c59]'      // Valor
            />
          <Card 
            color="blue-500"  // Color del card
            icon={<FaFire />}   // Icono del card
            title="Calorías"   // Título
            value="1721 KCAL" 
            classes='bg-gradient-to-r from-[#84bc65] to-[#c4deb4] text-[#ee4c59]'      // Valor
            />
        </div>
        <br />
        {/* <LineChart /> */}
        <br />
        <h2 className='text-[#ee4c59]'> Ritmo Cardíaco (ultimas 24 hs.)</h2>
        <HeartRateChart/>
        </div>      
        <div>
          <RadialBarChart />
          <UserInfo />
        </div>
    </div>

  );
};

export default Activity;
