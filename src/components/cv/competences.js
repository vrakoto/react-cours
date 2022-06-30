const Competences = ({ nom, niveau }) => {
  return (
    <>
      <div class="left-header">
        <h3>{nom}</h3>
        <span>{niveau}</span>
      </div>

      <div className="separation" />
    </>
  );
};

export default Competences;
