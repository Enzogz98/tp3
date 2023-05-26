import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Table} from "react-bootstrap";

import { useState } from "react";
const MainContact = () => {
  const [formData, setFormData] = useState([]);
  const [inputData, setInputData]= useState({
    dni:'', nombre:'', motivo:'', email:'', telefono:'', descripcion:''
  })
  const handleInputChange=(event) => {
    const {name,value}= event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]:value
    }))
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData((prevFormData) => [...prevFormData, inputData]);
    setInputData({
      dni:'', nombre:'', motivo:'', email:'', telefono:'', descripcion:''
    })
  }
  return (
    <div className="contact">
      <br />
      <br />
      <h2>Contactame</h2>
      <br />
      <br />
        <Form className='text-center'>
          <Form.Label>DNI</Form.Label>
          <Form.Control type='number' name="dni" value={inputData.dni} onChange={handleInputChange}></Form.Control>
          <br />
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control type='text' name="nombre" value={inputData.nombre} onChange={handleInputChange}></Form.Control>
          <br />
          <Form.Label>Motivo de la consulta</Form.Label>
          <Form.Control type='text' name="motivo" value={inputData.motivo} onChange={handleInputChange}></Form.Control>
          <br />
          <Form.Label>Email</Form.Label>
          <Form.Control type='text' name="email" value={inputData.email} onChange={handleInputChange}></Form.Control>
          <br />
          <Form.Label>Telefono</Form.Label>
          <Form.Control type='number' name="telefono" value={inputData.telefono} onChange={handleInputChange}></Form.Control>
          <br />
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type='text' name="descripcion" value={inputData.descripcion} onChange={handleInputChange}></Form.Control>
          <br />
          <Button className='btn btn-dark' onClick={handleFormSubmit} type='submit'>Enviar</Button>

        </Form>
        <br />
        <br />
        <h2>Consultas anteriores</h2>
        <Table striped bordered>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Nombre y Apellido</th>
            <th>Motivo de la consulta</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.dni}</td>
              <td>{data.nombre}</td>
              <td>{data.motivo}</td>
              <td>{data.email}</td>
              <td>{data.telefono}</td>
              <td>{data.descripcion}</td>

            </tr>
          )
          )}
        </tbody>
        </Table>

    </div>
  )
}

export default MainContact