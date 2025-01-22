import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

function Contact() {
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
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>

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
