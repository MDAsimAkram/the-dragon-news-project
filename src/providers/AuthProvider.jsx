import React from 'react';
import { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

// akta context create kore oitak export korte hobe jetar initial value hobe null

export const AuthContext = createContext(null);

const auth = getAuth(app);

// AuthProvider er moddhe children tak rekechi jno ata sob jaigai use korte pari..
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

const [loading, setLoading] = useState(true);

    // akta user create korbo ar seita k return korbo...createUser onno jaiga theke use korbo tai oitak authInfo er moddhe bosabo
    // register page er user create korbo
    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Login page er user create korte parbo
    const signIn = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout...........
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    // akta observer set korchi jeta state change hole dhore felbe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            // user ta peye gele loading hobe false
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        // loading ta onk jaigai use korbo tai eikhane bosalam
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        // akta AuthContext.Provider lagbe..Provider ta onk jaiga theke use korbo..

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;