import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';


export const AuthContex = createContext();
const auth = getAuth(app);

const Contex = ({ children }) => {
    const [loginUser, serLoginUser] = useState({});
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            serLoginUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = { loginUser, serLoginUser, loading, setLoading, logOut };
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Contex;