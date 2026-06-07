import "./style.css";
import CardChose from "./cardChose";
import Arrow from "./../../assets/icons/arrow.svg?react";

function Chose() {
  return (
    <section id="chose">
      <div className="chose-header">
        <h1 className="chose-title">Escolha a Sua</h1>
        <a href="" className="veja-mais">
          <h2>Ver mais</h2>
          <Arrow />
        </a>
      </div>
      <div className="cards-chose">
        <CardChose />
        <CardChose />
        <CardChose />
        <CardChose />
      </div>
    </section>
  );
}

export default Chose;
