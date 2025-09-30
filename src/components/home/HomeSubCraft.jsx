import React, { useState } from "react";
import Icon from '../../assets/images/subcraft.png';
import CompanyLogo from '../../assets/images/sublogo.png';
import { FiMenu } from "react-icons/fi";
import SideNav from "./SideNav";
const HomeSubCraft = () => {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="HomeSubCraft">
      <div className="container">
        <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>

        <div className="MenuIcon" onClick={() => setIsOpen(true)}>
                 <FiMenu />
               </div>

        <div className="HomeCraftMain">
          <div className="CraftIcon">
            <div className="HomeCraftIcon">
              <img src={Icon} alt="Craft Icon" />
            </div>
          </div>

          <div className="Links">
            <ul>
              <li className="active HomeCraft">Craft</li>
              <li>Colors</li>
              <li>Blend</li>
              <li>Identity</li>
              <li>Adaptations</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default HomeSubCraft;
