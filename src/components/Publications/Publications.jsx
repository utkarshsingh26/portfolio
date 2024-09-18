import React, { useState } from 'react'

import styles from "./Publications.module.css";
import publications from "../../data/publications.json";
import { getImageURL } from "../../utils";

const Publications = () => {

    const [linkClicked, setLinkClicked] = useState(false);

    return (
        <section className={styles.container} id="projects">
          <h2 className={styles.title}>Publications</h2>
          <div>
        {publications.map((publication, id) => (
            <div className={styles.publication}>
                <img className={styles.img}
                  src={getImageURL(publication.imageSrc)}
                  alt={`${publication.publisher} Logo`}
                />
                <h3 key={id}>
                    <a href={publication.url} key={id} target='_blank'>{publication.title}</a>
                </h3>

            </div>
        ))}
          </div>
        </section>
      );
}

export default Publications