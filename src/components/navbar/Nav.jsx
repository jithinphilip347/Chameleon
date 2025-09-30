import React from "react";
import CompanyLogo from "../../assets/images/logo.png";
import { FiMenu } from "react-icons/fi";

const Nav = ({ setIsOpen }) => {
  return (
    <div id="Nav">
      <div className="CompanyLogo">
        <img src={CompanyLogo} alt="Company Logo" />
      </div>

      <div className="MenuIcon" onClick={() => setIsOpen(true)}>
        <FiMenu />
      </div>

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
  );
};

export default Nav;
