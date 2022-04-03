import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

function Footer() {
  return (
    <section className="footer">

    <div className="share">
        <a href="#">
            <FaFacebookF className="icone-facebook"/>
        </a>
        <a href="#">
            <FaTwitter className="icone-twitter"/>
        </a>
        <a href="#">
            <FaInstagram className="icone-instagram"/>
        </a>
        <a href="#">
            <FaLinkedin className="icone-linkedin"/>
        </a>
        <a href="#">
            <FaPinterest className="icone-pinterest"/>
        </a>
    </div>

    <div className="links">
        <a href="#">home</a>
        <a href="#">about</a>
        <a href="#">menu</a>
        <a href="#">products</a>
        <a href="#">review</a>
        <a href="#">contact</a>
        <a href="#">blogs</a>
    </div>

    <div className="credit">created by <span>UTFome</span> | all rights reserved</div>

</section>

  );
}

export default Footer;
