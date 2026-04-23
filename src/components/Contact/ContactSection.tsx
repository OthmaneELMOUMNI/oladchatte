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
  const formSubmitEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(data.email)}`;
  const [formData, setFormData] = useState<InquiryFormState>(initialFormState);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (status) setStatus(null);
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const organization = formData.organization.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      setStatus({ type: 'error', message: 'Please enter your full name.' });
      return;
    }
    if (!email || !EMAIL_RE.test(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!message) {
      setStatus({ type: 'error', message: 'Please enter your message or inquiry details.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          organization,
          email,
          message,
          _subject: `Booking inquiry from ${name}`,
          _template: 'table',
          _honey: '',
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus({
        type: 'success',
        message: `Your inquiry was sent successfully to ${data.email}. If this is the first submission, please confirm the one-time activation email from FormSubmit in that inbox.`,
      });
      setFormData(initialFormState);
    } catch {
      setStatus({
        type: 'error',
        message: `We couldn't send your inquiry automatically. Please try again or email ${data.email} directly.`,
      });
    } finally {
      setIsSubmitting(false);
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

        <form id="booking" className={styles.formContainer} onSubmit={handleSubmit}>
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

          {status && (
            <p
              role={status.type === 'error' ? 'alert' : 'status'}
              className={`${styles.status} ${status.type === 'success' ? styles.statusSuccess : styles.statusError}`}
            >
              {status.message}
            </p>
          )}

          <div className={styles.submitWrapper}>
            <Button type="submit" variant="primary" fullWidth className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : data.submitLabel}
            </Button>
            <p className={styles.submitHint}>
              Your inquiry will be sent directly to{' '}
              <a className={styles.submitHintLink} href={`mailto:${data.email}`}>
                {data.email}
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
