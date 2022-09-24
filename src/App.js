import './App.css';
import Createnote from './components/Createnote';
import Notes from './components/Notes';
import Searchbox from './components/Searchbox';

function App() {
  return (
    <>
      <Searchbox />
      <Createnote />
      <Notes />
    </>
  );
}

export default App;
