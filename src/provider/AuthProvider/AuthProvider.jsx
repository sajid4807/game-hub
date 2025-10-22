// import { createUserWithEmailAndPassword } from "firebase/auth/cordova";
// import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import {  createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user,setUser] = useState({
        user:'hablu'
    })

    const registerLogin = () => {
        createUserWithEmailAndPassword
    }


const authData = {
    user,
    setUser
}

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;