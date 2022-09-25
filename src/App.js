import { useEffect, useState } from 'react';
import './App.css';
import Createnote from './components/Createnote';
import Notes from './components/Notes';
import Searchbox from './components/Searchbox';

function App() {
  const [arr, setArr] = useState([])
  const [nid, setNid] = useState(0)

  const setnotesobj = (title, text) => {
    console.log("in app setnotesobj");
    let notes = { nid, title, text }
    let narr = arr.slice();
    narr.push(notes)
    setArr(narr)
    let notesjson = JSON.stringify(narr)
    localStorage.setItem("data", notesjson)
    setNid(nid + 1)
  }

  useEffect(() => {
    let notesjson = localStorage.getItem("data");
    if (!notesjson) {
      return;
    }
    let resources = JSON.parse(notesjson)
    setArr(resources)
    let maxid = resources.reduce((pv, cv, ci, oarr) => {
      // console.log(pv.nid)
      let max = pv.nid
      if (cv.nid > max) {
        max = cv.nid
      }
      return max
    })
    setNid(maxid + 1)
  }, [])

  return (
    <>
      <div className='header'>
        <Createnote setnotesobj={setnotesobj} nid={nid} />
        <Searchbox />
      </div>
      <Notes />
    </>
  );
}

export default App;
