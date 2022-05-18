import React, { useState } from "react";
import "./Navbar.css";
import {
  BsSearch,
  BsCart4,
  BsCurrencyEuro,
  BsCurrencyPound,
  BsCurrencyYen,
} from "react-icons/bs";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { IoIosPerson } from "react-icons/io";
import {Badge } from "@mui/material";
import Storelay from './childComponents/Storelay';
import Loginform from './childComponents/profile/Loginform'
import { useSelector } from "react-redux";




const Navbar = ({setSearchTerm}) => {
  const [activeLayout,setActiveLayout]=useState(false);


  //logintoggle
  const [myprofile,setMyprofile]=useState(false);

  //getting addtocart data
  
  const getdata = useSelector((state)=>state.addtocart.carts);



  return (
    <>
      <div  className="main">
        
        <nav className="navbar navbar-expand-lg navbar-light navbarhead">
          <div className="container-fluid">
            <div className="dropDown">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  En
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Bengali</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Telugu</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  $
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <BsCurrencyEuro />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <BsCurrencyPound />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <BsCurrencyYen />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <BiRupee />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-5 navbarelements">
              <li className="nav-item">
                  <p
                  className="nav-link active profile"
                  aria-current="page"
                  to="/profile"
                  style={{ width: "150px", cursor:'pointer' }}
                  onClick={()=>{setMyprofile(true)}}
                  
                >
                  <IoIosPerson />
                  My Profile
                </p>
                
                
              </li>
              <li className="nav-item">
                <p style={{ width: "150px" , marginTop:"-20px"}}>
                <Link to="/cart" style={{textDecoration:"none" , color:"inherit"}}>
                  <Badge badgeContent={getdata.length} color="success">
                    <BsCart4 style={{ fontSize: "20px" }} />
                  </Badge>

                  <span style={{ margin: "10px", }}>items</span></Link>
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" style={{ cursor: "text" }}>
                  $999
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" style={{display:"flex"}}>
                  
                  <BsSearch style={{ cursor: "pointer", fontSize:"30px" }} />
                  <input type="text" placeholder="Search Here" onChange={(event)=>{setSearchTerm(event.target.value)}}/>
                </p>
              </li>
            </ul>
            
          </div>
   
        </nav>

        {myprofile && <Loginform setmyprofile={setMyprofile} />}
       
        <div className="headingsss" onWheel={() => {setActiveLayout(false)}}>
          <h1>iShop</h1>
          <ul onWheel={() => {setActiveLayout(false)}} onMouseUp={() => {setActiveLayout(false)}} >
          <li ><Link to="/" className="ulli">HOME</Link></li>
          <li ><Link to="/store" className="ulli">STORE</Link></li>
          <li onMouseOver={() => {setActiveLayout(true)}}><span className="ulli">IPHONE</span></li>
          <li onMouseOver={() => {setActiveLayout(true)}}><span className="ulli">IPAD</span></li>
          <li onMouseOver={() => {setActiveLayout(true)}}><span className="ulli">MACBOOK</span></li>
          <li onMouseOver={() => {setActiveLayout(true)}}><span  className="ulli">ACCESSORIES</span></li>
          </ul>

          <div onMouseLeave={() => {setActiveLayout(false)}} onWheel={() => {setActiveLayout(false)}} onWheelCapture={() => {setActiveLayout(false)}}>
        {activeLayout ? <Storelay  /> : null}
      </div>
        </div>
        
      </div>

      
    
    </>
  );
};

export default Navbar;
