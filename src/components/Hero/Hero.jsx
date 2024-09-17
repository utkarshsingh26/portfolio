import React from "react";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Utkarsh</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2+ years of industry experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
        <a href="https://docs.google.com/document/d/1RAQ_O5VKMmYLoyZql6Sax45usqNdrZHkOQxu3q6GghY/edit" target="_blank" className={styles.contactBtn}>
          Resume
        </a>
                <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        </div>
      </div>
      <img
        src={getImageURL("hero/Utkarsh.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};