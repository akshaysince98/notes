import { useState } from 'react';
import './App.css';
import Createnote from './components/Createnote';
import Notes from './components/Notes';
import Searchbox from './components/Searchbox';

function App() {
  // const [notes, setNotes] = useState({})
  const [arr, setArr] = useState([])
  const [nid, setNid] = useState(0)

  const setnotesobj = (title, text) => {
    console.log("in app setnotesobj");
    let notes = { nid, title, text }
    let narr = arr.slice();
    narr.push(notes)
    setArr(narr)
  }

  console.log(arr);

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
