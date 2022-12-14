import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"
const AuthContext=createContext()
axios.defaults.withCredentials=true
const AuthContextProvider = (props) => {
    const [loggedIn,setLoggedIn]=useState(false)
    async function getloggedin(){
        if(localStorage.getItem("token"))
        {
            setLoggedIn(true);
        }
        else
        {
            setLoggedIn(false);
        }
    }
    useEffect(()=>{
        getloggedin()
    },[])
    return (
       <AuthContext.Provider value={{loggedIn,getloggedin}}>
        {props.children}   
       </AuthContext.Provider>
    )
}

export default AuthContext
export {AuthContextProvider} 
