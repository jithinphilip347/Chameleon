// import React, { useState } from "react";
// import Icon from "../../assets/images/identity.png";
import CompanyLogo from "../../assets/images/sublogo.png";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
// import { FiMenu } from "react-icons/fi";
// import SideNav from "./SideNav";

const HomeConnect = () => {
    // const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div id="HomeConnect">
      <div className="container">
        {/* <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div> */}
 {/* <div className="MenuIcon" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </div> */}
        <div className="HomeCraftMain">
          <div className="IdentityDesc">
            <h2>
              <span className="white">LET'S </span>
              <span className="text">CONNECT</span>
            </h2>
            <p className="IdentitySubDesc">
              Connecting with clients, strategists, and  <br/>  creatives who enjoy
              blending and  <br/>  transforming ideas with us.
            </p>
            <span className="IdentityAdress">
              Address: TC 82/117,HNRA 222, <br/> NELLILPALLIL LANE,PATTOOR,  <br/> 
               VANCHIYOOR, TRIVANDRUM 695035
            </span>     
             <div className="ContactInfo">
              <p>
                <MdOutlineMail className="icon" />
                <a href="mailto:marketing@chameleoncreation.com">
                  marketing@chameleoncreation.com
                </a>
              </p>
              <p>
                <FaPhoneAlt className="icon" />
                <a href="tel:+919995600079">+91 9995600079</a>
              </p>
            </div>
            <div className="SocialLinks">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                  {/* <a href="tel:9995600079" target="_blank" rel="noopener noreferrer">
                    <FaPhoneAlt />
                  </a> */}
                </div>
          </div>

          {/* <div className="Links">
            <ul>
              <li>Craft</li>
              <li>Colors</li>
              <li>Blend</li>
              <li>Identity</li>
              <li>Adaptations</li>
              <li className="active">Connect</li>
            </ul>
          </div> */}
        </div>
                {/* <SideNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}

      </div>
    </div>
  );
};

export default HomeConnect;
