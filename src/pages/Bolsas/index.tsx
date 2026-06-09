import "./style.css";
import Title from "@/components/title";
import CardBolsa from "@/components/bolsas";
import { TALITA, NALANDA, TIANA, ANAJU } from "@/utils/constants/constants";

export default function Bolsas() {
  return (
    <>
      <div className="title-page">
        <h2>Escolha a melhor para você</h2>
        <Title hasBreak={true} isBlack={false}>
          Nossas Bolsas
        </Title>
      </div>
      <CardBolsa
        bags={TALITA}
        isDark={false}
        desc=" Seu couro reciclável passa por um processo consciente de
              reaproveitamento, garantindo resistência, acabamento de qualidade
              e estética contemporânea, sem abrir mão da sustentabilidade."
      />
      <CardBolsa
        bags={NALANDA}
        isDark={true}
        desc="Esta bolsa marrom sustentável foi criada para quem valoriza estilo, conforto e responsabilidade ambiental. Confeccionada com material maleável de origem reciclada, proveniente do reaproveitamento de resíduos têxteis, ela oferece um toque macio e flexível, garantindo praticidade no uso diário sem abrir mão da durabilidade."
      />
      <CardBolsa
        bags={TIANA}
        isDark={false}
        desc="Seu couro reciclável passa por um processo consciente de reaproveitamento, garantindo resistência, acabamento de qualidade e estética contemporânea, sem abrir mão da sustentabilidade."
      />
      <CardBolsa
        bags={ANAJU}
        isDark={true}
        desc="Esta bolsa marrom sustentável foi criada para quem valoriza estilo, conforto e responsabilidade ambiental. Confeccionada com material maleável de origem reciclada, proveniente do reaproveitamento de resíduos têxteis, ela oferece um toque macio e flexível, garantindo praticidade no uso diário sem abrir mão da durabilidade."
      />
    </>
  );
}
