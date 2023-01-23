import './App.css'
import { Route, Routes } from 'react-router-dom';
import MapView from './components/MapView'
import Home from './pages/Home';
import Data from './components/Data'
import { DataContextProvider } from './contexts/DataContext'
import List from './components/List';
function App() {

  return (
    <DataContextProvider>
      <Routes>
        < Route path = "/" element = { <Home/>}/>
        < Route path = "/list" element = {<List/>}/>
        < Route path='/map' element = {<MapView/>}/>
      </Routes>
    </DataContextProvider>
  )
}

export default App
