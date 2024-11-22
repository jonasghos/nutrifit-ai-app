import React from 'react';
import { FaHeartbeat } from 'react-icons/fa'; // Icono de signo vital

// Define el tipo explícito para los datos de signos vitales
type VitalSignsData = {
  frecuenciaCardiaca: string;
  promedioCaminar: string;
};

const VitalSigns: React.FC = () => {
  const vitalSignsData: VitalSignsData = {
    frecuenciaCardiaca: '72 bpm',
    promedioCaminar: '80 bpm',
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="text-[#a40b21] text-4xl">
          <FaHeartbeat />
        </div>
        <h2 className="text-xl font-semibold text-[#a40b21]">Signos Vitales</h2>
      </div>

      <div className="mt-4">
        {/* Accede de manera segura a las propiedades del objeto */}
        {Object.keys(vitalSignsData).map((key) => (
          <div key={key} className="flex justify-between text-[#ee4c59] text-sm font-medium py-2">
            <span>{key.replace(/([A-Z])/g, ' $1')}</span>
            <span>{vitalSignsData[key as keyof VitalSignsData]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VitalSigns;
