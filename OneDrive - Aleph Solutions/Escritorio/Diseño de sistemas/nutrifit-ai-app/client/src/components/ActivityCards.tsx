import React from "react";

type Activity = {
  name: string;
  imageUrl: string;
};

const activities: Activity[] = [
  {
    name: "Running",
    imageUrl: "https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg",
  },
  {
    name: "Crossfit",
    imageUrl: "https://www.clarin.com/img/2024/02/19/XKwmLCMfV_2000x1500__1.jpg",
  },
  {
    name: "Gym",
    imageUrl: "https://i0.wp.com/blog.smartfit.com.mx/wp-content/uploads/2024/09/bulking-en-el-gym-1.jpg?fit=1200%2C675&ssl=1",
  },
  {
    name: "Natación",
    imageUrl: "https://concepto.de/wp-content/uploads/2019/06/natacion-e1562943144215.jpg",
  },
  {
    name: "Yoga",
    imageUrl: "https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/0d/temas/yoga.jpg.webp",
  },
  {
    name: "Spinning",
    imageUrl: "https://www.hola.com/imagenes/estar-bien/20190315138914/riesgos-lesiones-practicar-spinning-cs/0-658-262/peligrospinning-t.jpg?im=Resize=(1200)",
  },
];

const ActivityCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 m-5 bg-gray-100">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="max-w-xs rounded-lg shadow-lg bg-white overflow-hidden"
        >
          <img
            src={activity.imageUrl}
            alt={activity.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800">{activity.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityCards;
