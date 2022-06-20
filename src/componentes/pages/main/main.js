import React from 'react';
import './Main.css';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Review from '../review/Review';
import Produto1 from '../../../assets/images/bee_redondo_pequeno.png';
import Produto2 from '../../../assets/images/bee_redondo_pequeno.png';
import Produto3 from '../../../assets/images/bee_redondo_pequeno.png';
import ProdutoModal1 from '../../../assets/images/comida2.jpg';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root')

function Main(){
    const[modalIsOpen, setIsOpen] = useState(false)
    function handleOpenModal(){
        setIsOpen(true)
    }
    function handleCloseModal(){
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',

        }
    }
    return(
        <div className='container'>

            <Header className='header-main'></Header>

            <section className='home-main' id="home">
                <div className='content'>
                    <h3>fresh bee in the morning</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
                </div>
            </section>

            <section className="menu" id="menu">
                <h1 className="heading"> our <span>menu</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={Produto1}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div className="icons">
                            <button className="modal-button fas fa-eye a" onClick={handleOpenModal} ></button>
                            <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
                                <div className="modal-topo">
                                    <button onClick={handleCloseModal}> x </button>
                                    {/* <h2> DESCRIÇÃO DO PRODUTO </h2> */}
                                    <div className="blogs" id="blogs">
                                        <h1 className="heading"> our <span>DESCRIÇÃO DO PRODUTO</span> </h1>
                                        <div className="box-container">
                                            <div className="box">
                                                <div className="image">
                                                    <img src={ProdutoModal1}></img>
                                                </div>
                                                <div className="content">
                                                    <a href="#" className="title">tasty and refreshing coffee</a>
                                                    <span>by admin / 21st may, 2021</span>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                            </Modal>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto2}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div className="icons">
                            <button href="#" className="fas fa-eye a" ></button>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div className="icons">
                        <button href="#" className="fas fa-eye a" ></button>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div className="icons">
                            <button href="#" className="fas fa-eye a" ></button>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div className="icons">
                            <button href="#" className="fas fa-eye a" ></button>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div className="icons">
                            <button href="#" className="fas fa-eye a" ></button>
                        </div>
                    </div>

                </div>

                </section>

                <Review></Review>

                <Footer className='header-main'></Footer>

        </div>


    )

}
export default Main;