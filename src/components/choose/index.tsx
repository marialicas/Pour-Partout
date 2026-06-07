import "./style.css";
import CardChoose from "./cardChoose";
import { bags } from "@/utils/constants/constants";
import ICONS from "@/utils/icons/icons";

function Choose() {
  const bagsElements = bags.map((bag) => <CardChoose {...bag} />);

  return (
    <section id="choose">
      <div className="choose-header">
        <h1 className="choose-title">Escolha a Sua</h1>
        <a href="" className="veja-mais">
          <h2>Ver mais</h2>
          <ICONS.Arrow />
        </a>
      </div>
      <div className="cards-choose">{bagsElements}</div>
    </section>
  );
}

export default Choose;
