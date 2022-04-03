import Bee from "../../../assets/images/bee_grande.png";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div class="row">
        <div class="col-externa">
            {/* Conteúdo Futuro */}
        </div>

        <div class="col-interna">
          <img src={Bee} />
          <div className="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
          </div>
          <div className="links">
            <a href="#">home</a>
            <a href="#">sobre</a>
            <a href="#">menu</a>
            <a href="#">produtos</a>
            <a href="#">avaliações</a>
          </div>
        </div>

        <div class="col-externa">
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
