import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Route, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';
import Home from './pages/Home';
import Data from './contexts/Data';
import Profile from './pages/Profile';
import Nav from './components/Nav';
import Agenda from "./pages/Agenda";
import Restaurants from "./pages/Restaurants";
import AgendaBiblios from "./pages/AgendaBiblios";
/*import AreasJoc from "./pages/AreasJoc";*/
import Preloader from './components/Preloader';
import Signup from './pages/Signup'
import Login from './pages/Login';
import PrivateRoute from './Routes/PrivateRoute';
import { AuthProvider } from './contexts/AuthProvider';
function App() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, []);
  return (
    <AuthProvider>
      <Data>
        <div>
          {loading ? (<Preloader/>) :
            (
              <div className='relative'>
                <Routes>
                  < Route path='/' element = {<Home/>}/>
                  < Route path='/profile' element = {
                    <PrivateRoute>
                      <Profile/>
                    </PrivateRoute>}/>
                  < Route path='/agendaCultural' element = {<Agenda/>} />
                  < Route path='/restaurants' element = {<Restaurants/>}/>
                  < Route path='/agendaBiblio' element = {<AgendaBiblios/>}/>
                  < Route path="/signup" element={<Signup/>} />
                  < Route path="/login" element={<Login/>} />
                </Routes>  
                <Nav/>
              </div>
            )
          }
        </div>  
      </Data>
    </AuthProvider>
  )
}

export default App
