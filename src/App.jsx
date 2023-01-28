import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Data from './contexts/Data'
import List from './components/List';
function App() {

  return (
    <Data>
      <Routes>
        < Route path = "/" element = { <Intro/>}/>
        < Route path = "/list" element = {<List/>}/>
        < Route path='/map' element = {<Home/>}/>
      </Routes>
    </Data>
  )
}

export default App
