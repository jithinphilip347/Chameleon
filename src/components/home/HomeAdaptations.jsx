import React, { useState } from "react";
import CompanyLogo from '../../assets/images/logo.png';
import { FiMenu } from "react-icons/fi";
import SideNav from "./SideNav";
const HomeAdaptations = () => {
 const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div id='HomeAdaptations'>
      <div className="container">
        <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>
         <div className="MenuIcon" onClick={() => setIsOpen(true)}>
                  <FiMenu />
                </div>
        <div className="HomeCraftMain">
          <div className='HomeAdaptationTitle'>
            <h2>
              <span className="white">If You <br /> Lick It, <br/></span>
              <span className="text">You'll <br/> Go Crazy.</span>
            </h2>
          </div>

          <div className="Links">
            <ul>
              <li>Craft</li>
              <li >Colors</li>
              <li>Blend</li>
              <li>Identity</li>
              <li className="active">Adaptations</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default HomeAdaptations;
