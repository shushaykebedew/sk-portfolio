import React, { useState } from "react";
import styles from "./Hero.module.css";
import heroImg from "../assets/hero-img.png";

function Hero() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <h2 className={styles.heroLeft}>Shushay Kebedew</h2>
        <nav className={styles.heroNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {[
              "Home",
              "About",
              "Services",
              "Skills",
              "Projects",
              "Education",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${styles.navLink} ${
                    activeLink === item ? styles.activeLink : ""
                  }`}
                  onClick={() => handleLinkClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className={styles.ctaBtn}>
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Get Started
            </a>
          </button>
        </nav>
      </header>
      <main className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>Full Stack Developer</h1>
          <p>
            I am a passionate Full Stack Developer with experience in creating
            scalable, efficient, and user-friendly web applications.
          </p>

          <button className={styles.ctaBtn}>
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Get Started
            </a>
          </button>
        </div>
        <div className={styles.heroImg}>
          <img src={heroImg} alt="Developer at work" />
        </div>
      </main>
    </section>
  );
}

export default Hero;
