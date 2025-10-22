import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth,googleProvider)

    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
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
    googleLogin
}

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;