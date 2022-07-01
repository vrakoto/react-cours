import Card from "../components/card/card";
import CounterBtn from "../hooks/counterBtn";
import HeaderEffect from "../hooks/headerEffect";
import LogoReact from "../img/logo192.png";

function Home() {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <Card
        title="Je suis un titre"
        desc="Lorem ipsum..."
        image={LogoReact}
      ></Card>

      <CounterBtn />
      <HeaderEffect />
    </>
  );
}

export default Home;
