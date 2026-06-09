import Title from "@/components/title";
import "./style.css";
import trioBolsas from "@/assets/images/trio-bolsas.webp";

function About() {
  return (
    <section id="about">
      <div className="about-text">
        <Title hasBreak={true} isBlack={true}>
          Sobre Nos
        </Title>
        <div className="about-desc">
          <p>
            Você sabia que a industria da moda gerá 92 milhões de toneladas de
            resíduos têxteis por ano globalmente
          </p>
          <p>
            E foi pensando nisso que a POUR PARTOUT nasceu, para reciclar essas
            toneladas e espalhar elegância sustentável por toda a parte
          </p>
          <p>Desde de 2025 fazemos peças exclusivas e 100% reciclavél</p>
        </div>
      </div>
      <img src={trioBolsas} alt="trio-bolsas" height="457px" width="auto" />
    </section>
  );
}

export default About;
