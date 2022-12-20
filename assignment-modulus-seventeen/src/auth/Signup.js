import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signup.css'

function Signup() {
  const navigate = useNavigate()
    const [register,setregister]=useState();
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
try{
const res = await  axios.post("/auth/signup",{...userdet});
console.log(res)
navigate("/login")
}
catch(e)
{

}
    }

  return (
    <div className='signform'>Signup

        <form>
            <div className='uname'>
            <input type="text" placeholder='username'  className='username'
            name="uname" onChange={change}/>
                </div>
        
<div className='pass'>
<input type="text" placeholder='password' className='password'
  name="upass" onChange={change}/>
</div>
           <button className="signup" onClick={submit}>
Signup
           </button>
            </form>
    </div>
  )
  
}

export default Signup