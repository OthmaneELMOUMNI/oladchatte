import React from 'react';
import { siteData } from '../../data/mockData';
import { Button } from '../Button/Button';
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.background}>
        <ImageWithFallback
          src={siteData.hero.bgImage}
          alt="Oulad Chatta performing in a desert landscape"
          className={styles.bgImage}
          fallbackClassName={styles.bgFallback}
          fetchPriority="high"
        />
        <div className="hero-gradient" style={{ position: 'absolute', inset: 0 }}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.subtitle}>{siteData.hero.subtitle}</span>

        <h1 id="hero-title" className={styles.title}>
          {siteData.hero.titlePrimary} <br />
          <span className={styles.titleSecondary}>{siteData.hero.titleSecondary}</span>
        </h1>

        <p className={styles.description}>{siteData.hero.description}</p>

        <div className={styles.actions}>
          <Button variant="primary" href={siteData.hero.ctaPrimary.href}>
            {siteData.hero.ctaPrimary.label}
          </Button>
          <Button variant="secondary" href={siteData.hero.ctaSecondary.href}>
            {siteData.hero.ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
};
