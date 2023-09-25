import React, { useEffect, useState } from "react";
import { useThemeContext } from "../context/ThemeContext";

function AnimationDiv() {
  const { theme } = useThemeContext();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 2200);
  }, []);

  useEffect(() => {
    setShow(true);
    setTimeout(() => setShow(false), 2200);
  }, [theme]);

  if (!show) {
    return;
  }

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
