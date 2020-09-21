import React, { Component } from "react";
import "./header.css";
import img from "../../../images/1.jpg";
class Header extends Component {
  render() {
    return (
      <header style={{position: `relative`}}>
        <div className="header_outer">
          <div className="header_inner">
            <div id="site-logo" class="clr has-responsive-logo">
              <div id="site-logo-inner" class="clr">
                <a href="http://uxcapital.asia/" class="custom-logo-link">
                  <img src={img} class="custom-logo" alt="ux-capital.com" />
                </a>
                <a href="http://uxcapital.asia/" class="responsive-logo-link">
                  <img src={img} class="responsive-logo" alt="" />
                </a>
              </div>
            </div>
            <div className="icons">
              <div className="icons_inner">
                <ul>
                  <li className="icon">
                    <a href="" className="facebook">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <a href="" className="twitter">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="icon">
                    <a href="" className="youtube">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav_outer">
              <div className="nav_inner">
                <ul className="nav">
                  <li className="header_link">
                    <a href="">
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="header_link">
                    <a href="">
                      <span>Construction</span>
                    </a>
                  </li>
                  <li className="header_link">
                    <a href="">
                      <span>Oil & Gas</span>
                    </a>
                  </li>
                  <li className="header_link">
                    <a href="">
                      <span>Medical & Aesthetical</span>
                    </a>
                  </li>
                  <li className="header_link">
                    <a href="">
                      <span>Commercial</span>
                    </a>
                  </li>
                  <li className="header_link">
                    <a href="">
                      <span>Business</span>
                    </a>
                  </li>
                  <li className="header_link menu_item">
                    <a href="">
                      <span>Evaluation & Assessment </span>
                      <span class="nav-arrow fa fa-angle-down"></span>
                    </a>
                    <ul className="dropdown_menu">
                      <li className="dropdown_item">
                        <a href="">Contact</a>
                      </li>
                      <li className="dropdown_item">
                        <a href="">About</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
