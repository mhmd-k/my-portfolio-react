import { BiSun, BiMoon } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";
import { useThemeContext } from "../context/ThemeContext";

function BigScreenWrapper() {
  const { theme, handleChangeTheme } = useThemeContext();

  return (
    <div key={theme}>
      <div className="social">
        <a href="https://github.com/mhmd-k" target="_blank" title="github">
          <LuGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-alkayyali-a94b30222/"
          target="_blank"
          title="linkedin"
        >
          <AiFillLinkedin />
        </a>
        <a href="mailto:mhmdk425@gmail.com" target="_blank" title="mail">
          <BsMailbox />
        </a>
        <a href="https://wa.me/+963937741680" target="_blank" title="whatsapp">
          <AiOutlineWhatsApp />
        </a>
      </div>
      <button
        id="dark-mode"
        className="animated"
        title={theme === "light" ? "dark-mode" : "light-mode"}
      >
        {theme === "light" ? (
          <BiMoon onClick={handleChangeTheme} />
        ) : (
          <BiSun onClick={handleChangeTheme} />
        )}
      </button>
    </div>
  );
}

export default BigScreenWrapper;
