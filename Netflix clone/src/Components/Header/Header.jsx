import React from "react";
import "./header.css";
import Netflix_logo from "../../assets/Images/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="right">
          <ul>
            <li>
              <img src={Netflix_logo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home </li>
            <li>TV show</li>
            <li>Movies</li>
            <li>Leatest</li>
            <li>My List</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="left">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
