import React from 'react';

const ThirdSectionGrid = () => {
  return (
    <div className="third-section-grid">
      <div className="illstrations ills-1">
        <div className="illstrations-img" style={{ background: '#e7e197' }}>
          <img
            className="three-d-img animating-three-d-img"
            style={{ margin: '-22px 0px 0px -9px' }}
            src="https://dmk9je7eclmvw.cloudfront.net/assets/img/3e38landing_page_ills_1.png"
            alt="Brand Collabs"
          />
        </div>
        <div className="illstrations-title">
          <span className="more-gradient">more</span> paid brand collabs
        </div>
      </div>

      <div className="illstrations ills-2">
        <div className="illstrations-img" style={{ background: '#5e72ae' }}>
          <img
            className="three-d-img animating-three-d-img"
            style={{ margin: '-26px 0px 0px -14px' }}
            src="https://dmk9je7eclmvw.cloudfront.net/assets/img/5a31landing_page_ills_2.png"
            alt="Celebrity Collabs"
          />
        </div>
        <div className="illstrations-title">
          <span className="more-gradient">more</span> celebrity collabs
        </div>
      </div>

      <div className="illstrations ills-3">
        <div className="illstrations-img" style={{ background: '#afe4fd' }}>
          <img
            className="three-d-img animating-three-d-img"
            style={{ margin: '-26px 0px 0px -62px' }}
            src="https://dmk9je7eclmvw.cloudfront.net/assets/img/6b10landing_page_ills_3.png"
            alt="Refer Friends"
          />
        </div>
        <div className="illstrations-title">
          refer friends for <span className="more-gradient">more</span> returns
        </div>
      </div>

      <div className="illstrations ills-4">
        <div className="illstrations-img" style={{ background: '#f4bea5' }}>
          <img
            className="three-d-img animating-three-d-img"
            style={{ margin: '-10px 0px 0px -11px' }}
            src="https://dmk9je7eclmvw.cloudfront.net/assets/img/6e73landing_page_ills_4.png"
            alt="Launch Your Own Brand"
          />
        </div>
        <div className="illstrations-title">
          launch your own brand & <span className="more-gradient">more</span>
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionGrid;
