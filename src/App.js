import './App.css';
import Home from './components/Home/Home';
import Cars from './components/Carros/Cars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './components/error404/Page404';
import Sobre from './components/Sobre/Sobre';
import Novedades from './components/Novedades/Novedades';


function App() {
 
  return (
   
    <div className="App">
      <Router> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Autos' element={<Cars/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/Novedades' element={<Novedades/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </Router>
    </div>
  );
  }
 

export default App;
