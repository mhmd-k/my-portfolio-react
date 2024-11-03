import { useThemeContext } from "../context/ThemeContext";

function Home() {
  const { theme } = useThemeContext();

  return (
    <main>
      <div className="landing" id="home">
        <div key={theme} className="container">
          <h1 className="animated">Mohammad Alkayyali</h1>
          <p className="animated">Software Developer</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
