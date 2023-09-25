import { LuGithub } from "react-icons/lu";
import { AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-footer">
          <a href="https://github.com/mhmd-k" target="_blank" title="github">
            <LuGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-alkayyali-a94b30222/"
            target="_blank"
            title="linkedin"
          >
            <AiFillLinkedin />
          </a>
          <a href="mailto:mhmdk425@gmail.com" target="_blank" title="mail">
            <BsMailbox />
          </a>
          <a
            href="https://wa.me/+963937741680"
            target="_blank"
            title="whatsapp"
          >
            <AiOutlineWhatsApp />{" "}
          </a>
        </div>
        <p>
          Built by <span>Mohammad Alkayyali</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
