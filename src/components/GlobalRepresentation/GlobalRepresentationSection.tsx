import React from 'react';
import { siteData } from '../../data/mockData';
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback';
import styles from './GlobalRepresentationSection.module.css';

export const GlobalRepresentationSection: React.FC = () => {
  const { globalRepresentation: data } = siteData;

  return (
    <section id="representation" className={styles.global} aria-labelledby="representation-title">
      <div className={styles.bgContainer}>
        <ImageWithFallback
          src={data.bgImage}
          alt="Global representation map"
          className={styles.bgImage}
          fallbackLabel="Global"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <h2 id="representation-title" className={styles.title}>
          {data.title}
        </h2>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.features}>
          {data.features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <h4 className={styles.featureTitle}>{feature.title}</h4>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
