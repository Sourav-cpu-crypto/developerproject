import React, { useContext } from 'react';
import {useState,createContext} from 'react';
import { useNavigate } from 'react-router-dom';
const AuthContext =createContext(null);

function AuthProvider({children}) {
  const navigate = useNavigate();

  const [user,setUser] =useState(JSON.parse(localStorage.getItem("fcard"))||null);
  const [persist,setpersist] =useState();
  const login = async (user) =>{

 localStorage.setItem("fcard",JSON.stringify(user));
    setUser(user);
  }
  const persis =(persist) =>{
    setpersist(persist);
  }
  const Logout =(remove) =>{
    localStorage.removeItem(remove);

    setUser(null);
    navigate("/login")
  }
  return (
    <AuthContext.Provider value={{user,login,Logout,persis}}>
      
     {children}

</AuthContext.Provider>
  

  )
}
export  const useAuth=()=>{
  return useContext(AuthContext);
}

export default AuthProvider