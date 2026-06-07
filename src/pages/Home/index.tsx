import "./style.css";
import About from "../../components/about";
import Choose from "../../components/choose";
import Header from "../../components/header";
import MainButton from "../../components/mainButton/MainButton";
import Folha from "@/assets/icons/folhas.svg?react";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Folha id="folha" />
      <Choose />
    </>
  );
}

export default Home;
