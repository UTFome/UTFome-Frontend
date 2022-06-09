import React from 'react';
import './Main.css';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Review from '../../pages/review/Review';
import Produto1 from '../../../assets/images/bee_redondo_pequeno.png';
import Produto2 from '../../../assets/images/bee_redondo_pequeno.png';
import Produto3 from '../../../assets/images/bee_redondo_pequeno.png';


function Main(){
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
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto2}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Produto3}></img>
                        <h3>tasty and healty</h3>
                        <div className="price">$15.99 <span>20.99</span></div>
                        <div class="icons">
                            <a href="#" class="fas fa-eye"></a>
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