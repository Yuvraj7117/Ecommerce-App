import React from "react";
import { Link } from "react-router-dom";
import "./hamburger.css";
import { GrClose } from "react-icons/gr";
import {
  BsSearch,
  BsCart4,
  BsCurrencyEuro,
  BsCurrencyPound,
  BsCurrencyYen,
  BsPerson
} from "react-icons/bs";
import {BiRupee} from 'react-icons/bi'
import { Dropdown } from "react-bootstrap";



const Hamburger = ({ close }) => {
  return (
    <>
     
      <div className="box">
        <GrClose
          onClick={() => {
            close(false);
          }}
          className="close"
        />
      
        <div className="mobileHeading">
        <div className="userIcons">
          <div className="carts">
         
          <BsCart4/><span style={{margin:"0px 4px"}}>2</span>Items

        <p className="price" >$999</p>
        </div>
        <div className="profile">
        <BsPerson/>
        <p>My Profile</p>

         </div>
        </div>
        <div style={{display:"flex" }} className="userCurr">
        <Dropdown >
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{marginLeft:"-50px"}}>
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
         
        
        <div className="searched">
          <BsSearch className="searchedIcon" />
          <input type="text" placeholder="Search here..."/>
        </div>

        <div className="headingss" >
      <ul >
          <li onClick={() => {close(false)}}> HOME  </li>
          <li><Link to="/store" className="link" style={{textDecoration:"none"}}>STORE</Link></li>
          <li><Link to="/iphone" className="link" style={{textDecoration:"none"}}>IPHONE</Link></li>
          <li><Link to="/ipad" className="link"style={{textDecoration:"none"}}>IPAD</Link></li>
          <li><Link to="/macbook" className="link"style={{textDecoration:"none"}}>MACBOOK</Link></li>
          <li><Link to="/accessories" className="link"style={{textDecoration:"none"}}>ACCESSORIES</Link></li>
        </ul>
      </div>
      </div>

   
    </>
  );
};

export default Hamburger;
