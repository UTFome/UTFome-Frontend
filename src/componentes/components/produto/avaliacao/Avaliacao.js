import "./Avaliacao.css";
import Aspas from "../../../../assets/images/aspas_pequena.png";
import foto1 from "../../../../assets/images/foto1.jpg";
import foto2 from "../../../../assets/images/foto2.png";
import foto3 from "../../../../assets/images/foto3.jpg";
function Avaliacao() {
  return (
    <div className="container">
      <section className="review-avaliacao">
        <div className="review" id="review">

          <div className="box-container">
            <div className="box">
              <div className="aspas">
                <img src={Aspas} />
              </div>
              <p>
                <i>
                  Depois que começei a anunciar no UTFOME minhas vendas cresceram bastante,
                  consegui expandir meus negócios e aumentar minha renda! O UTFOME é um ótimo
                  aplicativo para conseguir visibilidade comercial no ramo alimentício.
                </i>
              </p>

              <div className="ft">
                <img src={foto1} />
              </div>

              <h3>Thomas Shelby</h3>

              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="aspas">
                <img src={Aspas} />
              </div>
              <p>
                <i>
                  Muito bom o aplicativo, me ajudou a encontrar diversas comidas que eu
                  não conseguiria achar em outro lugar. Além de fomentar o nicho dos comerciantes
                  do ambiente acadêmico. Parabéns aos idealizadores! Amei! 
                </i>
              </p>

              <div className="ft">
                <img src={foto2} />
              </div>

              <h3>Letícia Espíndola</h3>

              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

          <div className="box-container">
            <div className="box">
              <div className="aspas">
                <img src={Aspas} />
              </div>
              <p>
                <i>
                  Aplicativo muito bom, com bastante variedades de anúncios além de 
                  ser fácil de usar, conta uma ótima equipe de divulgação.
                  Graças ao UTFOME consegui me manter estudando com o dinheiro das vendas
                  que anunciei aqui. 
                </i>
              </p>

              <div className="ft">
                <img src={foto3} />
              </div>

              <h3>Márcia Cristina</h3>

              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
export default Avaliacao;
