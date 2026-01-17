import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext = createContext()

const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading]= useState(true);
    

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (updatedData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)
    }
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
    return signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe();
        };
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        auth,
        logIn,
        loading,
        setLoading,
        updateUser,
        googleLogin,
    };

    return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;