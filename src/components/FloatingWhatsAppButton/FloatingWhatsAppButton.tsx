import React from 'react';
import { siteData } from '../../data/mockData';
import styles from './FloatingWhatsAppButton.module.css';

const WhatsAppMark: React.FC = () => {
  return (
    <svg
      aria-hidden="true"
      className={styles.icon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.48 0 .11 5.36.11 11.96c0 2.11.55 4.16 1.6 5.96L0 24l6.24-1.64a11.85 11.85 0 0 0 5.83 1.49h.01c6.59 0 11.96-5.36 11.96-11.96 0-3.19-1.24-6.18-3.52-8.41Zm-8.44 18.35h-.01a9.95 9.95 0 0 1-5.07-1.39l-.36-.21-3.7.97.99-3.61-.24-.37a9.94 9.94 0 0 1-1.53-5.27c0-5.49 4.47-9.96 9.97-9.96a9.9 9.9 0 0 1 7.05 2.93 9.89 9.89 0 0 1 2.91 7.04c0 5.49-4.47 9.96-9.97 9.96Zm5.46-7.45c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.69.15-.2.3-.78.98-.95 1.18-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.38-1.47a8.96 8.96 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.67-.94-2.29-.25-.59-.5-.5-.69-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.52 0 1.49 1.08 2.93 1.23 3.13.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.79-.73 2.04-1.43.25-.71.25-1.32.18-1.45-.08-.13-.27-.2-.57-.35Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FloatingWhatsAppButton: React.FC = () => {
  const moroccoContact = siteData.inquiries.contactMethods.find(
    (method) => method.value.startsWith('+212') && method.href.startsWith('https://wa.me/'),
  );

  if (!moroccoContact) {
    return null;
  }

  return (
    <div className={styles.shell}>
      <a
        className={styles.panel}
        href={moroccoContact.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat on WhatsApp at ${moroccoContact.value}`}
      >
        <span className={styles.brandMark} aria-hidden="true">
          <span className={styles.iconHalo}></span>
          <WhatsAppMark />
        </span>
      </a>
    </div>
  );
};
