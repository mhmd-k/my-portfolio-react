import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "@/components/theme-provider";

const MobileThemeButton = () => {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="mobile-theme-btn z-1000"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <BiSun /> : <BiMoon />}
    </button>
  );
};

export default MobileThemeButton;
