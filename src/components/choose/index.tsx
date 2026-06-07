import "./style.css";
import CardChoose from "./cardChoose";
import { bags } from "@/utils/constants/constants";
import ICONS from "@/utils/icons/icons";
import Title from "@/components/title";

function Choose() {
  const bagsElements = bags.map((bag) => <CardChoose {...bag} />);

  return (
    <section id="choose">
      <div className="choose-header">
        <Title hasBreak={false} isBlack={true}>
          Escolha a sua
        </Title>
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
