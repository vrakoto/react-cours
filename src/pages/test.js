import { Link } from "react-router-dom";
import Propos from "../components/cv/propos";

const test = () => {
  return (
    <Propos
      titre="A propos"
      nomPrenom="RAKOTOARISOA Carellien"
      lieu="Paris"
      age="20 ans"
      propos="Passionné du développement, je me suis inscript dans un bachelor informatique chez Ipssi où j'effectue une alternance en parallèle en tant que développeur dans une grande boite."
      photo="https://picsum.photos/150"
    >
      <h1>TESTIKERIZAEIAZEI</h1>

      <nav className="navCV">
        <Link to="/cv_formations" title="redirection sur la home">
          FORMATIONS
        </Link>
        <Link to="/cv_experiences" title="redirection sur la home">
          EXPERIENCES
        </Link>
        <Link to="/cv_competences" title="redirection sur la home">
          COMPETENCES
        </Link>
        <Link to="/cv_dc" title="redirection sur la home">
          DIPLOMES & CERTIFICATIONS
        </Link>
      </nav>
    </Propos>
  );
};

export default test;
