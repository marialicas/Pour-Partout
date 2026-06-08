import "./style.css";
import About from "../../components/about";
import Choose from "../../components/choose";
import Folha from "@/assets/icons/folhas.svg?react";
import banner from "@/assets/images/introducao.png";
import Create from "@/components/create";

function Home() {
  return (
    <>
      <img src={banner} alt="banner" className="banner" />
      <div id="folha-local">
        <About />
        <Folha id="folha" />
        <Choose />
      </div>
      <Create />
    </>
  );
}

export default Home;
