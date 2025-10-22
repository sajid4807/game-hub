import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] =useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const Login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)

    }
    const profile = (updateData) =>{
        return updateProfile(auth.currentUser,updateData )
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            unsubscribe()
        }
    },[])


const authData = {
    user,
    setUser,
    createUser,
    logOut,
    Login,
    googleLogin,
    profile,
    loading,
    setLoading
}

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;