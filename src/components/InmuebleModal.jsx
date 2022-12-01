import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Axios from "axios";


function InmuebleModal() {
  //Modal: abrir y cerrar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //rutas
  const baseUrl = 'http://localhost:8080/api/personas';
  const baseUrl1 = 'http://localhost:8080/api/inmuebles';

  //acceso al DOM para guardar en POST
  const descripcion = useRef(null);
  const coeficiente = useRef(null);
  let propietario;

  //Hooks
  const [list, setList] = useState([]);

  //Get
  useEffect(() => {
    Axios.get(baseUrl).then((response) => {
      setList(response.data);
    });
  }, []);

  //Post
  function createPost(desc) {
    Axios.post(baseUrl1, {
      "descripcion" : descripcion.current.value,
      "coeficiente" : coeficiente.current.value,
      "propietario": {
          "_id" : propietario
      }
      }).then(
          handleClose())
        .then(alert('Registro guardado con exito'))
  }

  //Handle para seleccionar persona
  const handleChange = event => {
    console.log(event.target.value);
    propietario = (event.target.value);
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Insertar Nuevo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Inmueble</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apartamento/Casa/Local"
                autoFocus
                ref={descripcion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Coeficiente</Form.Label>
              <Form.Control
                name='coeficiente'
                type="text"
                placeholder="Indice de avaluo, por ejemplo 20"
                autoFocus
                ref={coeficiente}
              />
            </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Selecciona el propietario del inmueble</Form.Label>
                <div>
                  <select onChange={handleChange} required>
                    {list.map(option => (
                      <option key={option._id} value={option._id}>
                        {option.nombre}
                      </option>
                    ))}
                  </select>
                </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={createPost}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export {InmuebleModal}