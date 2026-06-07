import "./style.css";
import bolsaTalita from "@/assets/images/img-produto-talita.png";

function CardChose() {
  return (
    <a className="card-chose" href="">
      <img src={bolsaTalita} alt="bolsa-talita" />
      <div className="card-chose-desc">
        <h2 className="nome-bolsa">bolsa talita</h2>
        <p>R$ 500</p>
      </div>
    </a>
  );
}

export default CardChose;
