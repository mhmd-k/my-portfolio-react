import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import BigScreenWrapper from "./components/BigScreenWrapper";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AnimationDiv from "./components/AnimationDiv";
import MobileThemeButton from "./components/MobileThemeButton";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".hidden").forEach((e) => {
        if (window.scrollY >= e.offsetTop - 500) {
          e.classList.remove("hidden");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ThemeProvider>
        <MobileThemeButton />
        <AnimationDiv />
        <Header />
        <BigScreenWrapper />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
