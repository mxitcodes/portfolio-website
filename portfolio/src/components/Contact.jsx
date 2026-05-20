function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          type="email"
          placeholder="Enter Your Email"
        />

        <textarea
          placeholder="Enter Your Message"
          rows="6"
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>
    </section>
  );
}

export default Contact;