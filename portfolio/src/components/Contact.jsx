import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  return (

    <section id="contact">

      <h2>Contact Me</h2>

      <div className="contact-container">

        <div className="contact-box">

          <p>
            <FaEnvelope className="icon" />
            manpatel1315@gmail.com
          </p>

          <p>
            <FaGithub className="icon" />
            github.com/mxitcodes
          </p>

          <p>
            <FaLinkedin className="icon" />
            linkedin.com/in/manpatel
          </p>

        </div>

        <form className="contact-form">

          <input type="text" placeholder="Enter Your Name" />

          <input type="email" placeholder="Enter Your Email" />

          <textarea rows="6" placeholder="Enter Your Message"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;