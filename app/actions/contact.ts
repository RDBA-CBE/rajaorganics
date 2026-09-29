'use server';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const phone = formData.get('phone')?.toString().trim();
  const enquiryType = formData.get('enquiryType')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !enquiryType || !message) {
    return { status: 'error', message: 'Please fill in all required fields.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' };
  }

  // TODO: integrate email service (e.g. AWS SES) here
  console.log('Contact form submission:', { name, email, phone, enquiryType, message });

  return { status: 'success', message: 'Thank you! We will get back to you shortly.' };
}
