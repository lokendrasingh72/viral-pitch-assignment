import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Virlpitchlogo } from "./IconImports";


const HeaderComponent = () => {

  const [click, setClick] = useState(false);


  
  const handleClick = () => {
    setClick(!click);
  };
  return (

    <>
      <div className="header_component">
        <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          <img src={Virlpitchlogo} alt="logo" />
              </Link>
        </div>

        <div>
        <p className="track_order">
              <Link to="home" smooth={true} duration={500}>
                Track your order
              </Link>
            </p>
        </div>

  
      </div>
    </>
  );
};

export default HeaderComponent;
