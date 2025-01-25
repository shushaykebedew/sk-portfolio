import styles from "./Footer.module.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa"; // Icon for the scroll-to-top button
import { useEffect, useState } from "react";

function Footer() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 630);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        {/* Personal Info Section */}
        <div className={styles.personalInfo}>
          <h2>SHUSHAY</h2>
          <p>Mekelle, Tigray, Ethiopia</p>
          <p>
            <strong>Phone:</strong> +251 943 668 796
          </p>
          <p>
            <strong>Email:</strong> shusaykebedew12@gmail.com
          </p>
        </div>

        {/* Useful Links Section */}
        <div className={styles.linksSection}>
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#home">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                About
              </a>
            </li>
            <li>
              <a href="#projects">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h4>My Services</h4>
          <ul>
            <li>
              <a href="#services">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                Web Development
              </a>
            </li>
            <li>
              <a href="#services">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                Database Management
              </a>
            </li>
            <li>
              <a href="#services">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                Mobile App Development
              </a>
            </li>
            <li>
              <a href="#services">
                <span className={styles.forwardIcon}>
                  <IoChevronForward />
                </span>
                SEO & Digital Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMediaSection}>
          <h4>Follow Me</h4>
          <p>If you want to connect with me, follow me </p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://facebook.com/shushay.kebedew" target="_blank">
                <FaFacebook className={styles.icon} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shushay-kebedew/"
                target="_blank"
              >
                <FaLinkedin className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://x.com/Shushay_Kebedew" target="_blank">
                <FaTwitter className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/tigray_technology" target="_blank">
                <FaInstagram className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showScrollToTop && (
        <button
          className={styles.scrollToTop}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className={styles.scrollIcon} />
        </button>
      )}

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved!</p>
      </div>
    </footer>
  );
}

export default Footer;
