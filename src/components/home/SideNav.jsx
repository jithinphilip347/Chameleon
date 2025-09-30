import React from "react";
import { FiX } from "react-icons/fi";

const SideNav = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`SideNav ${isOpen ? "open" : ""}`}>
      <div className="SideNavHeader">
        <FiX className="CloseIcon" onClick={() => setIsOpen(false)} />
      </div>

      <ul>
        <li className="active">Craft</li>
        <li>Colors</li>
        <li>Blend</li>
        <li>Identity</li>
        <li>Adaptations</li>
        <li>Connect</li>
      </ul>
    </div>
  );
};

export default SideNav;
