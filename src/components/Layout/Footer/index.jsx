import React, { Component } from "react";
import "./footer.css";
import img from "../../../images/1.jpg"
class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer_inner">
            <div className="text_wrapper">
              <p style={{marginBottom: `20px`}}>
                <img style={{
                  maxWidth: `100%`,
                  height: `auto`,
                  width: `15%`
                }} src={img} alt=""/>
              </p>
              <p
                style={{
                  margin: "2px 0 8px",
                  color: "#708e9f",
                  textAlign: "center",
                }}
              >
                <a href="ux-capital.com">UX Capital</a> |{" "}
                <a href="#">josh@ux-capital.com</a>{" "}
              </p>
            </div>
            <div className="footer_links_outer">
              <ul>
                <li>
                  <a href="#" title="Twitter" target="_self">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Facebook" target="_self">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram" target="_self">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="GooglePlus" target="_self">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Pinterest" target="_self">
                    <i class="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="Youtube" target="_self">
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
