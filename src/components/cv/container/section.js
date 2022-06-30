const Section = (props) => {
  return (
    <section class="sectionInside">
      <h2 className="sectionTitre">{props.titre}</h2>
      {props.children}
    </section>
  );
};

export default Section;
