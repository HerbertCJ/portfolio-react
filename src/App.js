import Navbar from './components/Navbar'
import Introduction from './pages/Introduction'
import ParticleBG from './components/ParticleBG'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div>
      <ParticleBG />
      <Navbar />      
      <Introduction /> 
      <Projects />     
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
