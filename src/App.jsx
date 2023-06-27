import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserRoutes from './routes/Userroutes'
import EmpRoutes from './routes/EmpRoutes'
import LandingPage from './pages/LandingPage'
import AdminRoutes from './routes/AdminRoutes'
import './App.css'
import { useSelector } from 'react-redux'
import Loaders from './components/Loaders'
import NotFoundPage from './pages/NotFoundPage'





function App() {
const {loading}=useSelector(state=>state.alerts)

  return (
    <>
   <BrowserRouter>
   {loading&&( <Loaders/>  )}
 
   <Routes>
    
    <Route path="/" element={<LandingPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
    <Route path="/user/*" element={<UserRoutes/>}/>
    <Route path="/employer/*" element={<EmpRoutes/>}/>
    <Route path="/admin/*" element={<AdminRoutes/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
