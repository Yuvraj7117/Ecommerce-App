import React from "react";
import {FaFacebookF, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <>

    <div>
    <hr />
      <div className="ishopFooter">
        <div className="ishopdiv">
          <h3>iSHOP</h3>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standarddummy text
            ever.Since the 1500s. when an unknown printer{" "}
          </p>
        </div>

        <div className="followUs">
          <h4>Follow Us</h4>
          <p>
            Lorem ipsum is simply dummy text of the printing and typeseting
            industry. Lorem has been
          </p>
          <FaFacebookF
            className="facebook"
            style={{ color: "blue", fontSize: "20px" }}
          />
          <FaTwitter
            className="twitter"
            style={{
              color: "DodgerBlue",
              marginLeft: "20px",
              fontSize: "20px",
            }}
          />
        </div>
        <div className="contactUs">
          <h4>Contact Us</h4>
          <p>
            iSHOP: address @building 124.
            <br /> Call us now 0123-456-789.
            <br /> Email: Support@whatever.com
          </p>
        </div>
      </div>

      <div className="lastdiv"  >
        <hr />
        <div className="lastdivChild">
          <h4 >Information</h4>
          <ul style={{listStyle:"none"}}>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
          </ul>
        </div>
        <div className="lastdivChild">
          <h4 style={{marginLeft:"7vw"}}>Service</h4>
          <ul style={{listStyle:"none"}}>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
          </ul>
        </div>
        <div className="lastdivChild">
          <h4 style={{marginLeft:"7vw"}}>Extras</h4>
          <ul style={{listStyle:"none"}}>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
          </ul>
        </div>
        <div className="lastdivChild">
          <h4 >My Account</h4>
          <ul style={{listStyle:"none", marginLeft:"40px"}}>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
          </ul>
        </div>
        <div className="lastdivChild">
          <h4 >Useful Links</h4>
          <ul style={{listStyle:"none", marginLeft:"40px"}}>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
          </ul>
        </div>
        <div className="lastdivChild"  >
          <h4 >Our Offers</h4>
          <ul style={{listStyle:"none"}}>
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions </li>
          </ul>
        </div>
        </div>
      <div className="flex-container" style={{textAlign:"right", marginRight:"50px"}}>
    
          <img className="icon-" src="images/westernunionIcon.png " alt="westernCard" style={{width:"50px", marginTop:"4px"}}/>
    
    
          <img className="icon-" src="images/mastercardIcon.png " alt="masterCard" style={{width:"50px"}}/>
    
    
          <img className="icon-" src="images/paypalIcon.png " alt="paypalCard" style={{width:"60px",marginTop:"-5px"}}/>
    
    
          <img className="icon-" src="images/visaIcon.png " alt="visaCard" style={{width:"55px", marginTop:"6px"}}/>
    
      </div>
    </div>
    </>
  );
};

export default Footer;
