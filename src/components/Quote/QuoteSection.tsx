import React from 'react';
import { siteData } from '../../data/mockData';
import styles from './QuoteSection.module.css';

export const QuoteSection: React.FC = () => {
  const { quote } = siteData;
  const lines = quote.text.split('\n');

  const verses = lines.slice(0, 3);
  const bridge = lines.slice(3, 5);
  const climax = lines[5];

  return (
    <section className={styles.section} aria-label="Quote">
      <div className={styles.inner}>
        <span className={styles.bigMark} aria-hidden="true">&ldquo;</span>

        <blockquote className={styles.blockquote} cite="#">
          <div className={styles.verses}>
            {verses.map((line, i) => (
              <p key={i} className={styles.verseLine}>{line}</p>
            ))}
          </div>

          <div className={styles.separator} aria-hidden="true" />

          <div className={styles.bridge}>
            {bridge.map((line, i) => (
              <p key={i} className={styles.bridgeLine}>{line}</p>
            ))}
          </div>

          <p className={styles.climax}>{climax}</p>
        </blockquote>

        <footer className={styles.attribution}>
          <span className={styles.attributionLine} aria-hidden="true" />
          <p className={styles.attributionText}>{quote.subtitle}</p>
        </footer>
      </div>
    </section>
  );
};
