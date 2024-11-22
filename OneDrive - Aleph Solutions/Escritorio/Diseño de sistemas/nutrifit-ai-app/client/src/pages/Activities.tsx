import React from 'react';
import ActivityCards from '../components/ActivityCards';

const Activities: React.FC = () => {
  return (
    <section id="activities">
      <br />
      <h1 className=' text-[#ee4c59] p-4 text-center text-2xl'><strong>Actividades Recomendadas</strong></h1>
      <ActivityCards/>

    </section>
  );
};

export default Activities;