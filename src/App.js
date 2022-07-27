import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import {useState} from 'react';
import background from '../src/images/backgroundimage.png'

function App() {

  const [page, setPage] = useState('default');

  return (
    <div className="App" style ={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      backgroundSize:'auto',
    }}>
      <div>
          <Header/>
          <Navbar setPage={setPage}/>
          <Body page={page}/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
