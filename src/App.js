import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ParticleBG from './components/ParticleBG'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar /> 
      <ParticleBG />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='aboutme' element={<AboutMe />}/>
        <Route path='contact' element={<Contact />}/>      
      </Routes>
    </Router>
  );
}

export default App;
