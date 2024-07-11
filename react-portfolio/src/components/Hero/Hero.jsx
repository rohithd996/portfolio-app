import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi I'm Rohith
            </h1>
            <p className={styles.description}>
                I'm a full-stack developer with 8 years of experience using React and
                NodeJS. Reach out if you'd like to learn more!
            </p>
            <a href='mailto:rohithd996@gmail.com' className={styles.contactBtn}>
                Contact me
            </a>
        </div>
        <img src={getImageUrl('hero/heroDev.png')} alt='hero-img' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}