export type User = {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  sexo: "Masculino" | "Femenino"; // Puedes restringir a estos dos valores
  peso: number;
  altura: number;
  estres: number;
  historialMedico: {
      enfermedadesCronicas: string[];
      alergiasAlimentarias: string[];
      cirugiasPrevias: string[];
      condicionesGeneticas: string[];
  };
  medicamentosActuales: string[];
  historialFamiliar: {
      enfermedadesHereditarias: string[];
  };
  habitosDiarios: {
      consumoTabaco: boolean;
      consumoAlcohol: boolean;
      consumoDrogas: boolean;
  };
  analisisHabitosAlimenticios: {
      patronesAlimentacion: {
          frecuenciaComidas: string;
          horarios: string[];
          tiposAlimentos: string[];
      };
      cantidadCalorias: {
          carbohidratos: number;
          proteinas: number;
          grasas: number;
      };
      intoleranciasAlergias: string[];
      nivelHidratacion: number;
  };
  datosAntropometricos: {
      imc: number;
      porcentajeGrasaCorporal: number;
      masaMuscular: number;
      aguaCorporal: number;
      distribucionGrasa: {
          visceral: number;
          subcutanea: number;
      };
      medidasCorporales: {
          cintura: number;
          cadera: number;
          brazo: number;
      };
  };
  actividadFisica: {
      nivelActividad: {
          tipoEjercicio: string;
          frecuencia: string;
          intensidad: string;
          duracion: string;
      };
      tiempoSedentario: number;
      sueño: {
          horas: number;
          calidad: string;
          patronesDescanso: string;
      };
  };
};

// Ejemplo de uso en el frontend
export const jonas: User = {
  id: 1,
  nombre: "Jonas",
  apellido: "Gho",
  edad: 29,
  sexo: "Masculino",
  peso: 78,
  altura: 1.75,
  estres: 30,
  historialMedico: {
      enfermedadesCronicas: ["Ninguna"],
      alergiasAlimentarias: ["Ninguna"],
      cirugiasPrevias: ["Ninguna"],
      condicionesGeneticas: ["Ninguna"]
  },
  medicamentosActuales: ["Ninguno"],
  historialFamiliar: {
      enfermedadesHereditarias: []
  },
  habitosDiarios: {
      consumoTabaco: false,
      consumoAlcohol: true,
      consumoDrogas: false
  },
  analisisHabitosAlimenticios: {
      patronesAlimentacion: {
          frecuenciaComidas: "3 comidas principales y 2 snacks",
          horarios: ["08:00", "12:30", "19:00"],
          tiposAlimentos: ["Frutas", "Verduras", "Carnes magras", "Cereales integrales"]
      },
      cantidadCalorias: {
          carbohidratos: 250,
          proteinas: 150,
          grasas: 70
      },
      intoleranciasAlergias: ["Ninguna"],
      nivelHidratacion: 2.5
  },
  datosAntropometricos: {
      imc: 25.5,
      porcentajeGrasaCorporal: 20,
      masaMuscular: 60,
      aguaCorporal: 60,
      distribucionGrasa: {
          visceral: 10,
          subcutanea: 15
      },
      medidasCorporales: {
          cintura: 85,
          cadera: 95,
          brazo: 30
      }
  },
  actividadFisica: {
      nivelActividad: {
          tipoEjercicio: "Correr",
          frecuencia: "3 veces a la semana",
          intensidad: "Moderada",
          duracion: "30 minutos"
      },
      tiempoSedentario: 6,
      sueño: {
          horas: 7,
          calidad: "Buena",
          patronesDescanso: "Regular"
      }
  }
};