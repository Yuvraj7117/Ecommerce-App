import React from "react";
import Rating from "./childComponents/Rating";
import{GiShoppingCart} from "react-icons/gi";
import {MdFavorite} from "react-icons/md";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import "./items.css";
import { ADD } from "../redux/actions/CartAction";


const Items = ({item,hover}) => {
  const dispatch = useDispatch()

//setting the value in addtocart reducer

  const send=(item)=>{dispatch(ADD(item))}

  return (
    <>
          <div className="card cardss" onMouseEnter={()=>hover} >

           <div className="hovering">
           <MdFavorite className="fav"/>
           <GiShoppingCart className="cart" onClick={()=>{send(item)}} />
           </div>
     
           <Link to={`/products/${item._id}`} style={{textDecoration:"none",color:"black"}}>
         
            <img src={item.image} className="card-img-top image" alt={item.name} />
            <div className="card-body" >

              <h5 className="card-title">Apple watch</h5>
       
              <h6 className="card-text">
                <Rating Rating={item.Ratings}/>
              </h6>
              <p className="card-textp">${item.price}<span className="pricecut">${item.previousprice}</span></p>
             
            </div>
           
           </Link>
          </div>
    </>
  );
};

export default Items;
