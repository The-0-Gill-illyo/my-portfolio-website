//Page Imports
import "./HeroImgStyles.css";
import HomeImage from "../assests/BlackManWomanDevelopers.jpg";

//Other Imports
import React from 'react'
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
    <img className="intro-img" src={HomeImage} alt="HomeImage" />
    </div>
    <div className="content">
      <p>Hi I'm Theo a freelance</p>
      <h1>Web Developer, specializing in React!</h1>
      <div>
        <Link to="/projects" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  </div>;
  
};

export default HeroImg;