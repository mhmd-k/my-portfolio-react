import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoGit,
  BiSolidQuoteAltLeft,
  BiSolidDownload,
  BiSolidQuoteAltRight,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandNextjs, TbSql } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="main-title hidden">ABOUT ME</h2>
      <div className="container">
        <p className="quto hidden">
          <BiSolidQuoteAltLeft /> do what you love, love what you do{" "}
          <BiSolidQuoteAltRight />
        </p>
        <div className="content hidden">
          <div className="text">
            <p>
              Hello! I’m <span>Mohammad</span>, a{" "}
              <span>Software Developer</span> and
              <span> Computer Engineering</span> graduate with a passion for
              building
              <span> scalable</span>, <span>user-focused</span> web
              applications. I enjoy turning complex requirements into clean,
              intuitive, and high-performing interfaces.
            </p>

            <p>
              I work primarily with <span>Next.js</span>,{" "}
              <span>TypeScript</span>, and modern styling tools like
              <span>Tailwind CSS</span> and <span>shadcn/ui</span> to build
              clean, consistent, and reusable user interfaces.
            </p>

            <p>
              I have hands-on experience building real <span>production</span>{" "}
              applications, including <span>admin dashboards</span> and
              <span> Atlassian Forge apps</span>, with a strong focus on
              <span> performance</span> and <span> user experience</span>.
            </p>

            <p>
              I have strong experience with <span>state management</span>,
              working with <span>REST APIs</span>, and building
              <span> data-driven</span> interfaces using charting libraries like{" "}
              <span> ApexCharts</span> and <span> Recharts</span>.
            </p>

            <p>
              I have a solid understanding of <span> mobile-first</span> design,
              <span> responsive layouts</span>,{" "}
              <span> cross-browser compatibility</span>, and performance
              optimization.
            </p>

            <p>
              Throughout my journey, I have worked on <span>8</span> projects,
              focusing on quality and delivery, with <span>4</span> deployed to
              <span> production</span>.
            </p>

            <p>
              I value <span> clean code</span>, <span> maintainability</span>,
              and continuous improvement — I am always <span> learning</span>.
            </p>

            <div className="skills-heading">My Skills:</div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <li className="flex gap-2">
                <BiLogoHtml5 className="text-primary w-6 h-6" /> HTML
              </li>
              <li className="flex gap-2">
                <BiLogoCss3 className="text-primary w-6 h-6" /> CSS
              </li>
              <li className="flex gap-2">
                <BiLogoJavascript className="text-primary w-6 h-6" /> Javasript
              </li>
              <li className="flex gap-2">
                <BiLogoTypescript className="text-primary w-6 h-6" /> Typescript
              </li>
              <li className="flex gap-2">
                <BiLogoReact className="text-primary w-6 h-6" /> React
              </li>
              <li className="flex gap-2">
                <TbBrandNextjs className="text-primary w-6 h-6" /> Next.js
              </li>
              <li className="flex gap-2">
                <RiTailwindCssFill className="text-primary w-6 h-6" /> Tailwind
                CSS
              </li>
              <li className="flex gap-2">
                <SiShadcnui className="text-primary w-6 h-6" /> Shadcn UI
              </li>
              <li className="flex gap-2">
                <BiLogoGit className="text-primary w-6 h-6" /> Git
              </li>
              <li className="flex gap-2">
                <FaNodeJs className="text-primary w-6 h-6" /> Node.js
              </li>
              <li className="flex gap-2">
                <TbSql className="text-primary w-6 h-6" /> SQL
              </li>
              <li className="flex gap-2">
                <GrMysql className="text-primary w-6 h-6" /> MySQL
              </li>
            </ul>
            <div className="resume">
              <button className="btn" name="resume">
                <a href="/resume.pdf" className="download" download>
                  Resume <BiSolidDownload />
                </a>
              </button>
            </div>
          </div>
          <div className="image">
            <img src="/mk.webp" alt="mohammad alkayyali" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
