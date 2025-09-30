// import React, { useState } from "react";
import CompanyLogo from "../../assets/images/logo.png";
// import { FiMenu } from "react-icons/fi";
// import SideNav from "./SideNav";
const HomeSubIdentity = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="HomeSubIdentity">
      <div className="container">
        {/* <div className="CompanyLogo">
          <img src={CompanyLogo} alt="Company Logo" />
        </div> */}
   {/* <div className="MenuIcon" onClick={() => setIsOpen(true)}>
          <FiMenu />
        </div> */}
        <div className="HomeCraftMain">
          <div className="IdentityDesc">
            <p>
              At Chameleon, we believe in adaptation, transformation,  <br /> and color
              in creativity. For over 16 years, our team of passionate creative
              professionals <br />  has been shaping brands, campaigns, and experiences
              that stand out and evolve with the times.<br />  From branding and
              packaging to art direction and advertising, we combine vision,
              strategy,<br />  and hands-on craftsmanship to bring ideas to life. Our
              multidisciplinary team thrives on innovation,<br />  blending design,
              storytelling, and creativity to deliver work that's dynamic,
              memorable, and meaningful.
            </p>
            <p>
              {" "}
              We are not just S team; we are a living. evolving organism, <br />  like
              the chameleon adapting, changing, and thriving in every creative
              challenge.
            </p>
          </div>

          {/* <div className="Links">
            <ul>
              <li>Craft</li>
              <li>Colors</li>
              <li>Blend</li>
              <li className="active">Identity</li>
              <li>Adaptations</li>
              <li>Connect</li>
            </ul>
          </div> */}
        </div>
        {/* <SideNav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      </div>
    </div>
  );
};

export default HomeSubIdentity;
