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
} from "react-icons/bi";
import image from "../assets/images/20220317_073449.jpg";
import { projectsData } from "../data/projectsData";
import resume from "../assets/resume.pdf";

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
              Hello! my name is <span>Mohammad</span> and I am a computer
              engineering student who enjoys building websites from scratch
              using <span>HTML</span>, <span>CSS</span>, <span>Bootstrap</span>,
              and <span>Javascript</span>.
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
              <span> {projectsData.length - 1}</span> projects.
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
                  <BiLogoBootstrap /> Bootstrap
                </li>
              </ul>
              <ul>
                <li>
                  <BiLogoReact /> React
                </li>
                <li>
                  <BiLogoRedux /> Redux
                </li>

                <li>
                  <BiLogoGit /> Git and Github
                </li>
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
