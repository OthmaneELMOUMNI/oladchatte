import React, { useEffect, useState } from 'react';
import { siteData } from '../../data/mockData';
import { Button } from '../Button/Button';
import styles from './Navigation.module.css';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.48 0 .11 5.36.11 11.96c0 2.11.55 4.16 1.6 5.96L0 24l6.24-1.64a11.85 11.85 0 0 0 5.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.96 0-3.19-1.24-6.18-3.52-8.41Zm-8.44 18.35h-.01a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.7.97.99-3.61-.24-.37a9.94 9.94 0 0 1-1.53-5.27c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.05 2.93 9.89 9.89 0 0 1 2.91 7.04c0 5.49-4.47 9.96-9.97 9.96Zm5.46-7.45c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.78.98-.95 1.18-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.38-1.47a8.96 8.96 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.67-.94-2.29-.25-.59-.5-.5-.69-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.79-.73 2.04-1.43.25-.71.25-1.32.18-1.45-.08-.13-.27-.2-.57-.35Z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

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
          <a
            href={siteData.footer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon className={styles.instagramIcon} />
          </a>
          <a
            href={siteData.inquiries.contactMethods.find((m) => m.href.startsWith('https://wa.me/212'))?.href ?? '#contact'}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappLink}
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className={styles.instagramIcon} />
          </a>
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
          <div className={styles.mobileSocial}>
            <a
              href={siteData.footer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon className={styles.instagramIcon} />
            </a>
            <a
              href={siteData.inquiries.contactMethods.find((m) => m.href.startsWith('https://wa.me/212'))?.href ?? '#contact'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className={styles.instagramIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
