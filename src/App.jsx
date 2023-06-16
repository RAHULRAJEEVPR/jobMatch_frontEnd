import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserRoutes from './routes/Userroutes'
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

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
