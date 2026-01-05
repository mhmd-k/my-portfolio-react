import { useRef, useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function Contact() {
  const [fromData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await emailjs.sendForm(
        "service_du5cgx8",
        "contact_form",
        formRef?.current || "",
        "tACKh8YPGqJC4gbCa"
      );

      // console.log("response: ", res);

      if (res.status === 200) {
        setFormData({ user_email: "", user_name: "", message: "" });

        toast.success("Message sent successfully");
      } else {
        throw new Error("something went wrong");
      }
    } catch {
      toast.error("something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
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
          <button className="btn" type="submit" name="send-message">
            <span>
              {loading ? (
                <div className="spinner">
                  <div></div>
                </div>
              ) : (
                <>
                  Send <BsFillSendFill />
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
