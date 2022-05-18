import React from 'react';
import {BiError} from "react-icons/bi"
import { Link } from 'react-router-dom';
import "./error.css";
import {IoMdArrowRoundBack} from 'react-icons/io'


const Errors = () => {
  return (
    <>
      <div className='errorcontainer'>
          <h2><BiError/></h2>
          <h1>404 ERROR PAGE</h1>
          <p>Oops... Something Went Wrong</p>
          
      </div>
      <Link to="/" style={{textDecoration:"none"}}><h3 className='errorback'><IoMdArrowRoundBack style={{marginTop:"5px"}}/>GO HOME</h3></Link>
    </>
  )
}

export default Errors