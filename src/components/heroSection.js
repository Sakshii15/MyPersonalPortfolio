import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p >Hi! Im Sakshi, I love</p>
          <h1>
            building <span className={styles.heroColor}>Innovative projects</span> and{" "}
            <span className={styles.heroColor2}>experiences</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p>
              Final Year Computer Engineering student from Ghaziabad, working to Expertise my Skills and currently
              building cool stuff with ReactJS and Nextjs.
            </p>
          </div>
        </div>
        <div
          className={styles.heroCta}
        >
          <Link to="uiux" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check out my works!</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1Tk-PdPdb5L9Adc8BxsBwfGyi3f-PQbD8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
