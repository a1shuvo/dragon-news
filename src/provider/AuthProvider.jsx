import React, { useState } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Hablu Mia',
        email: 'hablu@gmail.com'
    });
    const authData = {
        user,
        setUser
    };
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;