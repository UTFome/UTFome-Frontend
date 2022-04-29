import React, { createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import {api, createSession, sayHello} from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = async (email, senha) => {
        await sayHello();
        const response = await createSession(email, senha);
        //console.log(response.data);

        const loggedUser = response.data.usuario;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", JSON.stringify(token));

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

    return (
        <AuthContext.Provider 
        value={{authenticated: !!user, user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}