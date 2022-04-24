import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';

import React from 'react';

import Footer from './componentes/layout/footer/Footer';
import Header from './componentes/layout/header/Header';
import About from './componentes/pages/about/About';
import Review from './componentes/pages/review/Review';
import Home from './componentes/pages/home/Home';
import Contact from './componentes/pages/contact/Contact';
import Produto from './componentes/components/produto/Produto';
import Login from './componentes/pages/login/Login';
import Announce from './componentes/pages/announce/Announce';

import { AuthProvider } from './contexts/auth';

const AppRoutes = () => {
    

    return(
        <Router>
            <AuthProvider>
                <Routes>

                    <Route exact path="/anunciar" element={<Announce />} />
                    <Route exact path="/contato" element={<Contact />} />
                    <Route exact path="/review" element={<Review />} />
                    <Route exact path="/sobre" element={<About />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}




export default AppRoutes;