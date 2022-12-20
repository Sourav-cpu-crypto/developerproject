import React, { useState } from 'react'
import axios from "axios";
import './login.css'
import {useAuth} from '../useContext/AuthProvider'
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const auth =useAuth();
      const [userdet,setuserdet]=useState({});
    
        function change(e){
            setuserdet((prevterm) => 
            ({ ...prevterm, 
              [e.target.name]: e.target.value }));
        }
        console.log(userdet)
       async function submit(e)
        {
    e.preventDefault();
    try {
    const res = await  axios.post("/auth/signin",{...userdet});
console.log(res)

auth.login(res.data.uname)
navigate("/");
    }
    catch(e)
    {
        console.log("error")  
    }
        }
    
      return (
        <div className='logform'>Login
    
            <form>
        
                <div className='uname'>
                <input type="text" className='username' placeholder='username' 
                name="uname" onChange={change}/>
                    </div>
            
    <div className='pass'>
    <input type="text" placeholder='password'  className='password'
      name="upass" onChange={change}/>
    </div>
               <button className='login' onClick={submit}>
    Login
               </button>
        
                </form>
        </div>
      )
      
    }
export default Login