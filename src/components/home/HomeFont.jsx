// import React, { useState } from "react";
// import CompanyLogo from "../../assets/images/logo.png";
import FontImg1 from "../../assets/images/fontimg-1.jpg";
import FontImg2 from "../../assets/images/fontimg-2.jpg";
import FontImg3 from "../../assets/images/fontimg-3.jpg";
import FontImg4 from "../../assets/images/fontimg-4.jpg";
import FontImg5 from "../../assets/images/fontimg-5.jpg";
import FontImg6 from "../../assets/images/fontimg-6.jpg";
// import { FiMenu } from "react-icons/fi";
// import SideNav from "./SideNav";

const HomeFont = () => {
    // const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div id="HomeFont">
      <div className="HomeFontGrid">
        <div className="FontBox"><img src={FontImg1} alt="Font 1" /></div>
        <div className="FontBox"><img src={FontImg2} alt="Font 2" /></div>
        <div className="FontBox"><img src={FontImg3} alt="Font 3" /></div>
        <div className="FontBox"><img src={FontImg4} alt="Font 4" /></div>
        <div className="FontBox"><img src={FontImg5} alt="Font 5" /></div>
        <div className="FontBox"><img src={FontImg6} alt="Font 6" /></div>
      </div>

      <div className="container">
        {/* <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div> */}
           {/* <div className="MenuIcon" onClick={() => setIsOpen(true)}>
                  <FiMenu />
                </div> */}

        <div className="HomeCraftMain">
          {/* <div className="Links">
            <ul>
              <li>Craft</li>
              <li>Colors</li>
              <li>Blend</li>
              <li>Identity</li>
              <li >Adaptations</li>
              <li>Connect</li>
            </ul>
          </div> */}
        </div>

                {/* <SideNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </div>
    </div>
  );
};

export default HomeFont;
