import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projet">Projet</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
