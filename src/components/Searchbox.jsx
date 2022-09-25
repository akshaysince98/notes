import React from 'react'
import { Form } from 'react-bootstrap'

function Searchbox(props) {

  const searching = (e) => {
    // sends the searched value to app.js function
    let search = e.target.value

    props.searchNotes(search)
  }

  return (
    <>
      <Form.Control type="text" placeholder="Type to search" onChange={searching} />
    </>
  )
}

export default Searchbox
