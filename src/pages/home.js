import Card from "../components/card/card";
import LogoReact from "../img/logo192.png"

function Home() {
  return (
    <>
      <h2>Welcome to the homepage!</h2>
      <Card title="Je suis un titre" desc="Lorem ipsum..." image={LogoReact}></Card>
      <Card title="Je suis un second titre" desc="Lorem ipsum..." image={LogoReact}></Card>
    </>
  );
}

export default Home;