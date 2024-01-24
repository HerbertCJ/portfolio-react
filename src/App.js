import React from 'react'
import Navbar from './components/Navbar'
import ParticleBG from './components/ParticleBG'
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Navbar />
      <Portfolio />
      <ParticleBG />
      <Footer />
    </>
  );
}

export default App;
