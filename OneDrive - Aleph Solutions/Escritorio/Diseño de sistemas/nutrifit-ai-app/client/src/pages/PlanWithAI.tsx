import React from 'react';
import ChatView from '../components/Chatview';
import image from '../images/b2ap3_large_profesion-de-nutricionista-clinico.jpg'; // Ajusta la ruta según tu estructura de carpetas

const PlanWithAI: React.FC = () => {
  return (
    <section id="plan-ai">
      <div className='flex'>
        <ChatView />
        <img src={image} alt="Descripción de la imagen"  className='w-1/2'/>
      </div>
    </section>
  );
};

export default PlanWithAI;