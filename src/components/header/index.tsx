import "./style.css";
import Logo from "../../assets/icons/marca.svg?react";
import Bag from "../../assets/icons/bag.svg?react";

function Header() {
  return (
    <div className="box-shadow">
      <header className="header">
        <Logo />
        <nav aria-label="Menu" className="menu">
          <a className="page" href="">
            Bolsas
          </a>
          <a className="page" href="">
            Crie a Sua
          </a>
          <a className="page" href="">
            Contatos
          </a>
          <a href="">
            <Bag className="bag" />
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
