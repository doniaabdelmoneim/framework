import logo from "../../assets/avataaars.svg";
import Heading from "../ui/Heading";

function Home() {
  return (
    <main id="home">
      <img src={logo} alt="Start Framework" />
      <Heading heading="START FRAMEWORK" />
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </main>
  );
}

export default Home;
