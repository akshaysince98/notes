import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import './notes.css'

function NoteSingle() {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertClose = () => setAlert(false);
  const handleAlert = () => setAlert(true);
  return (
    <>
      <Card border="info" style={{ width: '250px' }} className="card">

        <Card.Header className='cardheader'>Header
          <div className='actions' >
            <Button variant="outline-primary" onClick={handleShow} >Edit</Button>
            <Button variant="outline-danger" onClick={handleAlert}>Delete</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Title" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Enter text here" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleAlertClose}>
        <Modal.Header>
          <Modal.Title>DELETE NOTE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete a note. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAlertClose}>No</Button>
          <Button variant="primary" onClick={handleAlertClose}>Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NoteSingle