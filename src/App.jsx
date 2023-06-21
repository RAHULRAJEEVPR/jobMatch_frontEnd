import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserRoutes from './routes/Userroutes'
import EmpRoutes from './routes/EmpRoutes'
import LandingPage from './pages/LandingPage'
import './App.css'
import { useSelector } from 'react-redux'
import Loaders from './components/Loaders'





function App() {
const {loading}=useSelector(state=>state.alerts)

  return (
    <>
   <BrowserRouter>
   {loading&&( <Loaders/>  )}
 
   <Routes>
    
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/user/*" element={<UserRoutes/>}/>
    <Route path="/employer/*" element={<EmpRoutes/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
