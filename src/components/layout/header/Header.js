import './Header.css';
import logo from '../../../assets/images/Logo_grande.png';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import { FaBars } from 'react-icons/fa';

function Header(){
    
    function toggleNavbar(){
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }
    
    window.onscroll = () =>{
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
    }

    return (
        <Router>
            <header className='header'>

                <a href='#' className='logo'>
                    <img src={logo}></img>
                </a>

                <nav className='navbar'>
                    <a href='#home'>home</a>
                    <a href='#produtos'>produtos</a>
                    <a href='#anunciar'>anunciar</a>
                    <a href='#sobre'>sobre</a>
                    <a href='#contato'>contato</a>
                    <a href='#conta'>conta</a>
                </nav>

                <div className='icons'>
                    <div id='menu-btn' onClick={toggleNavbar}>
                        <FaBars />
                    </div>
                </div>

            </header>
        </Router>
    );
}

export default Header;