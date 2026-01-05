import { LuGithub } from "react-icons/lu";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-footer">
          <a
            href="https://github.com/mhmd-k"
            target="_blank"
            title="github"
            rel="noreferrer"
          >
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-alkayyali-a94b30222/"
            target="_blank"
            title="linkedin"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:mhmdk425@gmail.com"
            target="_blank"
            title="mail"
            rel="noreferrer"
          >
            <BsMailbox />
          </a>
          <a
            href="https://wa.me/+31635669383"
            target="_blank"
            title="whatsapp"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
