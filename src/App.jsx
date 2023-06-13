import { BrowserRouter,Route,Routes } from 'react-router-dom'
import UserRoutes from './routes/Userroutes'
import LandingPage from './pages/LandingPage'
import './App.css'


function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/user/*" element={<UserRoutes/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
