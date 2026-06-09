import MainButton from "@/components/mainButton";
import "./style.css";
import type { BagsProps } from "@/utils/types/types";
import { Recycling, Redo, Shield } from "@/utils/icons/icons";

type CardBolsasProps = {
  bags: BagsProps;
  isDark: boolean;
  desc: string;
};

export default function CardBolsa({ bags, isDark, desc }: CardBolsasProps) {
  return (
    <>
      <div className={isDark ? "card-bolsa-dark" : "card-bolsa"}>
        <img src={bags.image} alt={bags.name} />
        <div className="container-content">
          <div className="card-bolsa-content">
            <h3 className="card-bolsa-title">{bags.name}</h3>
            <h4 className="card-bolsa-price">R$ {bags.price}</h4>
            <p>{desc}</p>
            <ul className="category">
              <li>
                <Recycling />
                Couro Reciclado
              </li>
              <li>
                <Shield />
                Material Resistente
              </li>
              <li>
                <Redo />
                Lógistica Reserva
              </li>
            </ul>
          </div>
          <div className="botao">
            <MainButton hasIcon={true}>Mais SObre</MainButton>
          </div>
        </div>
      </div>
    </>
  );
}
