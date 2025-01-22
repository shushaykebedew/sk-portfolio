import styles from "./Services.module.css";
import {
  FaLaptopCode,
  FaDatabase,
  FaMobileAlt,
  FaSearch,
  FaCheckCircle,
} from "react-icons/fa";

function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.heading}>My Services</h2>
      <div className={styles.serviceList}>
        <div className={styles.service}>
          <FaLaptopCode className={styles.icon} />
          <h3>Web Development</h3>
          <p>
            <span className={styles.checkmark}>
              <FaCheckCircle />
            </span>
            I create responsive and user-friendly websites using modern
            technologies like React, JavaScript, and Node.js.
          </p>
        </div>
        <div className={styles.service}>
          <FaDatabase className={styles.icon} />
          <h3>Database Management</h3>
          <p>
            <span className={styles.checkmark}>
              <FaCheckCircle />
            </span>
            I offer scalable database solutions with MongoDB, MySQL, and more.
          </p>
        </div>
        <div className={styles.service}>
          <FaMobileAlt className={styles.icon} />
          <h3>Mobile App Development</h3>
          <p>
            <span className={styles.checkmark}>
              <FaCheckCircle />
            </span>
            I build cross-platform mobile applications to ensure your product
            reaches users on all devices.
          </p>
        </div>
        <div className={styles.service}>
          <FaSearch className={styles.icon} />
          <h3>SEO & Digital Marketing</h3>
          <p>
            <span className={styles.checkmark}>
              <FaCheckCircle />
            </span>
            I help optimize your web presence with SEO strategies and digital
            marketing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
