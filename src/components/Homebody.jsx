import { React, useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { listProducts } from '../redux/actions/productActions';
import { featureProducts } from '../redux/actions/productActions';
import "./Homebody.css";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Items from "../components/Items";
import Hamburger from "./childComponents/Hamburger";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Errormsg from "./Errormsg";
import {Link} from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import FeatureProduct from "./FeatureProduct";




const Homebody = () => {

  const dispatch = useDispatch();

  //storing data of products
   const serveproduct = useSelector(state => state.serveProduct);
   const {loading,error,product}=serveproduct;
  

   //storing data of featureproduct

   const featureProduct = useSelector( state=> state.featureProd)

  

 useEffect(()=>{
    dispatch(listProducts());
    dispatch(featureProducts());
   
    
  }
  
 ,[dispatch]);


//  mobile view hamburger on/off switch
  const [popup,setPopUp]=useState(true);

    // load less or more products

const [more, setMore] = useState(true);
const [noofProducts,setnoofProducts]=useState(8);
const load = product.slice(0,noofProducts);
const loadMore = () =>{
  if(more){
  setnoofProducts(noofProducts + noofProducts)
  setMore(!more)
  }
  else{
    setnoofProducts(noofProducts-noofProducts/2)
    setMore(!more)
  
}

}

//search filter

// const [searchTerm,setSearchTerm] = useState("");

// const search = product.filter((item)=>{
//   if(searchTerm === ""){
//     return item
//   }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
//     return item
//   }
// })



//Category filter

const [category,setCategory] = useState(product);
const filterCategory = (catItems)=>{
  const result=product.filter((currData)=>{return currData.Category===catItems})

 setCategory(result)
 console.log(result)
}


// const handleSelecteCategory=({event,value}) =>!value?null:setSelectedCategory(value)
// const filter = ()=>{
//   const items = product;
//   if(selectedcategory){
//      let updateItems = items.filter(i=>i.category === selectedcategory) 
  
//   }
// }

// useEffect(()=>{
//   filter()
// },)

// //multi-Carousal

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

//ajax request featured product

  // const [featureprod,setFeatureProd]=useState("")
   
  // useEffect(()=>{
  //   const fetchfeatureprod= async()=>{
  //     const data = await axios.get("/api/featureProduct")
  //     setFeatureProd(data)
  //   }
  //   fetchfeatureprod()
  // },[])


 
  return (
   
    <>
     {
      loading ? <h2><Loader/></h2> : error ? <Errormsg variant="danger">{error}</Errormsg>:
   <div>
    <Navbar className="header"/>
    <div className="mains">
      
      <div className="heading">
      <h1>iSHOP</h1>
     
     <GiHamburgerMenu onClick={()=>{setPopUp(true)}} className="hamburger"/>
      </div>
     
      {
        popup ? <Hamburger close={setPopUp}/>:null
        }
      <img
        src="./images/miscellaneous/oppoBanner.png"
        alt="firstBannerImage"
        className="firstImage"
      />
      <img
        src="./images/miscellaneous/mobile_c1.png"
        alt="secondImage"
        className="secondImage"
      />
      <div className="bestSeller">
        <h3>BEST SELLER</h3>
        <div>
          <ul className="bestSellerUl" >
            <li onClick={()=>setCategory(product)}>All</li>
            <li  onClick={()=>filterCategory("mac")}>Mac</li>
            <li onClick={()=>filterCategory("iphone")}>iPhone</li>
            <li onClick={()=>filterCategory("ipad")}>iPad</li>
            <li onClick={()=>filterCategory("ipod")}>ipod</li>
            <li onClick={()=>filterCategory("accessories")}>Accessories</li>
          </ul>
          <select className="bestSellerSe">
            <option onClick={()=>setCategory(product)}>All</option>
            <option onClick={()=>filterCategory("mac")}>Mac</option>
            <option onClick={()=>filterCategory("iphone")}>iPhone</option>
            <option onClick={()=>filterCategory("ipad")}>iPad</option>
            <option onClick={()=>filterCategory("ipod")}>iPod</option>
            <option onClick={()=>filterCategory("accessories")}>Accessories</option>
          </select>
        </div>
    
        <div className="row homecards">


          {
          
          category && load.map((Elem, i) => (

       <div className="col-md-3 col-sm-12" key={i} >
               
                <div className="item" >  
                  <Items item={Elem}/>
                </div>
              </div>
            )
          )}
          </div>
        
      </div>

      <div>
        <p onClick={() => {loadMore()}} className="loadmore">
           {more ? "LOAD MORE": " LOADLESS"}
        </p>

        <div className="banner">
          <img src="./images/miscellaneous/oppo.png" alt="phonebanner"/>
          <h2 className="bannerFont">iPHONE 6 Plus</h2>
          <h6>Performance and design. Taken right to the Edge.</h6>
          <Link to="/products/:id" style={{textDecoration:"none",color:"black"}}><p>SHOP NOW</p></Link>
        </div>
      </div>

    
 <div className="carousel">


    </div>

      <div className="shippingBlock">
        <div className="shipping">
          <FaShippingFast />
          <h5>FREE SHIPPING</h5>
          <p className="loremfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit qui in ea
            voluptate velit esse illum qui dolorem eum fugiat quo voluptas nulla
            pariatur.
          </p>
        </div>
        <div className="shipping">
          <RiRefund2Line />
          <h5>100% REFUND</h5>
          <p className="loremfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit qui in ea
            voluptate velit esse illum qui dolorem eum fugiat quo voluptas nulla
            pariatur.
          </p>
        </div>
        <div className="shipping">
          <MdSupportAgent />
          <h5>SUPPORT 24/7</h5>
          <p className="loremfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit qui in ea
            voluptate velit esse illum qui dolorem eum fugiat quo voluptas nulla
            pariature.
          </p>
        </div>
      </div>

      <div className="featuredProducts">
        <h3>FEATURED PRODUCTS</h3>
        {/* carousel */}
        
  
    {/* {
       featuredProductsfp.map((fp,i)=>(
       
        <div><FeatureProduct/> </div>
        
       ))
    } */}

  
<FeatureProduct featuredProducts={featureProduct} />
     
      </div>
     
      </div>

      </div>
}
</>
 )
};

export default Homebody;
