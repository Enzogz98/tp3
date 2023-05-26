import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
const MainContact = () => {
  return (
    <div className="contact">
      <br />
      <br />
      <h2>Contactame</h2>
      <br />
      <br />
        <Form className='text-center'>
          <Form.Label>DNI</Form.Label>
          <Form.Control type='number'></Form.Control>
          <br />
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type='text'></Form.Control>
          <br />
          <Form.Label>Motivo de la consulta</Form.Label>
          <Form.Control type='text'></Form.Control>
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control type='text'></Form.Control>
          <br />
          <Form.Label>Telefono</Form.Label>
          <Form.Control type='number'></Form.Control>
          <br />
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type='text'></Form.Control>
          <br />
          <Button className='btn btn-dark' type='submit'>Enviar</Button>

        </Form>
    </div>
  )
}

export default MainContact