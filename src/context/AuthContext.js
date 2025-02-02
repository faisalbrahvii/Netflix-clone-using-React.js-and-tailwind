import {createContext, useContext, useEffect, useState} from 'react';
import {auth}  from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

const AuthContext = createContext();

export function AuthContextProvider({children}){
    const {user, setUser} = useState({});

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function LogIn(email, password){
        return signInWithEmailAndPassword(auth, email, password);
    }


    function LogOut(){
        return signUp(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }); 

    return  (
        <AuthContext.Provider value={{ signUp , LogIn , LogOut,user}}> 
            {children}
        </AuthContext.Provider>
    )
}

export function UseAuth(){
    return useContext(AuthContext);
}