import { useLocation, Link } from "react-router-dom";

function Error() {
  let location = useLocation();

  return (
    <>
      <h2>Error 404 Page Not found</h2>
      <Link to="/" title="Revenir"></Link>
      <p>{location.pathname} introuvable</p>
    </>
  );
}

export default Error;
