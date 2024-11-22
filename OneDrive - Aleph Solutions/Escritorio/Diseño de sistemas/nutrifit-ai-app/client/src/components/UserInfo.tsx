import React from "react";
import { jonas, User } from '../models/user'// Importa el tipo User si es necesario

type UserInfoProps = {
  user: User;
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#ee4c59" }} className="">Información del Usuario</h2>
      <br />
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Nombre y Apellido :</strong> Jonas Gho
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Edad:</strong> {user.edad} años
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Sexo:</strong> {user.sexo}
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Peso:</strong> {user.peso} kg
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Altura:</strong> {user.altura} m
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Nivel de Hidratación:</strong> {user.analisisHabitosAlimenticios.nivelHidratacion} litros/día
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Porcentaje de Grasa Corporal:</strong> {user.datosAntropometricos.porcentajeGrasaCorporal}%
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Horas de Sueño:</strong> {user.actividadFisica.sueño.horas} horas/día
      </div>
      <div style={{ marginBottom: "10px" }} className="text-[#ee4c59]">
        <strong>Masa Muscular:</strong> {user.datosAntropometricos.masaMuscular} kg
      </div>
    </div>
  );
};

// Para usar el componente con el objeto jonas
const App: React.FC = () => {
  return <UserInfo user={jonas} />;
};

export default App;