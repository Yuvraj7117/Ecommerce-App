import React, { useState } from 'react';
import './loginform.css';
import {MdOutlineClose} from 'react-icons/md'
import SignUp from './SignUp'


const Loginform = ({setmyprofile}) => {

  //signup toggle
  const [signup,setSignup]=useState(false);
  return (
    <>
   <div>
    <div className='overlay'>
      
      
         <div className='modal-content'>
         <button className='close-modal' onClick={()=>setmyprofile(false)}><MdOutlineClose/></button>
         <div className='loginform'>
             <h1>Login</h1>
             <p style={{ fontSize:"20px" }}>EMAIL <span style={{marginLeft:"6vw"}}>:<input type='email' placeholder='enter an email' name="email" style={{marginLeft:"5vw"}}/></span></p>
             <p style={{ fontSize:"20px", marginLeft:"0vw" }}>PASSWORD <span style={{marginLeft:"3vw"}}>:<input type='password' placeholder='enter an password' name="password"style={{marginLeft:"6vw"}}/></span></p>

             <p style={{textDecoration:"none",color:"black"}}><h6>NEW USER? <span style={{color:"orange" , cursor:"pointer"}} onClick={()=>setSignup(true)}>SIGN UP</span></h6></p>
             </div>  
            {signup && <SignUp setSignup={setSignup} signup={signup}/>}
         </div>
         
         
    </div>
   </div>
    </>
  )
}

export default Loginform;