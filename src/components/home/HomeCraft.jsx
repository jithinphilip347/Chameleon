import React, { useState } from "react";
import Icon from "../../assets/images/logo1.png";
import CompanyLogo from "../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";
import SideNav from "./SideNav";

const HomeCraft = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="HomeCraft">
      <div className="container">
        <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div>


        <div className="MenuIcon" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </div>

        <div className="HomeCraftMain">
          {/* Center Icon */}
          <div className="CraftIcon">
            <div className="HomeCraftIcon">
              <img src={Icon} alt="Craft Icon" />
            </div>
          </div>

          {/* Links (desktop only) */}
          <div className="Links">
            <ul>
              <li className="active">Craft</li>
              <li>Colors</li>
              <li>Blend</li>
              <li>Identity</li>
              <li>Adaptations</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>

        {/* SideNav */}
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default HomeCraft;
