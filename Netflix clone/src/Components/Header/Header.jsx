import React, { useEffect, useState } from "react";
import "./header.css";
import Netflix_logo from "../../assets/Images/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [isHide, setIsHide] = useState(false);
  //   A state variable isHide is declared using the useState hook and initialized to false.
  // isHide will be used to determine whether the header should be hidden or not.
  // setIsHide is the function used to update the state
  useEffect(() => {
    //     This hook is used to run side effects, such as setting up an IntersectionObserver.
    // It runs once after the initial render because it has an empty dependency array ([]), meaning it will only execute when the component mounts.
    // const target = document.querySelector('.element-to-observe');
    const header = document.querySelector(".header");
    const banner = document.querySelector(".banner");
    console.log(banner);
    //     document.querySelector is used to select two DOM elements:
    // The element with the class .header (likely the header of the page).
    // The element with the class .banner (probably an introductory banner).
    // These elements will be observed or manipulated in the upcoming code
    const oprCallback = function (entries) {
      console.log(entries);
      const [entry] = entries;
      console.log(entry.isIntersecting);
      setIsHide(() => !entry.isIntersecting);
    };
    //     This is the callback function that gets executed whenever the intersection status of the observed element (.banner) changes (i.e., whether the banner is in or out of view).
    // entries is an array of intersection observer entries, but only the first entry is destructured with const [entry] = entries;.
    // entry.isIntersecting indicates whether the element is currently intersecting (visible within the viewport).
    // setIsHide(() => !entry.isIntersecting):
    // This line updates the isHide state. If the banner is not intersecting (i.e., no longer in view), isHide is set to true, hiding the header. If the banner is intersecting (visible), isHide is set to false.
    const option = {
      root: null,
      // rootMargin: '0px',
      threshold: 0.5,
    };
    const observe = new IntersectionObserver(oprCallback, option);
    observe.observe(banner);
    //     Options (option):
    // root: null: This means the root is the browser viewport.
    // threshold: 0.5: This specifies that the callback will be triggered when 50% of the banner is visible in the viewport.
    // IntersectionObserver (observe):
    // A new IntersectionObserver instance is created with oprCallback as the callback function and option as its configuration.
    // The observe.observe(banner) line starts observing the banner element to detect when it enters or exits the viewport
  }, []);

  return (
    <div className="header">
      <div className={`header-container ${isHide ? "sticky" : ""}`}>
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
