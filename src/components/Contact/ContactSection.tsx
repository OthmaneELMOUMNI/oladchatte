import React, { useState } from 'react';
import { siteData } from '../../data/mockData';
import { Button } from '../Button/Button';
import styles from './ContactSection.module.css';

type InquiryFormState = {
  name: string;
  organization: string;
  email: string;
  message: string;
};

const initialFormState: InquiryFormState = {
  name: '',
  organization: '',
  email: '',
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactSection: React.FC = () => {
  const { inquiries: data } = siteData;
  const [formData, setFormData] = useState<InquiryFormState>(initialFormState);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (error) setError('');
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const buildMailtoHref = () => {
    const name = formData.name.trim();
    const organization = formData.organization.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    const subject = name ? `Booking inquiry from ${name}` : 'Booking inquiry';
    const body = [
      name ? `Name: ${name}` : '',
      organization ? `Organization / Ministry: ${organization}` : '',
      email ? `Email: ${email}` : '',
      message ? '\nMessage / Inquiry Details:\n' + message : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      event.preventDefault();
      setError('Please enter your full name.');
      return;
    }
    if (!email || !EMAIL_RE.test(email)) {
      event.preventDefault();
      setError('Please enter a valid email address.');
      return;
    }
    if (!message) {
      event.preventDefault();
      setError('Please enter your message or inquiry details.');
      return;
    }
  };

  return (
    <section id="contact" className={`container ${styles.contact}`} aria-labelledby="contact-title">
      <div className={styles.grid}>
        <div className={styles.infoSide}>
          <div className={styles.header}>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <h2 id="contact-title" className={styles.title}>
              {data.title}
            </h2>
          </div>

          <p className={styles.description}>{data.description}</p>

          <div className={styles.contactDetails}>
            {data.contactMethods.map((method) => (
              <div key={method.label} className={styles.contactItem}>
                <span className={`material-symbols-outlined ${styles.icon}`}>{method.icon}</span>
                <div className={styles.contactMeta}>
                  <span className={styles.contactLabel}>{method.label}</span>
                  <a
                    className={styles.contactLink}
                    href={method.href}
                    target={method.href.startsWith('https://') ? '_blank' : undefined}
                    rel={method.href.startsWith('https://') ? 'noreferrer' : undefined}
                  >
                    {method.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="booking" className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-name">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-organization">
              Organization / Ministry
            </label>
            <input
              id="contact-organization"
              name="organization"
              type="text"
              autoComplete="organization"
              className={styles.input}
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-email">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-message">
              Message / Inquiry Details <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              className={styles.textarea}
              rows={4}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {error && (
            <p role="alert" className={`${styles.status} ${styles.statusError}`}>
              {error}
            </p>
          )}

          <div className={styles.submitWrapper}>
            <Button href={buildMailtoHref()} variant="primary" fullWidth className={styles.submitBtn} onClick={handleSubmit}>
              {data.submitLabel}
            </Button>
            <p className={styles.submitHint}>This will open your email app with the details pre-filled.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
