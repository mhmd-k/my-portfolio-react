import { memo } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { LuCodepen } from "react-icons/lu";

function ProjectCard({ image, title, disc, github, link, codepen, footer }) {
  return (
    <div className="box">
      <div className="image">
        <img src={image} loading="lazy" />
      </div>
      <h4>
        <AiFillFolderOpen />
        {title}
      </h4>
      <div className="box-body">
        <p>{disc}</p>
      </div>
      <div className="box-footer">
        <p>{footer}</p>
        <div className="links">
          {github && link ? (
            <>
              <a href={github} target="_blanck">
                <LuGithub />
              </a>{" "}
              <a href={link} target="_blanck">
                <LuExternalLink />
              </a>
            </>
          ) : (
            <>
              <a href={codepen} target="_blanck" title="codepen">
                <LuCodepen />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
