
import { Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import './storebody.css';
import { BsGrid3X3GapFill,BsList,BsFillCircleFill } from 'react-icons/bs';
import { Slider } from '@mui/material';
// import Products from "../static/products.json";
import { Container } from 'react-bootstrap';
import Rating from './childComponents/Rating';
import axios from 'axios';
import Paginate from 'react-paginate' 
// import {makeStyles} from '@material-ui/core/styles';
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import {MdFavorite} from "react-icons/md"
import {GiShoppingCart,GiHamburgerMenu} from 'react-icons/gi';
import Hamburger from "./childComponents/Hamburger";

// const useStyles=makeStyles({
//   root:{
//     width:"15vw",
//     justifyContent:"space-between",
//     marginLeft:"22vw"
  
//   },
//   togglebutton:{
//     backgroundColor:"#fff",
//     color:"#000"
//   },
//   '&.MuiToggleButtonGroup-groupHorizontal:not(:first-child)':{
//     border:'1px solid rgba (216,143,143,0.12 ) '
//   },
//   '&.Mui-selected':{
//     background:"#fff",
//     color:"#000",
//   },
//   '&.MuiToggleButton-root':{
//   '&:hover':{
//     background:'#000',
//     color:'#fff'
//   }
// }   

// }
// );


const Storebody = () => {
  // const classes = useStyles()

  const [serveProduct,setServeProduct]=useState([])

  // AJAX request
  useEffect(()=>{

    const fetchProduct = async()=>{
      const {data} = await axios.get('https://ecommerce-app-one.herokuapp.com/api/products/')
      setServeProduct(data);
    }
    fetchProduct()
   },[]);


const [value,setValue] = React.useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
}

//  mobile view hamburger on/off switch
const [popup,setPopUp]=useState(false);

//pagination
 const [ pageNumber,setPageNumber] = useState(0);
 const productsPerPage = 9;
 const pageVisited = pageNumber * productsPerPage

 const displayProducts = serveProduct.slice(pageVisited, pageVisited + productsPerPage)
const pageCount = Math.ceil(serveProduct.length/productsPerPage);

const changePage = ({selected}) =>{
  setPageNumber(selected)
}

//searchby Name

// const [searchTerm,setSearchTerm] = useState("");

// const search = serveProduct.filter((item)=>{
//   if(searchTerm === ""){
//     return item
//   }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
//     return item
//   }
// })

//price range

// const [price,setPrice]=useState(0)
// const priceRange = serveProduct.filter((currItem)=>{
//   if(price == 0){
//   return currItem;
//   }else if(price <= value){
//     return currItem.price.value;
//   } 
// }) 


  return (
    <>
    <Navbar />
    <div className='headingg'>
    <h1 >iShop</h1>

    <GiHamburgerMenu onClick={()=>{setPopUp(true)}} className="HamburgerMenu"/>
    {
        popup ? <Hamburger close={setPopUp}/>:null
        }
    </div>
   
    <div className='main'>
        <h5>Store / Accessories </h5>

    <div className='firstdiv'>

        <div className='accessoriesss'>
            <h6>ACCESSORIES</h6>
            <ul style={{listStyle:"none", lineHeight:'45px'}}>
                <li>Apple Car <span style={{marginLeft:"8vw",color:"rgb(270, 129, 469)" , }}>2</span></li>
                <li>Air port & wireless <span style={{marginLeft:"3vw",color:"rgb(270, 129, 469)"}}>48</span></li>
                <li>Cables & Docks <span style={{marginLeft:"5vw",color:"rgb(270, 129, 469)"}}>14</span></li>
                <li>Cases & Films <span style={{marginLeft:"6vw",color:"rgb(270, 129, 469)"}}>15</span></li>
                <li>Charging Devices <span style={{marginLeft:"4vw",color:"rgb(270, 129, 469)"}}>23</span></li>
                <li>Connected home <span style={{marginLeft:"4.5vw",color:"rgb(270, 129, 469)"}}>1</span></li>
                <li>Headphones <span style={{marginLeft:"6vw",color:"rgb(270, 129, 469)"}}>95</span></li>

            </ul>

        </div>
        <div className='bannerimage'>
          <div className='bannerfonts'>
          <h2 style={{fontWeight:"lighter" , fontFamily:"sans-serif" , fontSize:"40px"}}>iPhone 8</h2>
          <h6 style={{fontWeight:"lighter" , width:"20rem" , marginLeft:"5vw"}} >Performance and design. Taken right to the Edge.</h6>
          <p style={{fontWeight:"lighter" , borderBottom:"3px solid" , width:"7rem" , marginLeft:"5vw" }} >SHOP NOW</p>
          </div>
          <img src="./images/miscellaneous/oppo.png" alt='banner2'/>
        </div>
      </div>
    <div className='secondmaindiv'>
      <div className='seconddiv'>

        <div className='prices'>
          <h6>PRICES</h6>
          <div  className='rangeslider'>
            <div  className='range'>
            <p>Range:</p>
            <p>$<span>{value}</span> - <span>$</span>2599</p>
            </div>
            <Slider value = {value}
            onChange={handleChange}
            max={2599}
            min={0}
            step={1}
            valueLabelDisplay="auto"
            />
        
          </div>
        </div>

        {/* Color */}
        <div className='color'>
          <h6>COLOR</h6>
          <div className='circles'>
       <BsFillCircleFill style={{color:"red"}}/>
       <BsFillCircleFill style={{color:"Blue"}}/>
       <BsFillCircleFill style={{color:"Black"}}/>
       <BsFillCircleFill style={{color:"yellow"}}/>
       <BsFillCircleFill style={{color:"darkviolet"}}/>
       <BsFillCircleFill style={{color:"pink"}}/>
       
          </div>   
        </div>

      {/* BRAND   */}
        <div className='brand'>
            <h6>BRAND</h6>
            <ul>
              <li style={{listStyle:"none"}}>Apple<span style={{marginLeft:"150px"}}>99</span></li>
              <li style={{listStyle:"none"}}>LG <span style={{marginLeft:"172px"}}>99</span></li>
              <li style={{listStyle:"none"}}>Samsung <span style={{marginLeft:"115px"}}>99</span></li>
              <li style={{listStyle:"none"}}>Siements <span style={{marginLeft:"115px"}}>99</span></li>
         
            </ul>
        </div>
        <div className='more'>
        <p >MORE</p>
        </div>
        
        </div>
    {/* Category-Bar */}
    <div className='thirddiv'>
      <div className='productshead'>
        <div className='productshead1'>
          <p><span>$13</span>items</p>
          <p>Sort By</p>
         
          <Dropdown >
            <Dropdown.Toggle>
              Name
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>iPhone</Dropdown.Item>
              <Dropdown.Item>Apple Watch</Dropdown.Item>
              <Dropdown.Item>Accessories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle>
             Show
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>10</Dropdown.Item>
              <Dropdown.Item>20</Dropdown.Item>
              <Dropdown.Item>30</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      
        </div>
        <div className='gridlisticons'>
          <BsGrid3X3GapFill />
          <BsList style={{marginLeft:"10px"}}/>
        </div>
      </div>


      {/* Products */}
      <Container>
   
      <div className='row'>  
     { 

         displayProducts.map((item,i)=>(

        <div className="col-md-4 col-sm-12"  key={i}>
          <div className="hovering">
           <MdFavorite className="fav"/>
           <Link to="store/cart" style={{textDecoration:"none" , color:"inherit"}}><GiShoppingCart className="cart"/></Link>
           </div>
        <Link to="/products/:_id" style={{textDecoration:"none",color:"black"}}>
        <div className="card"  style={{cursor:"pointer"}}>
          
        <img src={item.image} className="card-img-top image" alt={item.name} style={{marginLeft:"4vw"}}/>
        <div className="card-body">
          <h4>{item.name}</h4>
          <Rating  Rating={item.Ratings}/>
          <p>${item.price}<span className='pricecut'>${item.previousprice}</span></p>
        </div>
      </div>
      </Link>
    
      </div>
     
       ))
      
     }
  
  </div> 

   </Container>
                
      {/* Pagination */}
        <div className='paginations'>            
        

    <Paginate 
    pageCount={pageCount}
    onPageChange={changePage}
    previousLabel={null}
    nextLabel={null}
    className="pagination"
    activeClassName={"paginationActive"}
    />

        </div>

         
  
        </div>
    </div>

    </div>


    </>
  )
}

export default Storebody