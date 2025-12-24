import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

function AnimationDiv() {
  const { theme } = useTheme();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 2200);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
