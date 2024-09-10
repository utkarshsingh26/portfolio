import React from "react";

import styles from "./About.module.css";
import {getImageURL} from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/asu-fork.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I’m a front-end developer with expertise in building responsive, highly optimized websites that deliver seamless user experiences across all devices
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have engineered high-performance, optimized back-end systems and APIs for India's largest publicly owned company, ensuring efficiency and scalability at every level
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UX Designer</h3>
              <p>
              I’ve crafted dynamic, user-centric applications, blending intuitive design with seamless functionality to elevate the user experience
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};