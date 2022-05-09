
import Footer from '../../layout/footer/Footer';
import Header from '../../layout/header/Header';
import './Profile.css';

import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';

function Profile(){

    const { authenticated, logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout();
    }

    
    return (
        <>
            <p>{String(authenticated)}</p>
            <h1>USUÁRIO BEE</h1>
            <h2>HOME</h2>
            <h2>PERFIL</h2>
            <h2>PRODUTOS</h2>
            <h2>CONFIGURAÇÕES</h2>
            <button className='logout-botao' onClick={handleLogout}>LOGOUT</button>
            
        </>
    )
}

export default Profile;

