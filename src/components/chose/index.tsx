import "./style.css";
import CardChose from "./cardChose";
import Arrow from "./../../assets/icons/arrow.svg?react";
import bolsaTalita from "@/assets/images/bolsa-talita.png";
import bolsaNalanda from "@/assets/images/bolsa-nalanda.png";
import bolsaAnaju from "@/assets/images/bolsa-anaju.png";
import bolsaTiana from "@/assets/images/bolsa-tiana.png";

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
        <CardChose imagem={bolsaTalita} nomeBolsa="Bolsa Talita" preco={500} />
        <CardChose
          imagem={bolsaNalanda}
          nomeBolsa="Bolsa Nalanda"
          preco={400}
        />
        <CardChose imagem={bolsaAnaju} nomeBolsa="Bolsa Anaju" preco={600} />
        <CardChose imagem={bolsaTiana} nomeBolsa="Bolsa Tiana" preco={200} />
      </div>
    </section>
  );
}

export default Chose;
