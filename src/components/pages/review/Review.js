import "./Review.css";
import Bee from "../../../assets/images/bee_redondo_pequeno.png";
import Aspas from "../../../assets/images/aspas.png";


function Review() {
    return(
        <section className="review" id="review">
            <h1 className="heading">  <span> Avaliações </span> </h1>

<div className="box-container">
    <div className="box">
        <img className="review-aspas" src={Aspas}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img className="review-pessoa" src={Bee}></img>
        <h3>Pessoa 1</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>
    <div className="box">
        <img className="review-aspas" src={Aspas}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img className="review-pessoa" src={Bee}></img>
        <h3>Pessoa 2</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>
    <div className="box">
        <img className="review-aspas" src={Aspas}></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img className="review-pessoa" src={Bee}></img>
        <h3>Pessoa 3</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
    </div>
</div>
        </section>
    );
}

export default Review;