const Propos = ({ titre, nomPrenom, lieu, age, propos, photo }) => {
  return (
    <section className="propos">
      <img src={photo} alt={titre} />
      <div className="content">
        <h3>{nomPrenom}</h3>
        <h4>{lieu}</h4>
        <h4>{age}</h4>
        <br />
        <p>{propos}</p>
      </div>
    </section>
  );
};

export default Propos;
