import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function Createnote(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('')
  const [text, setText] = useState()


  const setnotesObj = () => {
    setShow(false)

    console.log("in createnote");
    props.setnotesobj(title, text);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button onClick={handleShow} variant="outline-primary">New Note</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Create New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Title" autoFocus onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Enter text here" onChange={(e) => setText(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={setnotesObj} >Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Createnote
