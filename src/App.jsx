
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Mph from './components/Mph'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import "./index.css"
import Service from './components/Service'
function App() {


  return (
    <>
      <div>
        
        <Navbar/>
        <Routes>
          <Route path="/" element={<Mph/>}/>
          <Route path="/services" element={<Service/>}/>
          
        </Routes>
       
       
       
        <Footer/>
      </div>
    </>
  )
}

export default App
