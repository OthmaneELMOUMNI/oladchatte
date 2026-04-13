import React from 'react';
import { siteData } from '../../data/mockData';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.brand} href="#top">
        {siteData.footer.brand}
      </a>
      <div className={styles.links}>
        {siteData.footer.links.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.name}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>{siteData.footer.copyright}</div>
    </footer>
  );
};
