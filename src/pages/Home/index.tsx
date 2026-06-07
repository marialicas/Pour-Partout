import "./style.css";
import About from "../../components/about";
import Chose from "../../components/chose";
import Header from "../../components/header";
import MainButton from "../../components/mainButton/MainButton";
import Folha from "@/assets/icons/folhas.svg?react";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Folha id="folha" />
      <Chose />
    </>
  );
}

export default Home;
