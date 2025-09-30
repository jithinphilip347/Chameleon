import React, { useState, useEffect } from "react";
import CompanyLogo from "../../assets/images/logo.png";
import SubLogo from "../../assets/images/sublogo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <div id="Nav" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="NavMain">
          <div className="CompanyLogo">
            <img src={scrolled ? SubLogo : CompanyLogo} alt="Company Logo" />
          </div>

          <div className="MenuIcon" onClick={() => setIsOpen(true)}>
            <FiMenu />
          </div>

          <div className="Links">
            <ul>
              <li onClick={() => scrollToSection("HomeCraft")}>Craft</li>
              <li onClick={() => scrollToSection("HomeColors")}>Colors</li>
              <li onClick={() => scrollToSection("HomeBlend")}>Blend</li>
              <li onClick={() => scrollToSection("HomeIdentity")}>Identity</li>
              <li onClick={() => scrollToSection("HomeAdaptations")}>Adaptations</li>
              <li onClick={() => scrollToSection("HomeConnect")}>Connect</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`SideNav ${isOpen ? "open" : ""}`}>
        <div className="SideNavHeader">
          <FiX className="CloseIcon" onClick={() => setIsOpen(false)} />
        </div>
        <ul>
          <li onClick={() => scrollToSection("HomeCraft")}>Craft</li>
          <li onClick={() => scrollToSection("HomeColors")}>Colors</li>
          <li onClick={() => scrollToSection("HomeBlend")}>Blend</li>
          <li onClick={() => scrollToSection("HomeIdentity")}>Identity</li>
          <li onClick={() => scrollToSection("HomeAdaptations")}>Adaptations</li>
          <li onClick={() => scrollToSection("HomeConnect")}>Connect</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
