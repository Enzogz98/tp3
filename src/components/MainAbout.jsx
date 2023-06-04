import Foto from "../assets/Foto.jpg";
import { Button, Card } from "react-bootstrap";
import "../css/MainAbout.css";
import { useState } from "react";
import imagen1 from "../assets/1.png";
import imagen2 from "../assets/2.png";
import imagen3 from "../assets/3.png";

const MainAbout = () => {
  const [index, setIndex] = useState(0);
  const titles = ["Experiencia Laboral", "Formacion Academica", "Habilidades"];

  const bodies = [
    [
      "1- Albornoz Programacion, Programador Back-End; Diciembre 2022 a la Actualidad: Desarrollador de aplicaciones y paginas web orientado a la conexion con las bases de datos y tambien al mantenimiento de las mismas",
      "2- Teleperformance, Agente Telefonico; Enero 2020 a Diciembre 2021: Atención telefónica en el área de reclamos para la empresa Prisma, manejo de paquete office para planillas",
      "3- Tu Opinion, Editor; Enero 2017 a Diciembre 2019:Editor encargado de manejo de redes sociales, encargado de redacción y corrección de notas de un diario digital. A su vez tenía un equipo de cuatro personas a la que había que repartir las tareas.",
    ],
    [
      "Universidad Tecnológica Nacional, Técnico universitario en Programación",
      "Marzo 2022-Actualidad",
      "Instituto San Miguel, Tecnico Superior en Comunicacion Social",
      "Marzo 2016-Diciembre 2019",
      "CEF San Francisco, Titulo secundario orientado a la economia y gestion de organizaciones",
      "Marzo 2010-Diciembre 2015",
      "Argentina Programa 4.0, Certificacion en Ciencia de Datos",
      "Febrero 2023-Actualidad",
    ],
    [
      "Manejo de lenguajes de Programcion: C#, Python y JavaScript",
      "Manejo de gestores de bases de datos: SQL Server, MySQL, JSON SERVER",
      "Buena predisposicion al trabajo en equipo",
      "Manejo avanzado del paquete Office",
      "Nivel intermedio de Ingles",
    ],
  ];
  const fotos = [imagen1, imagen2, imagen3];
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };
  return (
    <>
      <div className="image-container">
        <img src={Foto} alt="" className="profile-image" />
      </div>
      <div>
        <Card className="custom-card">
          <div>
            <Card.Img variant="top" src={fotos[index]} className="rounded-circle img-small"/>
          </div>
          <Card.Title>
            <h5>{titles[index]}</h5>
          </Card.Title>
          <Card.Body>
            {bodies[index].map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </Card.Body>

          <Button onClick={handleNext}>Siguiente</Button>
        </Card>
      </div>
    </>
  );
};

export default MainAbout;
