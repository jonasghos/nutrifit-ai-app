import React from 'react';
import { FaWeight } from 'react-icons/fa'; // Icono de peso

// Define el tipo explícito para los datos de medidas corporales
type BodyMetricsData = {
  estatura: string;
  peso: string;
  masaCorporal: string;
  imc: string;
  grasaCorporal: string;
};

const BodyMetrics: React.FC = () => {
  const bodyMetricsData: BodyMetricsData = {
    estatura: '1.75 m',
    peso: '70 kg',
    masaCorporal: '22.9',
    imc: '22.9',
    grasaCorporal: '18%',
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="text-[#a40b21] text-4xl">
          <FaWeight />
        </div>
        <h2 className="text-xl font-semibold text-[#a40b21]">Medidas Corporales</h2>
      </div>

      <div className="mt-4">
        {/* Accede de manera segura a las propiedades del objeto */}
        {Object.keys(bodyMetricsData).map((key) => (
          <div key={key} className="flex justify-between text-[#ee4c59] text-sm font-medium py-2">
            <span>{key.replace(/([A-Z])/g, ' $1')}</span>
            <span>{bodyMetricsData[key as keyof BodyMetricsData]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BodyMetrics;
  