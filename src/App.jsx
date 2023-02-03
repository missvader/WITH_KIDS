import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Data from './contexts/Data'
import List from './components/List';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Agenda from "./pages/Agenda";
import Restaurants from "./pages/Restaurants";
import AgendaBiblios from "./pages/AgendaBiblios";
import AreasJoc from "./pages/AreasJoc";
function App() {

  return (
    <Data>
    <div>
      <Routes>
        < Route path='/map' element = {<Home/>}/>
        < Route path='/profile' element = {<Profile/>}/>
        < Route path='/agendaCultural' element = {<Agenda/>} />
        < Route path='/restaurants' element = {<Restaurants/>}/>
        < Route path='/agendaBiblio' element = {<AgendaBiblios/>}/>
        < Route path='/zonesDeJoc' element = {<AreasJoc/>}/>
      </Routes>  
        <Nav/>
    </div>     
        
      
      
    </Data>
  )
}

export default App
