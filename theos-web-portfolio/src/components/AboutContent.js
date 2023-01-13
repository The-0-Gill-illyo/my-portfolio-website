//Page Imports
import "./AboutContentStyles.css";
import ReactImage1 from "../assests/ReactImage1.jpg";
import ReactImage2 from "../assests/ReactImage2.jpg";

//Other Imports
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who is Theo?</h1>
        <p>I am Full-Stack Developer and aspiring self-taught Data Analysis, 
          who makes resposive React applications and websites!</p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={ReactImage1} className="img" alt="React Symbol" />
          </div>
          <div className="img-stack bottom">
            <img src={ReactImage2} className="img" alt="Black Developer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent