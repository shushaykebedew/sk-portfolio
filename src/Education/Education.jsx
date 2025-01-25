import { RiGraduationCapFill } from "react-icons/ri";
import styles from "./Education.module.css";

function Education() {
  const educationList = [
    {
      degree: "Bachelor's in Information Technology",
      institution: "University of Mekelle/MIT",
      year: "2018 - Present",
      description:
        "Focused on full-stack development, networking, data structures, algorithms, and other IT-related fields.",
    },
    {
      degree: "High School Diploma",
      institution: "Aba-Hailemariam High School",
      year: "2014 - 2018",
      description:
        "Studied a comprehensive curriculum covering both social and natural sciences.",
    },
  ];

  return (
    <section className={styles.education} id="education">
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.educationList}>
        {educationList.map((education, index) => (
          <div key={index} className={styles.educationItem}>
            <span className={styles.icon}>
              <RiGraduationCapFill />
            </span>
            <h3 className={styles.degree}>{education.degree}</h3>
            <p className={styles.institution}>
              <label>Institute : </label> {education.institution}
            </p>
            <p className={styles.year}>
              <label>Year : </label>
              {education.year}
            </p>
            <p className={styles.description}>{education.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
