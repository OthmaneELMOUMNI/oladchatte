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

export const ContactSection: React.FC = () => {
  const { inquiries: data } = siteData;
  const [formData, setFormData] = useState<InquiryFormState>(initialFormState);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const name = formData.name.trim();
    const organization = formData.organization.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !organization || !email || !message) {
      setStatus({
        type: 'error',
        message: 'Please complete every field before sending your inquiry.',
      });
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address so we can reply.',
      });
      return;
    }

    const subject = `Booking inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Organization / Ministry: ${organization}`,
      `Email: ${email}`,
      '',
      'Message / Inquiry Details:',
      message,
    ].join('\n');

    window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus({ type: 'success', message: data.successMessage });
    setFormData(initialFormState);
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

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-name">
              Full Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
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
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-email">
              Email Address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="contact-message">
              Message / Inquiry Details
            </label>
            <textarea
              id="contact-message"
              name="message"
              className={styles.textarea}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {status ? (
            <p
              className={`${styles.status} ${status.type === 'success' ? styles.statusSuccess : styles.statusError}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}

          <div className={styles.submitWrapper}>
            <Button type="submit" variant="primary" fullWidth className={styles.submitBtn}>
              {data.submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
