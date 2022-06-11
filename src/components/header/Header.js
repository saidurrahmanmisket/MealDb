import React from "react";
import './Header.css'
import Ani from './Hamburger.gif'
import Logo from './hungryLogo.png'



const header = () => {
  return (
    <div>
      <div className="headerMain">
        <div className="navBar">
          <div className="logo">
            <div className="heroLogo">
              <img alt="heroImage" src={Logo} style={{ maxWidth: "5rem" }} />
            </div>
          </div>
          <div className="menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="join">
            {/* This is icon section  */}
            {/* <i className="fa-brands fa-facebook"></i> */}
          </div>
        </div>
        <div className="heroSection">
          <div className="leftHero">
            <h1>Hungry Naki</h1>
          </div>
          <div className="rightHero">
            <div className="rightHeroImg">
              <img alt="heroImage" src={Ani} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
