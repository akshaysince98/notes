import './App.css';
import Createnote from './components/Createnote';
import Notes from './components/Notes';
import Searchbox from './components/Searchbox';

function App() {
  return (
    <>
      <div className='header'>
        <Createnote />
        <Searchbox />
      </div>
      <Notes />
    </>
  );
}

export default App;
