import "./style.css";
import About from "../../components/about";
import Choose from "../../components/choose";
import Header from "../../components/header";
import MainButton from "../../components/mainButton/MainButton";
import Folha from "@/assets/icons/folhas.svg?react";
import banner from "@/assets/images/introducao.png";

function Home() {
  return (
    <>
      <Header />
      <img src={banner} alt="banner" className="banner" />
      <div id="folha-local">
        <About />
        <Folha id="folha" />
        <Choose />
      </div>
    </>
  );
}

export default Home;
