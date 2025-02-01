import React, { useState } from "react";
import Darklogo from "../assets/images/dark-logo-fococlipping-standard.png";
import lightLogo from "../assets/images/logo-fococlipping-standard.png";
import { useThemeContext } from "../context/ThemeContext";
import { BiSun, BiMoon } from "react-icons/bi";

function Header() {
  const [open, setOpen] = useState(false);
  const { theme, handleChangeTheme } = useThemeContext();

  const handleClick = () => setOpen(!open);

  const changeTheme = () => {
    handleClick();
    handleChangeTheme();
  };

  return (
    <>
      <header key={theme}>
        <div className="container">
          <div className="logo animated">
            <a href="#home" title="logo">
              <img src={theme === "dark" ? lightLogo : Darklogo} alt="logo" />
            </a>
          </div>
          <div className="nav-icon animated" onClick={handleClick}>
            <span className={open ? "clicked" : ""}></span>
            <span className={open ? "clicked" : ""}></span>
            <span className={open ? "clicked" : ""}></span>
          </div>
        </div>
      </header>
      <nav className={open ? "show" : ""}>
        <div className="container">
          <ul>
            <li onClick={handleClick}>
              <a href="#home">HOME</a>
            </li>
            <li onClick={handleClick}>
              <a href="#about">ABOUT ME</a>
            </li>
            <li onClick={handleClick}>
              <a href="#projects">PROJECTS</a>
            </li>
            <li onClick={handleClick}>
              <a href="#contact">CONTACT</a>
            </li>
            <li onClick={changeTheme}>
              <a href="#home">{theme === "dark" ? <BiSun /> : <BiMoon />}</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
