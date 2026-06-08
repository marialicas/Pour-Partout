import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="rights">
        <h1>POUR PARTOUT</h1>
        <p>Pour Partout. Alguns direitos reservados</p>
      </div>
      <div className="info">
        <div className="contact">
          <h2>Contato</h2>
          <ul>
            <div>
              <li>13 9999-99999</li>
              <li>atendimento@pourpartout.com</li>
            </div>
            <div>
              <li>Rua algodão doce</li>
              <li>Itanhaé - SP</li>
            </div>
          </ul>
        </div>
        <div className="information">
          <h2>Informações</h2>
          <ul>
            <a href="">
              <li>Bolsas</li>
            </a>
            <a href="">
              <li>Contato</li>
            </a>
            <a href="">
              <li>Termos e Condições</li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
