import React from "react";
import "./Footer.css";

import { FaLinkedin, FaGithub, FaTwitterSquare, FaFacebookSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    // <div classNameName='footer_container'>
    //     <h2 classNameName='text-center'>Get in touch</h2>
    //     <p></p>
    //     <div classNameName='icons'>
    //     <div classNameName='icon-container'>
    //     <BsFacebook/>
    //     </div>
    //     <div classNameName='icon-container'>
    //     <BsGithub />
    //     </div>
    //     <div classNameName='icon-container'>
    //     <CiTwitter />
    //     </div>
    //     <div classNameName='icon-container'>
    //     <AiFillLinkedin />
    //     </div>
    //     </div>
    //     <p classNameName='text-center'>
    //     © All Right Reserved. Designed By Dianna
    //     </p>
    // </div>
    <div className="footer wow fadeIn">
      <div className="container-fluid">
        <div className="container">
          <div className="footer-info">
            <h2>Mbi Ayamba Dianna</h2>
            <h3>Molyko Buea</h3>
            <div className="footer-menu">
              <p>+237 6******84</p>
              <p>mbi**a@gmail</p>
            </div>
            <div className="footer-social">
              <a href="https://linkedin.com" target="blank">
                <FaLinkedin />{" "}
              </a>
              <a href="https://github.com" target="blank">
                <FaGithub />{" "}
              </a>
              <a href="https://facebook.com" target="blank">
                <FaFacebookSquare />{" "}
              </a>
              <a href="https://twitter.com" target="blank">
                <FaTwitterSquare />{" "}
              </a>
              <a href="https://youtube.com" target="blank">
                <FaYoutube />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="container copyright">
          <p>&copy; Your Site Name, All Right Reserved | Designed By Dianna</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
