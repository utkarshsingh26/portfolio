import React from 'react'

import {getImageURL} from '../../utils';
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Utkarsh!</h1>
        <p className={styles.description}>I'm a full stack developer with 2+ years of experience. Reach out to me if you'd like to learn more.</p>
        <a className={styles.contactBtn} href='mailto:singh.utkarsh26@gmail.com'>Contact Me</a>
        <img className={styles.heroImg} src={getImageURL('hero/heroImage.png')} alt="Utkarsh Singh img"></img>
        <div className="topBlur" />
        <div className="bottomBlur" />
        </div>
    </section>
  )
}
