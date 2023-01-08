//Page Imports
import "./FooterStyles.css";

//Other imports
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                </div>
                <div>
                    <p>
                        Greensboro
                    </p>
                    <p>
                        North Carolina
                    </p>
                </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        +1 (510) 401 - 4096
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                        howard.t.gill.3@gmail.com
                    </h4>
                </div>
                </div>
                <div className="right">
                <h4>
                    About the Developer
                </h4>
                <p>
                malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel
                </p>
                    <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer