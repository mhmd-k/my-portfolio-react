import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { projectsData } from "../data/projectsData";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const btns = [
  {
    text: "All",
    tech: {
      react: true,
      bootstrap: true,
      JS: true,
    },
  },
  {
    text: "React",
    tech: {
      react: true,
      bootstrap: false,
      JS: false,
    },
  },
  {
    text: "JS",
    tech: {
      react: false,
      bootstrap: false,
      JS: true,
    },
  },
  {
    text: "Bootstrap",
    tech: {
      react: false,
      bootstrap: true,
      JS: false,
    },
  },
];

function Projects() {
  const [type, setType] = useState("react");
  const [activeindex, setActiveIndex] = useState(1);

  const handleClick = (type, index) => {
    setType(type);
    setActiveIndex(index);
  };

  const renderedBtns = btns.map((e, i) => (
    <li
      key={i}
      className={activeindex === i ? "active" : ""}
      onClick={() => handleClick(e.text, i)}
    >
      {e.text}
    </li>
  ));

  const filteredProjects = projectsData.filter((project) => {
    if (type === "All") return project;
    for (let [key, value] of Object.entries(project.filter)) {
      if (value && key === type.toLocaleLowerCase()) {
        return project;
      }
    }
  });

  const renderProjectCards = filteredProjects.map((project, i) => (
    <ProjectCard key={i} {...project} />
  ));

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="main-title hidden">PROJECTS</h2>
        <p className="quto hidden">
          <BiSolidQuoteAltLeft /> If you can't excel with talent, triumph with
          effort <BiSolidQuoteAltRight />
        </p>
        <ul className="filter hidden">{renderedBtns}</ul>
        <div className="content hidden">{renderProjectCards}</div>
      </div>
    </section>
  );
}

export default Projects;
