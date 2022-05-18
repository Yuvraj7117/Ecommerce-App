import React, { useState, useEffect, Fragment } from "react";
import "./productdetails.css";
import { Link,useParams} from "react-router-dom";
import { RiSubtractLine, RiAddFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../../redux/actions/productActions";

const ProductDetails = (_id) => {
  const id = useParams(_id)

  console.log(id)
  const dispatch = useDispatch();

  const productdetail  = useSelector((state) => state.productDetails);
  console.log(productdetail)
  const { loading,product,error } = productdetail
  console.log(product)
  console.log(loading)
  console.log(error)

  useEffect(() => {
    
    dispatch(detailsProduct(id));
   

  }, [dispatch,id]);



  //increment or decrement the value


  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    } else {
      alert("You Selected Zero Number of Items.");
      setValue(0);
    }
  };

  return (

        <Fragment>
          <Navbar />
          <div className="container">
            <div className=" detailsfirstdiv">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <BiArrowBack className="leftArrow" />
                <span className="goBack">GO BACK</span>
              </Link>
              <img src="/images/miscellaneous/appleWatch.jpg" alt="products" />
            </div>
            <div>
              <div className="detailsseconddiv">
                <h1>Digital Smartwatch</h1>
                <hr />
                <p>stars</p>
                <hr />
                <p>$499</p>
                <hr />
                <p>
                  <b>Description:-</b> Lorem, ipsum dolor sit amet consectetur
                  adipisicing.
                </p>
              </div>
            </div>
            <div className="addCart">
              <div className="qty">
                <h2 style={{ cursor: "pointer" }}>
                  <RiSubtractLine
                    onClick={() => {
                      setValue(decrement);
                    }}
                  />
                </h2>
                <h4>{value}</h4>
                <h2 style={{ cursor: "pointer" }}>
                  <RiAddFill onClick={() => {setValue(increment);}}/>
                </h2>
              </div>
              <h3>ADD TO CART</h3>
            </div>
          </div>
        </Fragment>
      


  )}

export default ProductDetails;
