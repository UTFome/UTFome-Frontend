import "./Produto.css";
import { listProducts } from "../../../services/api.js";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from '../../../contexts/auth';

import Bee from "../../../assets/images/background_home_pequeno.png";


function Produto() {
    const { authenticated, login } = useContext(AuthContext);
    const [products, setVal] = useState([]);

    const getProducts = async () => {
        const { data } = await listProducts();
        console.log(data)
        setVal(data);
    };

    const renderProduct = (product) => {
        return <div className="box-container">
            <div className="box" key="{product.id}">
                <div className="image"> <img src={Bee} /> </div>
                <div className="content">
                    <a href="#" className="title">{product.nome}</a>
                    <span>Localização: Em frente ao Bloco X</span>
                    <p>{product.descricao}</p>
                    <a href="#" className="btn">tenho interesse</a>
                </div>
            </div>
        </div>
    };

    useEffect(() => { getProducts() }, []);    


    return(
        <section className="blogs" id="blogs">
            <h1 className="heading"> Produtos <span>Disponíveis</span> </h1>         

            { products.map(renderProduct) }
        </section>
    );
}

export default Produto;