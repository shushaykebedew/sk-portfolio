import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { FaDownload } from "react-icons/fa";
import heroImg from "../assets/hero-img.jpg";

function Hero() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add shadow after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "About",
    "Services",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  return (
    <section id="home" className={styles.hero}>
      {/* Header/Navbar */}
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      >
        <h2 className={styles.fullName}>
          <a href="#home">Shushay Kebedew</a>
        </h2>

        {/* Hamburger Icon */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          &#9776;
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${styles.heroNav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`${styles.navLink} ${
                    activeLink === item ? styles.activeLink : ""
                  }`}
                  onClick={() => handleLinkClick(item)}
                  aria-current={activeLink === item ? "page" : undefined}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1>Full Stack Developer</h1>
          <p>
            Hi, I'm <span className={styles.myName}>Shushay</span>, a passionate
            Full Stack Developer with experience in creating scalable,
            efficient, and user-friendly web applications.
          </p>
          <button className={styles.ctaBtn}>
            <a href="/SHUSHAY_KEBEDEW_CV.pdf" download="Shushay_Kebedew_CV">
              Download CV <FaDownload className={styles.downloadIcon} />
            </a>
          </button>
        </div>
        <div className={styles.heroImg}>
          <img
            src={heroImg}
            alt="A full-stack developer coding at a workstation"
          />
        </div>
      </main>
    </section>
  );
}

export default Hero;
