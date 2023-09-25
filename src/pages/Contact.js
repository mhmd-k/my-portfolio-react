import { useEffect, useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineMail, AiFillInfoCircle } from "react-icons/ai";
import emailjs from "@emailjs/browser";

function Contact() {
  const [fromData, setFomrData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, [show]);

  const handleChange = (event) => {
    setFomrData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_du5cgx8",
        "contact_form",
        formRef.current,
        "tACKh8YPGqJC4gbCa"
      )
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        setShow(true);
        setFomrData({ user_email: "", user_name: "", message: "" });
      });
  };

  return (
    <>
      <div className={show && !error ? "alert show" : "alert"}>
        Message has been sent <BsFillCheckCircleFill />
      </div>
      <div className={error && show ? "alert error show" : "alert error"}>
        {error?.text.slice(0, 42)}... <AiFillInfoCircle />
      </div>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="main-title">CONTACT</h2>
          <form onSubmit={sendEmail} ref={formRef}>
            <input type="hidden" name="contact_number" />
            <div className="form-element">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                value={fromData.user_name}
                onChange={handleChange}
                required
              />
              <BiUser />
            </div>
            <div className="form-element">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                value={fromData.user_email}
                onChange={handleChange}
                required
              />
              <AiOutlineMail />
            </div>
            <div className="form-element">
              <textarea
                name="message"
                placeholder="Message"
                value={fromData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="btn" type="submit">
              <span>
                {loading ? (
                  <div className="spinner">
                    <div></div>
                  </div>
                ) : (
                  "Send"
                )}
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
