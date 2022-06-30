const Formations = ({
  logoEcole,
  domaine,
  ecole,
  annee,
  resultat,
  description,
}) => {
  return (
    <>
      <div class="intitule-logo">
        <h2>{ecole}</h2>
        <img src={logoEcole} alt={ecole} />
      </div>

      <p>{domaine}</p>
      <p>{annee}</p>
      <br />

      <p>{description}</p>

      <div className="separation" />
    </>
  );
};

export default Formations;
