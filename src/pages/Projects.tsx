import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="main-title hidden">PROJECTS</h2>
        <p className="quto hidden">
          <BiSolidQuoteAltLeft /> If you can't excel with talent, triumph with
          effort <BiSolidQuoteAltRight />
        </p>
        <div className="content hidden">
          {projectsData.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
