import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Home from './pages/Home';
import Data from './contexts/Data'
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Agenda from "./pages/Agenda";
import Restaurants from "./pages/Restaurants";
import AgendaBiblios from "./pages/AgendaBiblios";
import AreasJoc from "./pages/AreasJoc";
import Preloader from './components/Preloader';
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
function App() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, []);
  return (
    <Data>
      <div>
        {loading ? (<Preloader/>) :
          (
            <div>
              <Routes>
                < Route path='/' element = {<Home/>}/>
                < Route path='/profile1' element = {<Profile/>}/>
                < Route path='/agendaCultural' element = {<Agenda/>} />
                < Route path='/restaurants' element = {<Restaurants/>}/>
                < Route path='/agendaBiblio' element = {<AgendaBiblios/>}/>
                < Route path='/zonesDeJoc' element = {<AreasJoc/>}/>
                < Route path="/signup" element={<SignupPage/>} />
                < Route path="/profile" element={<LoginPage/>} />
              </Routes>  
              <Nav/>
            </div>
          )
        }
      </div>  

      
        
      
      
    </Data>
  )
}

export default App
