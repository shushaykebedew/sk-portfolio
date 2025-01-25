import About from "./About/About";
import styles from "./App.module.css";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.history.pushState({}, "", "/");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.app}>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
