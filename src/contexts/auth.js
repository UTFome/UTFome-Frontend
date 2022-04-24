import React, { createContext, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

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

    const login = (email, senha) => {
        console.log('Login auth', { email, senha });

        // api criar uma session

        const loggedUser = {
            id: 5,
            email
        }

        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(senha === "secret"){
            setUser(loggedUser)
            navigate('/sobre');
        }

    }
    
    const logout = () => {
        console.log('Logout');
        localStorage.removeItem('user');
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