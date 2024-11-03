import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
  BiLogoGit,
  BiSolidQuoteAltLeft,
  BiSolidDownload,
  BiSolidQuoteAltRight,
  BiLogoTypescript,
} from "react-icons/bi";
import image from "../assets/images/20220317_073449.jpg";
import { projectsData } from "../data/projectsData";
import resume from "../assets/resume.pdf";
import ZustandIcon from "../assets/polar-bear.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="main-title hidden">ABOUT ME</h2>
        <p className="quto hidden">
          <BiSolidQuoteAltLeft /> do what you love, love what you do{" "}
          <BiSolidQuoteAltRight />
        </p>
        <div className="content hidden">
          <div className="text">
            <p>
              Hello! I’m <span>Mohammad</span>, a passionate computer
              engineering graduate with a love for transforming ideas into
              interactive, visually appealing websites. With a strong foundation
              in <span>HTML</span>, <span>CSS</span>, and{" "}
              <span>JavaScript</span>, I enjoy building web experiences from the
              ground up, making them both functional and beautiful.
            </p>
            <p>
              I also have good experience using <span>React</span> to build web
              applications.
            </p>
            <p>
              I have a good understanding of mobile-first design concepts and
              cross browser development.
            </p>
            <p>
              Throughout my journey, I have successfully completed over
              <span> {projectsData.length - 2}</span> projects.
            </p>
            <p>
              I am currently learning <span>React native</span>.
            </p>
            <h3>My Skills:</h3>
            <div className="skills">
              <ul>
                <li>
                  <BiLogoHtml5 /> HTML
                </li>
                <li>
                  <BiLogoCss3 /> CSS
                </li>
                <li>
                  <BiLogoJavascript /> Javasript
                </li>
                <li>
                  <BiLogoTypescript /> Typescript
                </li>
              </ul>
              <ul>
                <li>
                  <BiLogoReact /> React
                </li>
                <li>
                  <BiLogoBootstrap /> Bootstrap
                </li>
                <li>
                  <BiLogoRedux /> Redux
                </li>

                <li>
                  <BiLogoGit /> Git
                </li>
              </ul>
              <ul>
                <li>Zustand</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="resume">
              <button className="btn">
                <a href={resume} className="download" download>
                  Resume <BiSolidDownload />
                </a>
              </button>
            </div>
          </div>
          <div className="image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
