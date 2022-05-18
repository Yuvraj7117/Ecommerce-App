import React from 'react';
import './signup.css';
import {MdOutlineClose} from 'react-icons/md'


const SignUp = ({setSignup}) => {

  return (
    <>
   <div>
    <div className='sign-overlay'>
         <div className='modal-content'>
         <button className='close-modal' onClick={()=>setSignup(false)}><MdOutlineClose/></button>
         <div className='signupform'>
             <h1>SignUp</h1>
             
             <p style={{ fontSize:"20px" }}>FIRST NAME <span style={{marginLeft:"6vw"}}>:<input placeholder='enter an email' name="email" style={{marginLeft:"5vw"}}/></span></p>
             <p style={{ fontSize:"20px" }}>LAST NAME<span style={{marginLeft:"6vw"}}>:<input placeholder='enter an email' name="email" style={{marginLeft:"5vw"}}/></span></p>
             <p style={{ fontSize:"20px" }}>EMAIL <span style={{marginLeft:"6vw"}}>:<input placeholder='enter an email' name="email" style={{marginLeft:"5vw"}}/></span></p>
             <p style={{ fontSize:"20px", marginLeft:"0vw" }}>PASSWORD <span style={{marginLeft:"3vw"}}>:<input placeholder='enter an password' name="password"style={{marginLeft:"6vw"}}/></span></p>
             <p style={{ fontSize:"20px", marginLeft:"0vw" }}>CONFIRM PASSWORD <span style={{marginLeft:"3vw"}}>:<input placeholder='enter an password' name="password"style={{marginLeft:"6vw"}}/></span></p>
             <p style={{textDecoration:"none",color:"black"}}><h6>Already a Member? <span style={{color:"orange" , cursor:"pointer"}} >LOG IN</span></h6></p>
             </div>  
            
            
         </div>     
    </div>
   </div>
    </>
  )
}

export default SignUp;