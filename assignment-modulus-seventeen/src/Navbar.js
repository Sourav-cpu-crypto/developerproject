import React from 'react'
import {useAuth} from './useContext/AuthProvider'
import './Navbar.css'
import { BrowserRouter, Routes, Route,Router, Link, Navigate } from  "react-router-dom";
const Navbar = () => {
    const auth =useAuth();
    console.log(auth.user)
    function logout(){
    
       auth.Logout("fcard")
   
    }
  return (
    <div className='navbar'>
           {!auth?.user &&(
  <Link to="signup">Signup</Link>
 
   )} 

{!auth?.user &&(
  <Link to="login">Login</Link>
 
   )} 
    {auth?.user &&(
 <h1>Welcome  {auth.user} </h1>

   )}  
 {auth?.user &&(
  <button className="logout" onClick={logout}> Logout</button>
 
   )}  
    </div>
  )
}

export default Navbar