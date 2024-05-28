
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PokedexPage from './pages/PokedexPage'
import HomePage from './pages/HomePage'
import ProtectedRouters from './pages/ProtectedRouters'
import { PokeInfoPeage } from './pages/PokeInfoPage'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'



function App() {


  return (
    <div className="appdiv">
        
      
      <div >
        <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route element={<ProtectedRouters/>}>

        <Route path='/pokedex' element={<PokedexPage/>}/>
        <Route path='/pokemon/:name' element={<PokeInfoPeage/>}/>
        </Route>
        
      </Routes>
    
      </div>

      

    </div>
  )
}

export default App
