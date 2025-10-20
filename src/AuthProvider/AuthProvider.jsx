import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user by with email and password
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google auth
    const signInGoogle = ()=>{
        
        return signInWithPopup(auth, googleProvider)
    }
    // sign out user
    const signOutUser = ()=>{
        
        return signOut(auth)
    }
    // update User profile
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    // reset forget password
    const resetForgetPassword = (email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unsubscribe()
    },[])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        signInGoogle,
        updateUser,
        signOutUser,
        resetForgetPassword
    }
    return (
       <AuthContext value={authInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;