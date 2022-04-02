import './Header.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from '../../../assets/images/Logo_grande.png';

function Header(){
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

            </header>
        </Router>
    );
}

export default Header;