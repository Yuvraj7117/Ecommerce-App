import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import './featureProduct.css';
import {AiFillStar ,AiOutlineStar} from "react-icons/ai"



const FeatureProduct = () => {

    //multi-Carousal

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
   
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
     
    }
  };


  return (
    
    <>
    <Container>

    
    <Carousel 
              
              swipeable={false}
              draggable={true}
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={3000}
              keyBoardControl={false}
              customTransition="all .5"
              transitionDuration={4}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              className='carousel'
              arrows={true} 
              partialVisible={true}
              focusOnSelect={true}
              
              
              >
         
            
         <div className=' fp'>
          <img src="./images/miscellaneous/beatHeadphone.png" alt="tvtray"/>
          <div className='fpdetails'>
             <h4>Beats Solo 2 On Ear Headphones</h4>
             <p style={{color:"orange"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></p>
             <div className='price'>
             <p style={{color:"red"}}>$499</p>
             <p style={{textDecoration:"line-through"}}>$599</p>
             </div>
          </div>
        </div>
        <div className=' fp'>
          <img src="./images/miscellaneous/tvTray.jpg" alt="tvtray"/>
          <div className='fpdetails'>
             <h4>H-Squared tvTray</h4>
             <p style={{color:"orange"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></p>
             <div className='price'>
             <p style={{color:"red"}}>$499</p>
             <p style={{textDecoration:"line-through"}}>$599</p>
             </div>
             
          </div>
        </div>
        <div className=' fp'>
          <img src="./images/miscellaneous/rainGauge.jpg" alt="tvtray"/>
          <div className='fpdetails'>
            <h4>Netatmo Rain Gauge</h4>
            <p style={{color:"orange"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></p>
             <div className='price'>
             <p style={{color:"red"}}>$499</p>
             <p style={{textDecoration:"line-through"}}>$599</p>
             </div>
          </div>
        </div>

    </Carousel>
    </Container>
    </>
  )
}

export default FeatureProduct