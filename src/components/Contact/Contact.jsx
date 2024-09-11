import React from "react";

import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:singh.utkarsh26@gmail.com">singh.utkarsh26@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/singhutkarsh98" target="_blank">linkedin.com/in/singhutkarsh98</a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/utkarshsingh26" target="_blank">github.com/utkarshsingh26</a>
        </li>
      </ul>
    </footer>
  );
};