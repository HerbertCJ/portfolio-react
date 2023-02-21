import React from 'react'
import Navbar from './components/Navbar'
import ParticleBG from './components/ParticleBG'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ParticleBG />
      <Footer />
    </>
  );
}

export default App;
