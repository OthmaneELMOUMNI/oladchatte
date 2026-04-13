import React from 'react';
import { siteData } from '../../data/mockData';
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback';
import styles from './AncestrySection.module.css';

export const AncestrySection: React.FC = () => {
  const { ancestry } = siteData;

  return (
    <section id="heritage" className={`container ${styles.ancestry}`} aria-labelledby="heritage-title">
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <div className={styles.header}>
            <p className={styles.subtitle}>{ancestry.subtitle}</p>
            <h2 id="heritage-title" className={styles.title}>
              {ancestry.title.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>

          <div className={styles.paragraphs}>
            {ancestry.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.quoteBlock}>
            <div className={styles.divider}></div>
            <p className={styles.quote}>{ancestry.quote}</p>
          </div>
        </div>

        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper1}>
            <ImageWithFallback
              src={ancestry.image1}
              alt="Traditional guembri"
              className={styles.image1}
              fallbackLabel="Guembri"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.imageWrapper2}>
            <ImageWithFallback
              src={ancestry.image2}
              alt="Sahara dunes"
              className={styles.image2}
              fallbackLabel="Sahara"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
