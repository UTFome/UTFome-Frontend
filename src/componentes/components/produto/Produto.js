import "./Produto.css";
import Bee from "../../../assets/images/background_home_pequeno.png";

function Produto() {
    return(
        <section class="blogs" id="blogs">
            <h1 class="heading"> Produtos <span>Disponíveis</span> </h1>
        
            <div class="box-container">
                <div class="box">
                    <div class="image">
                        <img src={Bee} />
                    </div>
                    <div class="content">
                        <a href="#" class="title">Brigadeiro</a>
                        <span>Localização: Em frente ao Bloco X</span>
                        <p>Brigadeiro muito gostoso</p>
                        <a href="#" class="btn">tenho interesse</a>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={Bee} />
                    </div>
                    <div class="content">
                        <a href="#" class="title">Brownie</a>
                        <span>Localização: Em frente ao Bloco X</span>
                        <p>Brownie muito gostoso</p>
                        <a href="#" class="btn">tenho interesse</a>
                    </div>
                </div>

                <div class="box">
                    <div class="image">
                        <img src={Bee} />
                    </div>
                    <div class="content">
                        <a href="#" class="title">Bolo</a>
                        <span>Localização: Em frente ao Bloco X</span>
                        <p>Bolo muito gostoso</p>
                        <a href="#" class="btn">tenho interesse</a>
                    </div>
                </div>


            </div>

        </section>
    );
}

export default Produto;