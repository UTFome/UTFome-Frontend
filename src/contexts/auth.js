import React, { createContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const login = (email, senha) => {
        console.log('Login auth', { email, senha });

        if(senha === "secret"){
            setUser({ id: 5, email })
            navigate('/sobre');
        }

    }
    
    const logout = () => {
        console.log('Logout');
        setUser(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider 
        value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}