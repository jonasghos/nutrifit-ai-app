import React from 'react';
import HealthDashboard from '../components/HealthDashboard';

const Home: React.FC = () => {
  return (
    <section id="home">
      <HealthDashboard/>
    </section>
  );
};

export default Home;

//lamada al backend
// import React, { useEffect, useState } from 'react';
// import { getData } from '../services/api'; // Supongamos que tienes un servicio configurado

// const Home: React.FC = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Llamada al backend
//     getData()
//       .then((data) => setMessage(data.message)) // Actualiza el estado con los datos
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Home</h1>
//       <p>{message ? message : 'Loading...'}</p>
//     </div>
//   );
// };

// export default Home;