import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LayoutNav = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutNav;
