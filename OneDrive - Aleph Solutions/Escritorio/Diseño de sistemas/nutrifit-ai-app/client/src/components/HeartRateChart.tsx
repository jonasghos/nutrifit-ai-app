import React from 'react';
import ReactApexChart from 'react-apexcharts';

const HeartRateChart: React.FC = () => {
  // Generar datos con picos entre 18:00 y 20:00
  const generateData = () => {
    const data: { x: string; y: number; color?: string }[] = [];
    const now = new Date();
  
    for (let i = 0; i < 48; i++) { // 48 puntos = 8 horas / 10 minutos
      const timestamp = new Date(now.getTime() - i * 10 * 60 * 1000); // Restar 10 minutos por punto
      const hours = timestamp.getHours();
      let heartRate;
      let color;
  
      // Agregar picos de 190, 200 y 220 entre las 18:00 y las 20:00
      if (hours >= 18 && hours < 20) {
        const spikes = [190, 200, 220];
        heartRate = spikes[Math.floor(Math.random() * spikes.length)];
        color = '#ff6b6b'; // Color rojo para los picos
      } else {
        // Ritmo cardíaco normal entre 60 y 120
        heartRate = Math.floor(Math.random() * (120 - 60) + 60);
        color = '#84bc65'; // Color verde para valores normales
      }
  
      data.unshift({ x: timestamp.toISOString(), y: heartRate, color });
    }
  
    return data;
  };
  
  const series = [
    {
      name: 'Heart Rate (BPM)',
      data: generateData(),
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      title: {
        text: 'Time',
      },
    },
    yaxis: {
      title: {
        text: 'BPM',
      },
      min: 50, // Ajustar al rango esperado
      max: 230,
    },
    tooltip: {
      x: {
        format: 'dd MMM HH:mm', // Formato de fecha
      },
    },
    colors: ['#84bc65'], // Color base
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#ff6b6b'], // Gradiente hacia rojo para los picos
        opacityFrom: 0.8,
        opacityTo: 0.3,
        stops: [0, 90, 100],
      },
    },
    annotations: {
      xaxis: [
        {
          x: new Date().setHours(18, 0, 0, 0), // Inicio de los picos
          x2: new Date().setHours(20, 0, 0, 0), // Fin de los picos
          fillColor: '#ffb3b3', // Color de fondo semitransparente
          opacity: 0.3,
          label: {
            text: 'Peak Heart Rate',
            style: {
              color: '#000',
              background: '#ff6b6b',
            },
          },
        },
      ],
    },
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md">
           <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default HeartRateChart;
