import React from "react";
import "./nav.css";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { LuHeartHandshake } from "react-icons/lu";
const Navbar = () => {
  return (
    <nav className="nav">
      <section className="nav-bar">
        <div className="flex">
          <div className="icon">
            <a href="#header">
              <BsHouseDoor className="react-icon" />
            </a>
          </div>

          <div className="icon">
          <a href="#about">
            <AiOutlineUser className="react-icon" />
          </a>
          </div>
          <div className="icon">
            <BiBook className="react-icon" />
          </div>
          <div className="icon">
            <LuHeartHandshake className="react-icon" />
          </div>
          <div className="icon">
            <BiMessageSquareDetail className="react-icon" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
