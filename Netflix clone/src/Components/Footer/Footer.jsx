import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <>
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
                <li> Audio description </li>
                <li>Investor relation</li>
                <li>Legal notice</li>
                <li>Advert choice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help center</li>
                <li>Jobs</li>
                <li>Cookie preferance</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift card</li>
                <li>Terms of use</li>
                <li>Corporate information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media center</li>
                <li>Privacy</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="service">
          <p>service code</p>
        </div>
        <div className="copy">&copy;2024 Netflix</div>
      </div>
    </>
  );
}

export default Footer;
