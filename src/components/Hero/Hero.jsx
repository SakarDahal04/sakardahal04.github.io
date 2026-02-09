import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const handleDownload = (e) => {
    e.preventDefault()
    const link = document.createElement("a");
    link.href = "/files/resume.pdf";
    link.download = "Sakar_Resume.pdf";
    link.click();
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sakar</h1>
        <p className={styles.description}>
          I'm a full-stack developer with proficiency in Django and React
        </p>
        <div className={styles.btnContainer}>
          <a
            href="mailto:sakar1234dahal@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
          <button
            className={styles.contactBtn}
            onClick={(e) => handleDownload(e)}
          >
            Download CV
          </button>
        </div>
      </div>
      <div className={styles.heroImg}>
        <img
          src={getImageUrl("hero/final-profile.jpg")}
          alt="Hero image of me"
          // className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
