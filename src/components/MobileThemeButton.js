import { BiMoon, BiSun } from "react-icons/bi";
import { useThemeContext } from "../context/ThemeContext";

const MobileThemeButton = () => {
  const { theme, handleChangeTheme } = useThemeContext();

  return (
    <button className="mobile-theme-btn" onClick={handleChangeTheme}>
      {theme === "dark" ? <BiSun /> : <BiMoon />}
    </button>
  );
};

export default MobileThemeButton;
