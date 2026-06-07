import "./style.css";
import { ICONS } from "@/utils/icons/icons";

function Header() {
  const Logo = ICONS.Logo;
  const Bag = ICONS.Bag;

  return (
    <div className="box-shadow">
      <header className="header">
        <a href="">
          <Logo></Logo>
        </a>
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
