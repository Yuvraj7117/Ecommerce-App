import React, { useState} from 'react';
import './cartbody.css';
import {Link} from "react-router-dom"
import {RiCloseLine}  from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '../redux/actions/CartAction';
import Navbar  from './Navbar';

const Cartbody = () => {
     //getting addtocart data
     const getdata = useSelector((state)=>state.addtocart.carts)
    
    
     //increment or decrement

    const [value,setValue]=useState(1);
  
    const increment=()=>{
      setValue(value+1);
    }
  
    const decrement=()=>{
      if(value>0){
        setValue(value-1);
      }
     else{
       alert("Number of Item is Zero")
       setValue(0)
     }}

     //deleting product item from cart
    const dispatch = useDispatch()


     const dlt = (_id) =>{
       dispatch(Delete(_id))
    
    }

    //subTotal and total Price
const itemPrice= getdata.map(ele=>(ele.price*value))
const itemPrices = itemPrice[0]
const shippingFee = 20
const totalPrice = itemPrices-shippingFee
const total = totalPrice? totalPrice-0:0
console.log(total)
 
  return (
    <>
  <div>
    { itemPrice<=0?
   <div className='emptyCart'> 
     <Navbar/> 
     
				 <div className="row " style={{marginTop:"15vh"}}>
						<div className="card-body cart">
								<div className="col-sm-12 empty-cart-cls text-center ">
									<img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt="Cart is Empty"/>
									<h3><strong>Your Cart is Empty</strong></h3>
									<h4>Add something to make me happy :)</h4>
									<Link to="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
									
								
								</div>
						</div>
				</div>
						
					
					</div>
				 
		
   : <div>
   <Navbar/>
    <div className='main'>
        <h5>Cart</h5>
        <div className='heading1'> 
         <h6>PRODUCT</h6>
          <div className='heading2' >
              <h6>PRICE</h6>
              <h6>Qty</h6>
              <h6>UNIT PRICE</h6>
          </div>
        </div>
        <hr/>
      
        {
         getdata.map((item)=>{
            return(
              
             <div  className='productmain' key={item._id}>
               
             <div className='productdiv1'>
                 <RiCloseLine className='cut' onClick={(e)=>{dlt(e._id)}}/>
                 
                 <img src={item.image} className="image" alt={item.name}/>
                <p>{item.name}</p>
             </div>
             <div className='productdiv2'>
                <p>${itemPrices}</p>
                <div className='iandd'>
                    <p onClick={()=>{setValue(decrement)}}>-</p>
                    <p>{value}</p>
                    <p onClick={()=>{setValue(increment)}}>+</p>
                </div>
                <p>{item.price}</p>
             </div>
         
          </div>
    
         )})}
      
          <hr/>
        <div className='checkout'>
             <div className='voucher'>
                 <input type="text" placeholder="Voucher Code"/>
                 <button type="submit">Redeem</button>

             </div>
             <div className='total'>
                  <div className='totaldiv'>
                      <p>Subtotal</p>
                      <p>${total<=0 ? "00":itemPrice[0]}</p>
                  </div>
                  {
                      total<=0 ? null: <div className='totaldiv'>
                          <p>Shipping fee</p>
                          <p>$20</p>
                          
                          </div>
                  }
              
                  <div className='totaldiv'>
                      <p>Coupon</p>
                      <p>No</p>
                  </div>
                  <hr/>
                  <div className='finaltotal'>
                      <h3>TOTAL</h3>
                      <h3>${total<=0 ? "00":total}</h3>
                  </div>
                  <button className='checkoutbutton' onClick={()=>{alert("Payment Method is not Active yet! Sorry...")}} style={{outline:"none"}}>CHECKOUT</button>
             </div>
        </div>

    </div>


    </div>
}
  </div>                           
    </>
  )
}

export default Cartbody
