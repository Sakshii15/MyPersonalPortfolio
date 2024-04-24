import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/About.module.scss";
import Me from "../../public/images/Tomcy.jpg";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.detailsSection}>
          <div className={styles.about}>
            <h1 data-aos="fade-up">About Me</h1>
            <div className={styles.aboutContainer}>
              <div className={styles.aboutInfo}>
                <p data-aos="fade-up" data-aos-delay="200">
                  I&#39;m a Self-taught Web developer and UI/UX  who is now
                  learning React JS and Nextjs. I&#39;m pursuing my
                  Bachelor&#39;s Degree in Computer Science Engineering from RKGIT,
                  Ghaziabad, graduation in 2024.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  I have worked on many projects in my college,as you can see on my Github.
                  i have made projects such as AppleVisionPro clone,Virtual Assistant,
                  Homechef Connect App..etc.
                </p>
                <p data-aos="fade-up" data-aos-delay="400">
                  I am currently upscalling my skills and looking for an opportunity
                  where i can implement my skills and work on interesting projects.
                </p>
              </div>

              <div className={styles.aboutImage}>
                <Image
                  src={Me}
                  alt="Picture of Sakshi - Developer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skillsContainer}>
              <h1 data-aos="fade-up">Skills</h1>
              <div className={styles.skillCards}>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#cf92fb" }}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h2>Expertise</h2>
                  <p>Development</p>
                  <p>Innovative Projects</p>
                  <p>UI/UX</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#b44bff" }}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2>Tech Stack</h2>
                  <p>React Js</p>
                  <p>Javascript</p>
                  <p>Next Js</p>
                  <p>TailwindCSS</p>
                  <p>CSS</p>
                  <p>Redux</p>
                  <p>MySql</p>
                  <p>Python</p>
                </div>
                <div
                  className={styles.skillCard}
                  style={{ backgroundColor: "#911ae5" }}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <h2>Design Tools</h2>
                  <p>Figma</p>
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
