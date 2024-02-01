import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

function First() {
  const [name, setname] = useState('');
  const [color, setColor] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
    setColor("");
    setname("");
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (!name.trim() || !color.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    handleModalShow();
  };

  return (
    <>
      <Container fluid className="p-0" style={{ backgroundColor: color ? color.toLowerCase() : 'cyan', height: '100vh' }}>
        <Row className="flex-column justify-content-center align-items-center h-100 m-0">
          <Col xs={12} sm={8} md={6} lg={4} className="px-2">
            <h1 className="text-center">Welcome {name ? name : 'User'}</h1>

            <Form.Group className="mx-auto">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mx-auto">
              <Form.Label>Select Color:</Form.Label>
              <Form.Control
                as="select"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              >
                <option value="" disabled>Select a color</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Orange">Orange</option>
                <option value="Purple">Purple</option>
                <option value="Pink">Pink</option>
                <option value="Brown">Brown</option>
                <option value="Gray">Gray</option>
              </Form.Control>

              <Button className="btn btn-success mt-3 mx-auto" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted Values</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {name}</p>
          <p>Color: {color}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default First;
