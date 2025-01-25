import { FaCheckCircle } from "react-icons/fa";
import styles from "./Skills.module.css";

function Skills() {
  const skillSet = [
    { name: "HTML", icon: <FaCheckCircle /> },
    { name: "CSS", icon: <FaCheckCircle /> },
    { name: "JavaScript", icon: <FaCheckCircle /> },
    { name: "React", icon: <FaCheckCircle /> },
    { name: "Node.js", icon: <FaCheckCircle /> },
    { name: "MongoDB", icon: <FaCheckCircle /> },
    { name: "Git", icon: <FaCheckCircle /> },
    { name: "Python", icon: <FaCheckCircle /> },
    { name: "MySQL", icon: <FaCheckCircle /> },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.skillContainer}>
        {skillSet.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <span className={styles.icon}>{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
