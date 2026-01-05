import { useTheme } from "@/components/theme-provider";

function Home() {
  const { theme } = useTheme();

  return (
    <section className="landing" id="home">
      <div key={theme} className="container">
        <h1 className="animated">Mohammad Alkayyali</h1>
        <p className="animated">Software Developer</p>
      </div>
    </section>
  );
}

export default Home;
