import { Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Home from "../pages/home"
import Projet from "../pages/projet"
import CV from "../pages/cv"
import Contact from "../pages/contact"
import Error from "../pages/404"

function Header() {
    return (
      <header className="App-header">
        <p>Barre de navigation</p>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    );
  }
  
export default Header;