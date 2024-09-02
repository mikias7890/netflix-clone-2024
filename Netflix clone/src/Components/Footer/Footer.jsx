import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container-one">
      <div className="footer-container-two">
        <div className="footer-icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="footer-data ">
          <div>
            <ul>
              <li>audio description </li>
              <li>investor relation</li>
              <li>legal notice</li>
              <li>advert choice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>help center</li>
              <li>jobs</li>
              <li>cookie preferance</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>gift card</li>
              <li>terms of use</li>
              <li>corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>media center</li>
              <li>privacy</li>
              <li>contact</li>
            </ul>
          </div>
          <div className="service">
            <p>service code</p>
          </div>
          <div className="copy">&copy;2024 Netflix</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
