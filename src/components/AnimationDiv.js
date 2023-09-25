import React from "react";
import { useThemeContext } from "../context/ThemeContext";

function AnimationDiv() {
  const { theme } = useThemeContext();

  return (
    <>
      <div key={theme} className="theme-animation">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default AnimationDiv;
