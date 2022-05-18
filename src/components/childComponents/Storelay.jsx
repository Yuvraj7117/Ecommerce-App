import React from 'react';
import './storelay.css'

const Storelay = () => {
  return (
    <div className='layoutdiv'>
      <div className='accessories'>
        <h3 style={{color:"grey"}}>Accessories</h3>
        
          <ul className='pop_ul'>
              <li>AirPort & Wireless</li>
              <li>AppleCare</li>
              <li>Bags,Shells & Sleeves</li>
              <li>Business & Security</li>
              <li>Cables & Docks</li>
              <li>Cameras & Videos</li>
              <li>Car & Travel</li>
              <li>Cases & Films</li>
          </ul>
        
      </div>

      <div className='category1'>
        <h3 style={{color:"grey"}}>Category</h3>
        <ul className='pop_ul'>
            <li>Charging Devices</li>
            <li>Connected Home</li>
            <li>Device Care</li>
            <li>Display & Graphic</li>
            <li>Fitness & Sport</li>
            <li>Headphone</li>
            <li>Health Kit</li>

        </ul >

      </div>

      <div className='category2'>
        <h3 style={{color:"grey"}}>Category</h3>
      <ul className='pop_ul'>
             <li>Mice & Keyboards</li>
             <li>Music Creation</li>
             <li>Networking & Server</li>
         </ul>
      </div>
    </div>
  )
}

export default Storelay;