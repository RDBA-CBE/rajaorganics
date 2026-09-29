'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = 'idle' | 'pending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <label>
        Name *
        <input type="text" name="name" placeholder="Enter Name" required />
      </label>
      <label>
        Email Address *
        <input type="email" name="email" placeholder="Enter Email" required />
      </label>
      <label>
        Phone Number
        <input type="tel" name="phone" placeholder="Enter Phone Number" />
      </label>
      <label>
        Enquiry Type *
        <select name="enquiry_type" defaultValue="" required>
          <option value="" disabled>Select Enquiry Type</option>
          <option>Product Enquiry</option>
          <option>Wholesale or Bulk Enquiry</option>
          <option>Business Partnership</option>
          <option>Farm Visit</option>
          <option>General Enquiry</option>
        </select>
      </label>
      <label className="full-field">
        Message *
        <textarea name="message" placeholder="Enter Message" rows={5} required />
      </label>

      {status === 'success' && (
        <p className="full-field" style={{ color: '#284500', fontSize: 13, margin: 0 }}>
          Thank you! We will get back to you shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="full-field" style={{ color: '#c0392b', fontSize: 13, margin: 0 }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary form-submit" disabled={status === 'pending'}>
        {status === 'pending' ? 'Sending…' : 'Send Enquiry'} <span>→</span>
      </button>
    </form>
  );
}
