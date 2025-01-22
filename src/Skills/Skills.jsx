import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import styles from "./Skills.module.css";

function Skills() {
  const skillSet = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MySQL", icon: <SiMysql /> },
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
