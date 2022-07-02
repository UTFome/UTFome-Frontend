import "./Avaliacao.css";
import Bee from "../../../../assets/images/bee_redondo_pequeno.png";
import Aspas from "../../../../assets/images/aspas_pequena.png";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>

              <div className="bee">
                <img src={Bee} />
              </div>

              <h3>Pessoa 1</h3>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>

              <div className="bee">
                <img src={Bee} />
              </div>

              <h3>Pessoa 1</h3>

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                nulla sit libero nemo fuga sequi nobis? Necessitatibus aut
                laborum, nisi quas eaque laudantium consequuntur iste ex aliquam
                minus vel? Nemo.
              </p>

              <div className="bee">
                <img src={Bee} />
              </div>

              <h3>Pessoa 1</h3>

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
