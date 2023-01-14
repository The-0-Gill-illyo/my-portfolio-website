//Page Imports
import "./HeroImgStyles.css";
import TheoHomePortfilioPic from "../assests/TheoHomePortfilioPic.jpg";

//Other Imports
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    <img className="intro-img" src={TheoHomePortfilioPic} alt="HomeImage" />
    </div>
    <div className="content">
      <p>Hi I'm Theo.</p>
      <h1>A Freelance Web Developer, Specializing in React!</h1>
      <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  </div>;
  
};

export default HeroImg;