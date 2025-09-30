import React from 'react';
import Banner from '../../assets/images/banner.png';

const HomeBanner = () => {
  return (
    <div
      id="HomeBanner"
      style={{ backgroundImage: `url(${Banner})` }}>
      <div className="container">
        <div className="HomeBannerTitle">
          <p>Adapting</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
