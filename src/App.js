import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import {useState} from 'react';


function App() {

  const [page, setPage] = useState('default');

  return (
    <div className="App">
      <div>
          <Header/>
          <Navbar setPage={setPage}/>
          <Body page={page}/>
      </div>
    </div>
  );
}

export default App;
