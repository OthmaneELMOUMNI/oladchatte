import React, { useEffect, useState } from 'react';
import { siteData } from '../../data/mockData';
import { Button } from '../Button/Button';
import styles from './Navigation.module.css';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.navOpen : ''}`}>
        <a href="#top" className={styles.brand} onClick={closeMenu}>
          {siteData.navigation.brand}
        </a>

        <div className={styles.desktopLinks}>
          {siteData.navigation.links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.name}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <div className={styles.desktopBtn}>
            <Button variant="primary" href={siteData.navigation.cta.href}>
              {siteData.navigation.cta.label}
            </Button>
          </div>
          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span className={`material-symbols-outlined ${styles.menuIcon}`}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-navigation" className={`${styles.mobileOverlay} ${menuOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {siteData.navigation.links.map((link) => (
            <a key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
              {link.name}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <Button variant="primary" fullWidth href={siteData.navigation.cta.href} onClick={closeMenu}>
              {siteData.navigation.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
