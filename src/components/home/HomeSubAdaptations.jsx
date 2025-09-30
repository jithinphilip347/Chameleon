// import React, { useState } from "react";
import CompanyLogo from '../../assets/images/sublogo.png';
// import { FiMenu } from "react-icons/fi";
// import SideNav from "./SideNav";

const HomeSubAdaptations = () => {
// const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='HomeSubAdaptations'>
      <div className="container">
        {/* <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div> */}
        
        {/* <div className="MenuIcon" onClick={() => setIsOpen(true)}>
                  <FiMenu />
                </div> */}
        <div className="HomeCraftMain">
          <div className='HomeAdaptationTitle'>
            <h2>
              <span className="color1">BRANDING & IDENTITY</span>
              <span className="color2">ADVERTISING & CAMPAIGNS</span>
            <span className="color3">ART DIRECTION & CREATIVE DESIGN</span>
            <span className="color4">PACKAGING & PRODUCT DESIGN</span>
            <span className="color5">ILLUSTRATION & RETOUCHING</span>
            <span className="color6">MULTIDISCIPLINARY & SOLUTIONS</span>

            </h2>
          </div>

          {/* <div className="Links">
            <ul>
              <li>Craft</li>
              <li >Colors</li>
              <li>Blend</li>
              <li>Identity</li>
              <li className="active">Adaptations</li>
              <li>Connect</li>
            </ul>
          </div> */}
        </div>
       {/* <SideNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </div>
    </div>
  );
}

export default HomeSubAdaptations;
