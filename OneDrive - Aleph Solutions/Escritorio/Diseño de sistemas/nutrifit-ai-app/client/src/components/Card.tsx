// src/components/Card.tsx

import React from 'react';

interface CardProps {
  color: string;        // Color de fondo del card
  classes?: string;     // Clases adicionales para personalizar el card
  icon: JSX.Element;    // Icono que se pasará como un JSX element (ej. <FaCoffee />)
  title: string;        // Título de la card
  value: string | number; // Valor que se mostrará en la card
}

const Card: React.FC<CardProps> = ({ color, classes = '', icon, title, value }) => {
  return (
    <div
      className={`bg-${color} p-4 rounded-lg shadow-lg w-80 h-24 ${classes}`} // Usamos `w-80` para 350px y `h-24` para 100px
    >
      <div className="flex items-center">
        <div className="text-5xl mr-4">
          {icon} {/* Icono */}
        </div>
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className=" text-lg">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;