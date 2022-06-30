const Experiences = ({
  logoEntreprise,
  intitulation,
  typeEmploi,
  nomEntreprise,
  lieu,
  periode,
  secteur,
  description,
}) => {
  return (
    <>
      <div class="intitule-logo">
        <h2>{intitulation}</h2>
        <img src={logoEntreprise} alt={nomEntreprise} />
      </div>

      <p>Entreprise: {nomEntreprise}</p>
      <p>Lieu: {lieu}</p>
      <p>Type Emploi: {typeEmploi}</p>
      <p>Période: {periode}</p>
      <p>Secteur: {secteur}</p>
      <br />

      <p>{description}</p>

      <div className="separation" />
    </>
  );
};

export default Experiences;
