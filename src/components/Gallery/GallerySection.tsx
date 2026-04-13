import React from 'react';
import { siteData } from '../../data/mockData';
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback';
import styles from './GallerySection.module.css';

export const GallerySection: React.FC = () => {
  const { ensemble } = siteData;

  return (
    <section id="ensemble" className={`${styles.gallery} container`} aria-labelledby="ensemble-title">
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <p className={styles.subtitle}>{ensemble.subtitle}</p>
          <h2 id="ensemble-title" className={styles.title}>
            {ensemble.title}
          </h2>
        </div>
        <p className={styles.description}>{ensemble.description}</p>
      </div>

      <div className={styles.grid}>
        {ensemble.members.map((member) => (
          <div key={member.name} className={styles.memberCard}>
            <div className={styles.imageContainer}>
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className={styles.image}
                fallbackLabel={member.fallbackLabel}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.gradientOverlay}></div>
            </div>
            <h4 className={styles.memberName}>{member.name}</h4>
            <p className={styles.memberRole}>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
