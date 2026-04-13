import React from 'react';
import { siteData } from '../../data/mockData';
import styles from './QuoteSection.module.css';

export const QuoteSection: React.FC = () => {
  const { quote } = siteData;

  return (
    <section className={styles.quoteSection}>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        format_quote
      </span>
      <h2 className={styles.text}>
        {quote.text}
      </h2>
      <div className={styles.divider}></div>
      <p className={styles.subtitle}>{quote.subtitle}</p>
    </section>
  );
};
