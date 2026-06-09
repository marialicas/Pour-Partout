import "./style.css";
import type { BagsProps } from "@/utils/types/types";

function CardChoose({ image, name, price }: BagsProps) {
  return (
    <a className="card-choose" href="">
      <img src={image} alt={name} />
      <div className="card-choose-desc">
        <h2 className="nome-bolsa">{name}</h2>
        <p>R${price}</p>
      </div>
    </a>
  );
}

export default CardChoose;
