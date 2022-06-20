import Bee from "../../../assets/images/bee_grande.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="row">
        <div className="col-externa">
            {/* Conteúdo Futuro */}
        </div>

        <div className="col-interna">
          <img src={Bee} />
          <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-pinterest"></a>
          </div> 

          <div className="links">
            <a href="/main">Home</a>
            <a href="/produtos">Produtos</a>
            <a href="/anunciar">Anunciar</a>
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
            <a href="/review">Avaliações</a>
            <a href="/perfil">Perfil</a>
          </div>        
        </div>

        <div className="col-externa">
          {/* <div className="footer-suportes">
              Suporte
          </div>

          <div className="footer-suporte">
              <div>FAQs</div>
              <div>Entrar em contato</div>
          </div> */}
        </div>
      </div>

      <div className="credit">
        created by <span>UTFome</span> | all rights reserved
      </div>
    </section>
  );
}

export default Footer;