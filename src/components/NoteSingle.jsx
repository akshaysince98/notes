import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import './notes.css'

function NoteSingle(props) {
  const [show, setShow] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [alert, setAlert] = useState(false)
  const [ntitle, setNtitle] = useState(props.a.title)
  const [ntext, setNtext] = useState(props.a.text)

  // functions to close modals
  const handleShowClose = () => setShow(false);
  const handleAlertClose = () => setAlert(false);
  const handleNoteClose = () => setShowNote(false);

  // functions to open modals
  const handleShow = () => setShow(true);
  const handleAlert = () => setAlert(true);
  const handleShowNote = () => setShowNote(true);

  const deleteN = () => {
    props.deleteNote(props.a.nid)
    handleAlertClose();
    handleNoteClose();
  }

  const editN = () => {

    handleShowClose()
    handleNoteClose()
    props.editNote(props.a.nid, ntitle, ntext)
  }

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
      <Modal show={show} onHide={handleShowClose}>
        <Modal.Header>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control as="textarea" rows={1} placeholder="Title" defaultValue={props.a.title} onChange={(e) => setNtitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="Enter text here" defaultValue={props.a.text} onChange={(e) => setNtext(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShowClose}>Close</Button>
          <Button variant="primary" onClick={editN} >Save Changes</Button>
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
          <Button variant="primary" onClick={deleteN}>Yes</Button>
        </Modal.Footer>
      </Modal>

      {/* show full note modal */}
      <Modal show={showNote} onHide={handleNoteClose} >
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
              <Button variant="danger" onClick={handleAlert} >Delete</Button>
              <Button variant="primary" onClick={handleShow} >Edit</Button>
              <Button variant="primary" onClick={handleNoteClose}>Close</Button>
            </div>
          </Modal.Footer>
        </Card>
      </Modal>
    </>
  )
}

export default NoteSingle