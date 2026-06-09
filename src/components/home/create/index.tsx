import "./style.css";
import MainButton from "@/components/mainButton/index";
import Title from "@/components/title";
import bolsaCria from "@/assets/images/bolsa-cria.png";

function Create() {
  return (
    <div className="background">
      <section id="create">
        <div className="content">
          <Title hasBreak={true} isBlack={false}>
            Crie a SUa
          </Title>
          <p>
            Criar uma bolsa exclusiva é transformar ideias, estilo e identidade
            em um produto único. Aqui, você tem a liberdade de personalizar cada
            detalhe, desde o formato e a cor até os acabamentos, criando uma
            peça pensada por você e para você.
          </p>
          <p>Desde de 2025 fazemos peças exclusivas e 100% reciclavél</p>
          <MainButton hasIcon={true}>Mais Sobre</MainButton>
        </div>
        <img src={bolsaCria} alt="bolsa-marrom" />
      </section>
    </div>
  );
}

export default Create;
