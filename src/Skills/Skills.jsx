import { FaCheckCircle } from "react-icons/fa";
import styles from "./Skills.module.css";

function Skills() {
  const skillSet = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "MySQL" },
    { name: "Python" },
    { name: "Git" },
  ];

  return (
    <section className={styles.skills} id="skills">
      <h2 className={styles.heading}>My Skills</h2>
      <div className={styles.skillContainer}>
        {skillSet.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <span className={styles.icon}>
              <FaCheckCircle />
            </span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
