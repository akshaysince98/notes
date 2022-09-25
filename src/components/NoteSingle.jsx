import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import './notes.css'

function NoteSingle(props) {
  const [show, setShow] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [alert, setAlert] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertClose = () => setAlert(false);
  const handleAlert = () => setAlert(true);
  const handleCloseNote = () => setShowNote(false);
  const handleShowNote = () => setShowNote(true);
  return (
    <>
      <Card border="info" style={{ width: '250px', height: '250px' }} className="card" >

        <Card.Header className='cardheader' style={{ height: '30%' }} onClick={handleShowNote}>

          <Button variant="outline-primary" onClick={handleShowNote} >{props.a.title}</Button>



        </Card.Header>

        <Card.Body style={{ height: '70%' }}>
          <Card.Text >
            {props.a.text}
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Edit note modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control as="textarea" rows={1} placeholder="Title" />
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
      {/* delete alert modal */}
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

      {/* show full note modal */}
      <Modal show={showNote} onHide={handleCloseNote} >
        <Card>
          <Modal.Header>
            <Modal.Title>{props.a.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: 'fit-content' }} >
            <div className='textbox'>
              {props.a.text}

            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className='actions'>
              <Button variant="danger" onClick={handleAlert}>Delete</Button>
              <Button variant="primary" onClick={handleShow} >Edit</Button>
              <Button variant="primary" onClick={handleCloseNote}>Close</Button>
            </div>
          </Modal.Footer>
        </Card>
      </Modal>
    </>
  )
}

export default NoteSingle