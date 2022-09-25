import { useEffect, useState } from 'react';
import './App.css';
import Createnote from './components/Createnote';
import NoteSingle from './components/NoteSingle';
import Searchbox from './components/Searchbox';

function App() {
  const [arr, setArr] = useState([])
  const [nid, setNid] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    console.log("yayy")
    setLoading(false)
  }, [loading])

  const createNewNote = (title, text) => {
    console.log("in app createNewNote");
    let notes = { nid, title, text }
    let narr = arr.slice();
    narr.push(notes)
    setArr(narr)
    saveToStorage(narr)
  }

  const saveToStorage = (narr) => {
    let notesjson = JSON.stringify(narr)
    localStorage.setItem("data", notesjson)
    setNid(nid + 1)
  }

  const deleteNote = (id) => {
    let narr = arr.slice();
    narr = narr.filter((n, i) => n.nid != id)
    setArr(narr)
    saveToStorage(narr)
  }

  const editNote = (id, title, text) => {
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


  return (
    <>
      <div className='header'>
        <Createnote createNewNote={createNewNote} nid={nid} />
        <Searchbox />
      </div>
      <div className='allnotes'>
        {arr.map((a, i) => <NoteSingle key={i} a={a} deleteNote={deleteNote} editNote={editNote} />)}

      </div>

    </>
  );
}

export default App;
