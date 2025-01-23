import styles from "./About.module.css";
import profileImg from "../assets/hero-img.png";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className={styles.about} id="about">
      <h2 className={styles.heading}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={profileImg}
            alt="Shushay Kebedew"
            className={styles.profileImg}
          />
        </div>
        <div className={styles.text}>
          <p>
            Hi! I'm <strong>Shushay Kebedew</strong>, a passionate Web Developer
            with experience in creating modern, responsive, and user-friendly
            web applications. My expertise lies in technologies like{" "}
            <strong>React</strong>, <strong>JavaScript</strong>,{" "}
            <strong>Node.js</strong>, and <strong>MongoDB</strong>. I enjoy
            transforming ideas into digital experiences.
          </p>
          <ul className={styles.list}>
            <li>
              <FaCheckCircle className={styles.icon} /> I specialize in building
              efficient and scalable web applications.
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> I love collaborating on
              challenging projects that push my creativity.
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> I enjoy reading books on
              a variety of topics to expand my knowledge and creativity.
            </li>
            <li>
              <FaCheckCircle className={styles.icon} /> Exploring nature and
              hiking fuel my energy and inspiration.
            </li>
          </ul>
          <p>
            Want to know more about me or collaborate on a project?{" "}
            <a href="#contact" className={styles.cta}>
              Let’s connect!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
