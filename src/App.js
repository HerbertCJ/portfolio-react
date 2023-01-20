import Navbar from './components/Navbar'
import Header from './components/Header'
import ParticleBG from './components/ParticleBG'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div>
      <ParticleBG />
      <Navbar />      
      <Header />      
    </div>
  );
}

export default App;
