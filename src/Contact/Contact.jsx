import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const PUBLIC_KEY = "HJbLb28-rWBu7d91r";
  const TEMPLATE_ID = "template-for-shushay";
  const SERVICE_ID = "email-to-shushay";

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Prepare the data to be sent to EmailJS
    const templateParams = {
      to_name: "Shushay Kebedew",
      from_name: formData.get("name"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      reply_to: formData.get("email"),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams).then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset(); // Reset the form
      },
      (error) => {
        alert("An error occurred: " + JSON.stringify(error));
      }
    );
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Contact Me</h2>

      <div className={styles.contactContainer}>
        <div className={styles.info}>
          <div className={styles.contactInfo}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <p className={styles.label}>Address</p>
              <p>Mekelle, Tigray, Ethiopia</p>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <p className={styles.label}>Call me</p>
              <p>+251 943 668 796</p>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <FaEnvelope className={styles.icon} />
            <div>
              <p className={styles.label}>Email me</p>
              <p>shusaykebedew12@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.form}>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className={styles.sendButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
