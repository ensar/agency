import { useRef } from "react";
import menuIcon from "../assets/icons/menu.svg";
import close from "../assets/icons/close.png";

const Navbar = () => {
  const menuref = useRef();

  const menuOpen = () => {
    menuref.current.classList.add("active");
  };

  const menuClose = () => {
    menuref.current.classList.remove("active");
  };
  return (
    <div className='navbarContainer'>
      <span className='logo'>DIGITAL AGENCY</span>
      <div className='menu' ref={menuref}>
        <span className='close' onClick={menuClose}>
          <img src={close} alt='hamburger menu' />
        </span>
        <ul>
          <li>
            <a href='#home'>home</a>
          </li>
          <li>
            <a href='#about'>about</a>
          </li>
          <li>
            <a href='#testimonials'>testimonials</a>
          </li>
          <li>
            <a href='#contact'>contact</a>
          </li>
        </ul>
      </div>
      <span className='menuIcon'>
        <img src={menuIcon} alt='hamburger menu' onClick={menuOpen} />
      </span>
    </div>
  );
};

export default Navbar;
