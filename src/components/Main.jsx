/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import video from "../assets/FIFA.mp4"
import "../css/Main.css"
const Main = (props) => {
  return (
    <div className="card-container">
      <Card className="card" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={props.person.imagen.Foto} />
        <Card.Body>
          <Card.Title>
            <p>{props.person.nombre}</p>
          </Card.Title>
          <Card.Text>
            <p>Informacion Personal:</p>
            <p>Carrera = {props.person.carrera}</p>
            <p>
              Edad= {props.person.edad} años. Legajo= {props.person.legajo}
            </p>
            <p>
              Conocimientos= {props.person.conocimientosFront}{" "}
              {props.person.conocimientosBack}
            </p>
          </Card.Text>
          <Button href="/contact" variant="primary">Hazme una Consulta</Button>
        </Card.Body>
      </Card>
      <Card className="card" style={{ width: "20rem" }}>
        <video controls>
            <source src={video} type="video/mp4"/>
        </video>
        <Card.Body>
          <Card.Title>
            <p>{props.person.nombre}</p>
          </Card.Title>
          <Card.Text>
            <p>Pasatiempos:</p>
            <p>Deporte favorito= {props.person.deporte}</p>
            <p>
              Hobbie= {props.person.hobbie}.
            </p>
            <p>Nivel= {props.person.logro}</p>
          </Card.Text>
          <Button href="/contact" variant="primary">Unete a los mancos</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Main;