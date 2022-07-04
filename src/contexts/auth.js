import React, { createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import {api, createSession, createUser, createProduct, sayHello} from '../services/api';

export const AuthContext = createContext();
AuthContext.user = JSON.parse(localStorage.getItem("user"));

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if (recoveredUser && token) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setLoading(false);
    }, []);

    const login = async (email, senha) => {
        await sayHello();
        const response = await createSession(email, senha);
        const loggedUser = response.data.usuario;
        const token = response.data.token;
        console.log('user: '+JSON.stringify(loggedUser))

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser)
        navigate('/sobre');

    }
    
    const logout = () => {
        console.log('Logout');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate('/login');
    }

    const register = async (nome, sobrenome, email, senha) => {
        console.log('Register');
        const response = await createUser(nome, sobrenome, email, senha);
        console.log(response.data);
        navigate('/login');
    }

    const createProductAndRedirect = async (usuarioId, product) => {
        console.log('Create Product: ' + JSON.stringify(product));
        const response = await createProduct(usuarioId, product);
        console.log(response.data);
        navigate('/produtos');
    }

    return (
        <AuthContext.Provider 
        value={{authenticated: !!user, user, loading, login, logout, register, createProductAndRedirect}}>
            {children}
        </AuthContext.Provider>
    )
}