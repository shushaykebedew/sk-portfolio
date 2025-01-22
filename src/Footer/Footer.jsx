import styles from "./Footer.module.css";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
function Footer() {
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
          <p>If you want to connect with me, follow me on:</p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://facebook.com/shushay.kebedew">
                {" "}
                <FaFacebook className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/shushay-kebedew">
                {" "}
                <FaLinkedin className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://x.com/shushaykebedew">
                <FaTwitter className={styles.icon} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/tigray_technology">
                {" "}
                <FaInstagram className={styles.icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          &copy; Copyright <strong>Shushay</strong> All rights reserved!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
