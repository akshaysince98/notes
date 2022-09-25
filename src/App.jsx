import { useEffect, useState } from 'react';
import './App.css';
import Createnote from './components/Createnote';
import NoteSingle from './components/NoteSingle';
import Searchbox from './components/Searchbox';

function App() {
  const [arr, setArr] = useState([])
  const [nid, setNid] = useState(0)
  const [ser, setSer] = useState('')

  useEffect(() => {
    // gets data from local storage and stores in state arr

    let notesjson = localStorage.getItem("data");
    if (!notesjson) {
      return;
    }
    let resources = JSON.parse(notesjson)
    setArr(resources)
    let maxid = resources.reduce((pv, cv, ci, oarr) => {
      let max = pv.nid
      if (cv.nid > max) {
        max = cv.nid
      }
      return max
    })
    setNid(maxid + 1)
  }, [])

  const createNewNote = (title, text) => {
    // adds new object to the state arr and the calls savetostorage

    let notes = { nid, title, text }
    let narr = arr.slice();
    narr.push(notes)
    setArr(narr)
    saveToStorage(narr)
  }

  const saveToStorage = (narr) => {
    // JSON.stringifies arr (or narr) and stores it in local storage

    let notesjson = JSON.stringify(narr)
    localStorage.setItem("data", notesjson)
    setNid(nid + 1)
  }

  const deleteNote = (id) => {
    // deletes from arr and calls savetostorage
    
    let narr = arr.slice();
    narr = narr.filter((n, i) => n.nid != id)
    setArr(narr)
    saveToStorage(narr)
  }

  const editNote = (id, title, text) => {
    // looks for object in arr and changes the value first in arr and then calls savetostorage
    
    let narr = arr.slice();
    narr = narr.map((n, i) => {
      if (n.nid == id) {
        n.title = title
        n.text = text
      }
      return n
    })

    setArr(narr)
    saveToStorage(narr)
  }

  const searchNotes = (search) => {
    setSer(search)
  }

  return (
    <>
      <div className='header'>
        <Createnote createNewNote={createNewNote} nid={nid} />
        <Searchbox arr={arr} searchNotes={searchNotes} />
      </div>
      <div className='allnotes'>
        {arr.filter((a, i) => a.title.includes(ser) || a.text.includes(ser)).map((a, i) => <NoteSingle key={i} a={a} deleteNote={deleteNote} editNote={editNote} />)}

      </div>

    </>
  );
}

export default App;
