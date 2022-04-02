import styles from './Header.module.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Header(){
    return (
        <Router>
            <header className='header'>

                <a href='#' className='logo'>
                    LOGO
                </a>

                <nav className='navbar'>
                    <a href='#home'>home</a>
                    <a href='#produtos'>produtos</a>
                    <a href='#sobre'>sobre</a>
                    <a href='#contato'>contato</a>
                    <a href='#conta'>conta</a>
                </nav>

                

            </header>
        </Router>
    );
}