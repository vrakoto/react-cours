const DiplomeCertification = ({ logo, intitule, lieu, date, resultat }) => {
  return (
    <>
      <div class="intitule-logo">
        <h2>{intitule}</h2>
        <img src={logo} alt={intitule} />
      </div>
      <ul>
        <li>Lieu: {lieu}</li>
        <li>Date de réception: {date}</li>
        <li>Resultat: {resultat}</li>
      </ul>

      <div className="separation" />
    </>
  );
};

export default DiplomeCertification;
