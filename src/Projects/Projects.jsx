import styles from "./Projects.module.css";
import sheqleeDashboard from "../assets/sheqlee-dashboard.png";
import qrCodeScan from "../assets/qr-code-scan.jpg";

function Projects() {
  const projectList = [
    {
      title: "QR-Code Based ID Verification",
      description:
        "A secure, efficient, and innovative solution for identity verification using QR code scanning. This project ensures a smooth user experience while enhancing security for various applications like access control and authentication.",
      link: "#",
      image: qrCodeScan,
    },
    {
      title: "Sheqlee's Admin Page",
      description:
        "An admin dashboard for the Sheqlee web app, designed to help freelancers and clients manage their profiles, projects, and payments. The intuitive UI ensures seamless navigation while providing powerful features for productivity and project management.",
      link: "#",
      image: sheqleeDashboard,
    },
  ];

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectList}>
        {projectList.map((project, index) => (
          <div className={styles.project} key={index}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <a href={project.link} className={styles.projectLink}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
