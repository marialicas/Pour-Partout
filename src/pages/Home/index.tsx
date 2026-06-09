import "./style.css";
import About from "@/components/home/about";
import Choose from "@/components/home/choose";
import Folha from "@/assets/icons/folhas.svg?react";
import banner from "@/assets/images/introducao.png";
import Create from "@/components/home/create";

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
