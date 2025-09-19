
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Mph from './components/Mph'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import "./index.css"
import Service from './components/Service'
import Package from './components/Package'
import Review from './components/Review'
import Contact from './Contact'
function App() {


  return (
    <>
      <div className="app-container">

        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<>
            <Mph />
            <Service />
            <Package />
            <Review />
            <Contact/>
            </>
          } />
            <Route path="/services" element={<Service />} />
           
            <Route path="/reviews" element={<Review />} />
            <Route path="/packages" element={<Package />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>



        <Footer />
      </div>
    </>
  )
}

export default App
