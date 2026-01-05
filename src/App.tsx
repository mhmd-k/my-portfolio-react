import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect } from "react";
import MobileThemeButton from "./components/MobileThemeButton";
import AnimationDiv from "./components/AnimationDiv";
import Header from "./components/Header";
import BigScreenWrapper from "./components/BigScreenWrapper";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".hidden").forEach((e) => {
        if (window.scrollY >= (e as HTMLElement).offsetTop - 500) {
          e.classList.remove("hidden");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MobileThemeButton />
      <AnimationDiv />
      <Header />
      <BigScreenWrapper />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
