const Hobbies = ({ logoActivite, typeActivite, niveau, frequence }) => {
  return (
    <>
      <div class="intitule-logo">
        <h2>{typeActivite}</h2>
        <img src={logoActivite} alt={typeActivite} />
      </div>

      <p>Niveau: {niveau}</p>
      <p>Fréquence: {frequence}</p>

      <div className="separation" />
    </>
  );
};

export default Hobbies;
