import React from "react";
import "./Main.css";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Review from "../review/Review";
import Produto1 from "../../../assets/images/bee_redondo_pequeno.png";
import Banner1 from "../../../assets/images/comida3.jpg";
import Banner2 from "../../../assets/images/comida4.jpg";
import ProdutoModal1 from "../../../assets/images/comida2.jpg";
import Modal from "react-modal";
import { useState } from "react";
import { listProducts } from "../../../services/api";
import ReactElasticCarousel from "react-elastic-carousel";
import Item from "../../components/produto/item/Item";

Modal.setAppElement("#root");
 
function Main() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [products, setVal] = useState([]);

    /******** Carousel ********/
    const breakPoints = [
        { width: 1, itemToShow: 1 },
        { width: 550, itemToShow: 2, itemScroll: 2 },
        { width: 768, itemToShow: 3 },
        { width: 1200, itemToShow: 4 },
    ];
    const [items, setItems] = useState([
        <div className="content banner-food">
            <h3 className="titulo">Qual será a sua escolha?</h3>
            <p className="subtitulo">
            Você não precisa ir longe e nem esperar horas por uma comida,
            escolha uma opção pertinho de você
        </p>
        </div>,
        <img src={Banner2} className="banner-comida" />,
        <img src={Banner1} className="banner-comida" />,
        <img src={Banner2} className="banner-comida" />,
    ]);

    const addItem = () => {
        const nextItem = Math.max(1, items.length + 1);
        setItems([...items, nextItem]);
    };
    const removeItem = () => {
        const endRange = Math.max(0, items.length - 1);
        setItems(items.slice(0, endRange));
    };
    /***************************/

    const getProducts = async () => {
        const { data } = await listProducts();
        console.log(data);
        setVal(data);
    };

    function handleOpenModal() {
        setIsOpen(true);
    }
    function handleCloseModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
        top: "50%",
        left: "50%",
        right: "auto",
        },
    };
    // const renderProduct = (product) => {
    return (
        <div className="container">
        <Header className="header-main"></Header>
        {/* 
            <div>
                <button onClick={addItem}> + </button>
                <button onClick={removeItem}> - </button>
            </div> */}

        <div className="carousel-wrapper">
            <ReactElasticCarousel breakPoints={breakPoints}>
            {items.map((item) => (
                // <img src={ProdutoModal1}/>
                <Item key={item}>{item}</Item>
            ))}
            </ReactElasticCarousel>
        </div>

        <section className="home-main" id="home">
            <div className="content">
            {/* <h3 className="titulo">Qual será a sua escolha?</h3> */}
            {/* <p className="subtitulo">
                Você não precisa ir longe e nem esperar horas por uma comida,
                escolha uma opção pertinho de você
            </p> */}
            </div>
        </section>
        <h1 className="heading">
            {" "}
            <span>Alguns</span> Produtos{" "}
        </h1>
        <section className="menu" id="menu">
            <div className="box-container">
            <div className="box">
                <img src={Produto1}></img>
                <h3>tasty and healty</h3>
                <div className="price">R$ 15.99</div>
                <div className="icons">
                <button
                    className="modal-button fas fa-eye a"
                    onClick={handleOpenModal}
                ></button>
                <Modal
                    className="modal-produto"
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                >
                    <div className="modal-topo">
                    <button className="modal-fechar" onClick={handleCloseModal}>
                        {" "}
                        x{" "}
                    </button>
                    <div className="blogs" id="blogs">
                        <h1 className="heading modal-titulo">
                        {" "}
                        <span>DESCRIÇÃO DO PRODUTO</span>{" "}
                        </h1>
                        <div className="box-container">
                        <div className="box">
                            <div className="image">
                            <img src={ProdutoModal1}></img>
                            </div>
                            <div className="content">
                            <a className="title">Bee Happy</a>
                            {/* <p>{product.descricao}Bombom muito gostoso.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Modal>
                </div>
            </div>
            <div className="box">
                <img src={Produto1}></img>
                <h3>tasty and healty</h3>
                <div className="price">R$ 15.99</div>
                <div className="icons">
                <button
                    className="modal-button fas fa-eye a"
                    onClick={handleOpenModal}
                ></button>
                <Modal
                    className="modal-produto"
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                >
                    <div className="modal-topo">
                    <button className="modal-fechar" onClick={handleCloseModal}>
                        {" "}
                        x{" "}
                    </button>
                    <div className="blogs" id="blogs">
                        <h1 className="heading modal-titulo">
                        {" "}
                        <span>DESCRIÇÃO DO PRODUTO</span>{" "}
                        </h1>
                        <div className="box-container">
                        <div className="box">
                            <div className="image">
                            <img src={ProdutoModal1}></img>
                            </div>
                            <div className="content">
                            <a className="title">Bee Happy</a>
                            {/* <p>{product.descricao}Bombom muito gostoso.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Modal>
                </div>
            </div>
            <div className="box">
                <img src={Produto1}></img>
                <h3>tasty and healty</h3>
                <div className="price">R$ 15.99</div>
                <div className="icons">
                <button
                    className="modal-button fas fa-eye a"
                    onClick={handleOpenModal}
                ></button>
                <Modal
                    className="modal-produto"
                    isOpen={modalIsOpen}
                    onRequestClose={handleCloseModal}
                >
                    <div className="modal-topo">
                    <button className="modal-fechar" onClick={handleCloseModal}>
                        {" "}
                        x{" "}
                    </button>
                    <div className="blogs" id="blogs">
                        <h1 className="heading modal-titulo">
                        {" "}
                        <span>DESCRIÇÃO DO PRODUTO</span>{" "}
                        </h1>
                        <div className="box-container">
                        <div className="box">
                            <div className="image">
                            <img src={ProdutoModal1}></img>
                            </div>
                            <div className="content">
                            <a className="title">Bee Happy</a>
                            {/* <p>{product.descricao}Bombom muito gostoso.</p> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Modal>
                </div>
            </div>
            </div>
            {/* { products.map(renderProduct) } */}
        </section>
        <Review></Review>
        <Footer></Footer>
        </div>
    );
  // }
}
export default Main;
