'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = 'idle' | 'pending' | 'success' | 'error';

export default function NatureCareForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('pending');
    const form = e.currentTarget;
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="nc-cta-form" onSubmit={handleSubmit}>
      <div className="nc-cta-form-row">
        <label>
          <span>Name *</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email *</span>
          <input type="email" name="email" placeholder="Your email" required />
        </label>
      </div>
      <div className="nc-cta-form-row">
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="Your phone number" />
        </label>
        <label>
          <span>Enquiry Type *</span>
          <select name="enquiry_type" defaultValue="" required>
            <option value="" disabled>Select type</option>
            <option>Farming Practices</option>
            <option>Product Enquiry</option>
            <option>Wholesale or Bulk Enquiry</option>
            <option>Partnership</option>
            <option>General Enquiry</option>
          </select>
        </label>
      </div>
      <label className="nc-cta-form-full">
        <span>Message *</span>
        <textarea name="message" placeholder="Tell us what you have in mind…" rows={4} required />
      </label>

      {status === 'success' && (
        <p className="nc-cta-form-msg nc-cta-form-success">
          Thank you! We will get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="nc-cta-form-msg nc-cta-form-error">
          We couldn&apos;t send your message. Please try again or email rajaorganics@gmail.com directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary nc-cta-submit" disabled={status === 'pending'}>
        {status === 'pending' ? 'Sending…' : 'Send Message'} <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}
