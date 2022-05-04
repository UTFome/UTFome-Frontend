import './Header.css';
import logo from '../../../assets/images/Logo_grande.png';

import { FaBars } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';

function Header(){
<<<<<<< HEAD:src/components/layout/header/Header.js
    
    function toggleNavbar(){
=======

    const { authenticated } = useContext(AuthContext);

    function openMenu(){
>>>>>>> 426371a2d6ef902f323c3d18f05ea328d9213421:src/componentes/layout/header/Header.js
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }
    
    window.onscroll = () =>{
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('active');
    }

    return (
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
                    <a href='#conta'>perfil</a>
                </nav>

                <div className='icons'>
<<<<<<< HEAD:src/components/layout/header/Header.js
                    <div id='menu-btn' onClick={toggleNavbar}>
=======
                    <div id='menu-btn' onClick={openMenu}>
>>>>>>> 426371a2d6ef902f323c3d18f05ea328d9213421:src/componentes/layout/header/Header.js
                        <FaBars />
                    </div>
                </div>

            </header>
<<<<<<< HEAD:src/components/layout/header/Header.js
        </Router>
=======

>>>>>>> 426371a2d6ef902f323c3d18f05ea328d9213421:src/componentes/layout/header/Header.js
    );
}

export default Header;