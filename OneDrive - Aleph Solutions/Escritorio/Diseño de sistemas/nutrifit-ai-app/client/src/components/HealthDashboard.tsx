import React from 'react';
import Activity from './Activity';  // Importa el componente de Actividad
import VitalSigns from './VitalSigns';  // Importa el componente de Signos Vitales
import BodyMetrics from './BodyMetrics';  // Importa el componente de Medidas Corporales

const HealthDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-[#a40b21]">Información de Salud</h1>

      {/* Sección con el grid para mostrar las 3 secciones de manera responsive */}
      <div className="flex
      ">
        {/* Sección de Actividad */}
        <Activity />

        {/* Sección de Signos Vitales */}
        {/* <VitalSigns /> */}

        {/* Sección de Medidas Corporales */}
        {/* <BodyMetrics /> */}
      </div>
    </div>
  );
}

export default HealthDashboard;
