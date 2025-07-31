import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    } else {
      console.error("EmailJS Public Key is missing!");
    }
  }, [PUBLIC_KEY]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return (
      formData.name && formData.email && formData.subject && formData.message
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setFeedback("Please fill out all fields.");
      setTimeout(() => setFeedback(null), 5000);
      return;
    }

    setLoading(true);
    setFeedback(null);

    const templateParams = {
      to_name: "Shushay Kebedew",
      from_name: formData.name,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setFeedback("Message sent successfully!");
        setTimeout(() => setFeedback(null), 5000);
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        setLoading(false);
        setFeedback("An error occurred: " + error.text);
        setTimeout(() => setFeedback(null), 5000);
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
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <p className={styles.label}>Call</p>
              <p>+251 943 668 796</p>
            </div>
          </div>

          <div className={styles.contactInfo}>
            <FaEnvelope className={styles.icon} />
            <div>
              <p className={styles.label}>Email</p>
              <p>shusaykebedew12@gmail.com</p>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=38.7400%2C8.9600%2C38.7900%2C9.0200&layer=mapnik"
  allowFullScreen=""
  loading="lazy"
/>
          </div>
        </div>

        <div className={styles.form}>
          <form onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>

            <button
              type="submit"
              className={styles.sendButton}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {feedback && (
            <p
              className={`${styles.feedback} ${
                feedback.includes("success") ? styles.success : styles.error
              }`}
            >
              {feedback}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
