import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import "./Profile.css";
import Modal from "react-modal";
import Produto1 from "../../../assets/images/bee_redondo_pequeno.png";
import reginaldo from "../../../assets/images/about-reginaldo.jpg";
import ProdutoModal1 from "../../../assets/images/comida2.jpg";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/auth";
import { IconName } from "react-icons/md";

function Profile() {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="teste">
        <Header className="header-main"></Header>
        <div className="banner-perfil">
        </div>
          <div className="foto-perfil">
            <img className="foto" src={reginaldo} alt="" />
            <div className="nome-perfil">Reginaldo Neto</div>
          </div>
      <h1 className="heading"> <span>Meus</span> Produtos </h1>
      <section className="menu" id="menu">
        <div className="box-container">
          <div className="box">
            <button
                className="modal-button fas fa-eye a botaofechar IoIosCloseCircleOutline"
                //onClick={handleOpenModal}
            ></button>
            {/* quero usar esse icone como botao de remover produtos IoIosCloseCircleOutline */}
            <img src={Produto1}></img>
            <h3>tasty and healty</h3>
            <div className="price">R$ 15.99</div>
            <div className="icons">
              <button
                className="modal-button fas fa-eye a"
                //onClick={handleOpenModal}
              ></button>
              
            </div>
          </div>
          <div className="box">
          <button
                className="modal-button fas fa-eye a botaofechar"
                //onClick={handleOpenModal}
              ></button>
            <img src={Produto1}></img>
            <h3>tasty and healty</h3>
            <div className="price">R$ 15.99</div>
            <div className="icons">
              <button
                className="modal-button fas fa-eye a"
                //onClick={handleOpenModal}
              ></button>
              
            </div>
          </div>
          <div className="box">
          <button
                className="modal-button fas fa-eye a botaofechar"
                //onClick={handleOpenModal}
              ></button>
            <img src={Produto1}></img>
            <h3>tasty and healty</h3>
            <div className="price">R$ 15.99</div>
            <div className="icons">
              <button
                className="modal-button fas fa-eye a"
                //onClick={handleOpenModal}
              ></button>
              
            </div>
          </div>
        </div>
        {/* { products.map(renderProduct) } */}
      </section>
       
        
        <Footer className="header-main"></Footer>
      </div>
    </>
  );
}

export default Profile;
