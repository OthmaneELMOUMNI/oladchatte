import React from 'react';
import { siteData } from '../../data/mockData';
import { Button } from '../Button/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.background}>
        <picture className={styles.picture}>
          <source media="(max-width: 640px)" srcSet={siteData.hero.bgImageMobile} />
          <img
            src={siteData.hero.bgImage}
            alt="Oulad Chatta performing live on stage"
            className={styles.bgImage}
            fetchPriority="high"
          />
        </picture>
        <div className={styles.overlay}></div>
        <div className={styles.textShade}></div>
      </div>

      <div className={styles.content}>
        <span className={styles.subtitle}>{siteData.hero.subtitle}</span>

        <h1 id="hero-title" className={styles.title}>
          {siteData.hero.titlePrimary} <br />
          <span className={styles.titleSecondary}>{siteData.hero.titleSecondary}</span>
        </h1>

        <p className={styles.description}>{siteData.hero.description}</p>

        <div className={styles.actions}>
          <Button
            variant="primary"
            href={siteData.hero.ctaPrimary.href}
            className={styles.heroButton}
          >
            {siteData.hero.ctaPrimary.label}
          </Button>
          <Button
            variant="secondary"
            href={siteData.hero.ctaSecondary.href}
            className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
          >
            {siteData.hero.ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
