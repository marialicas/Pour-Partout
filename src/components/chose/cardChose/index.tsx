import "./style.css";

interface CardChoseProps {
  nomeBolsa: string;
  preco: number;
  imagem: string;
}

function CardChose({ imagem, preco, nomeBolsa }: CardChoseProps) {
  return (
    <a className="card-chose" href="">
      <img src={imagem} alt={nomeBolsa} />
      <div className="card-chose-desc">
        <h2 className="nome-bolsa">{nomeBolsa}</h2>
        <p>R${preco}</p>
      </div>
    </a>
  );
}

export default CardChose;
