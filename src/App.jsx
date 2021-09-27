import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import Intro from './components/Intro/Intro'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Menu from './components/Menu/Menu'
import "./app.scss"
import { useState } from "react";


function App() {
     
     const [menuOpen,setMenuOpen] = useState(false);
    
  return (

    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      {/* <Resume/> */}
      <Contact/>
      </div>
      
     
      

    </div>
    
  );
}

export default App;
