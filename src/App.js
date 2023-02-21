import React from 'react'
import Navbar from './components/Navbar'
import ParticleBG from './components/ParticleBG'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ParticleBG />
    </>
  );
}

export default App;
