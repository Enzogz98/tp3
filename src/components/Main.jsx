/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import video from "../assets/FIFA.mp4";
import "../css/Main.css";

const Main = (props) => {
  return (
    <div className="card-container">
      <Card className="card" style={{ width: "20rem" }}>
        <div className="zoom-on-hover">
          <Card.Img variant="top" src={props.person.imagen.Foto} />
        </div>
        <Card.Body>
          <Card.Title>
            <p>{props.person.nombre}</p>
          </Card.Title>
          <Card.Text>
            <p className="bold-text">Informacion Personal:</p>
            <p className="bold-text">Carrera = {props.person.carrera}</p>
            <p className="bold-text">Edad= {props.person.edad} años.</p>
            <p className="bold-text">Legajo= {props.person.legajo}</p>
            <p className="bold-text">
              Conocimientos= {props.person.conocimientosFront}{" "}
              {props.person.conocimientosBack}
            </p>
          </Card.Text>
          <Button href="/contact" variant="primary">
            Hazme una Consulta
          </Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "20rem" }}>
        <div className="zoom-on-hover">
          <video controls className="video-container">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <Card.Body>
          <Card.Title>
            <p>{props.person.nombre}</p>
          </Card.Title>
          <Card.Text>
            <p className="bold-text">Pasatiempos:</p>
            <p className="bold-text">
              Deporte favorito= {props.person.deporte}
            </p>
            <p className="bold-text">Hobbie= {props.person.hobbie}.</p>
            <p className="bold-text">Nivel= {props.person.logro}</p>
          </Card.Text>
          <Button href="/contact" variant="primary">
            Unete a los mancos
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Main;
