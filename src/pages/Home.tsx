import { useTheme } from "@/components/theme-provider";

function Home() {
  const { theme } = useTheme();

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
