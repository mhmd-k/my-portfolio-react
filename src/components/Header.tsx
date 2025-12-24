import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

function Header() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const handleClick = () => setOpen(!open);

  return (
    <>
      <header key={theme}>
        <div className="container">
          <div className="logo animated">
            <a href="#home" title="logo">
              <img
                src={theme === "dark" ? "/logo.webp" : "/dark-logo.webp"}
                alt="logo"
              />
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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
