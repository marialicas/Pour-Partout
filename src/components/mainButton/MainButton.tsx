import "../../global.css";
import "./MainButton.css";
import Arrow from "../../assets/icons/back-arrow.svg?react";

type ButtonProps = {
  hasIcon: boolean;
};

function MainButton({ hasIcon }: ButtonProps) {
  return (
    <button className="main-button">
      {hasIcon ? <Arrow /> : null}
      Enviar Mensagem
    </button>
  );
}

export default MainButton;
