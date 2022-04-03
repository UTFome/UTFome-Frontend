import "./Footer.css";
import {  FaFacebookF,  FaTwitter,  FaInstagram,  FaLinkedin,  FaPinterest,} from "react-icons/fa";
import Bee from "../../../assets/images/bee_pequeno.png";

function Footer() {
  return (
    <section className="footer">
      <div className="col-md-6">
        <div>Info Info Info Info</div>
        <div>Info Info Info Info</div>
      </div>

      <div className="col-md-6">
        <div className="links">
          <a href="#">home</a>
          <a href="#">about</a>
          <a href="#">menu</a>
          <a href="#">products</a>
          <a href="#">review</a>
          <a href="#">conta</a>
          <a href="#">blogs</a>
        </div>
      </div>
      <img className="logo-bee" src={Bee} alt="Bee" />

      <div className="share">
        <a href="#">
          <FaFacebookF className="icone-facebook" />
        </a>
        <a href="#">
          <FaTwitter className="icone-twitter" />
        </a>
        <a href="#">
          <FaInstagram className="icone-instagram" />
        </a>
        <a href="#">
          <FaLinkedin className="icone-linkedin" />
        </a>
        <a href="#">
          <FaPinterest className="icone-pinterest" />
        </a>
      </div>

      <div className="credit">
        created by <span>UTFome</span> | all rights reserved
      </div>
    </section>
  );
}

export default Footer;
