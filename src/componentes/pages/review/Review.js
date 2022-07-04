// import "./Review.css";
// import Bee from "../../../assets/images/bee_redondo_pequeno.png";
// import Aspas from "../../../assets/images/aspas_pequena.png";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Avaliacao from "../../components/produto/avaliacao/Avaliacao";

function Review() {
  return (
      <section className="review-avaliacao">
        <h1 className="heading">
          {" "}
          <span> Avaliações </span>{" "}
        </h1>

        <div className="review-avaliacoes">
            <Avaliacao></Avaliacao>
        </div>

      </section>
  );
}
export default Review;
