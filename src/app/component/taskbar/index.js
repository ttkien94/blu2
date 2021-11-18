import React from "react";
import "./styles/styles.scss";
import { Link } from "react-router-dom";
function taskbar() {
  return (
    <div className="taskbar">
      <div className="avatar">
        <Link to="/">
          <img src="img/logo.png" className="img-responsive" alt="Image" />
        </Link>
      </div>
      <ul>
        <li className="liabout">
          {/* <a href=""> */}
          <div className="taskbaricon">
            <i className="fa fa-address-card"></i>
            <i className="fa fa-address-card"></i>
          </div>
          <span className="about">About</span>
          {/* </a> */}
        </li>
        <li className="liabout">
          <Link to="/blu2/blog">
            <div className="taskbaricon">
              <i className="fa fa-briefcase"></i>
              <i className="fa fa-briefcase"></i>
            </div>
            <span className="portfolio">Blog</span>
          </Link>
        </li>
        <li className="liabout">
          <a href="">
            <div className="taskbaricon">
              <i className="fa fa-phone"></i>
              <i className="fa fa-phone"></i>
            </div>
            <span className="contact">Contact</span>
          </a>
        </li>
      </ul>
      <div className="followme">
        <p>FOLLOWE ME</p>
      </div>
      <div>
        <ul className="socialmedia">
          <li>
            <i className="fa fa-facebook "></i>
            <i className="fa fa-facebook "></i>
          </li>
          <li>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-instagram"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default taskbar;
