import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 2.8c.5-.2 1.1 0 1.4.5l2 3.7c.3.5.2 1.1-.2 1.5L8.3 9.9c1 2.2 2.7 3.9 4.9 4.9l1.4-1.5c.4-.4 1-.5 1.5-.2l3.7 2c.5.3.7.9.5 1.4l-1 3.1c-.2.6-.8 1-1.4 1C9.9 20.6 3.4 14.1 3.4 6.1c0-.6.4-1.2 1-1.4l2.2-.9Z" fill="currentColor"/></svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17v-13Zm1.7 1.7L12 12l6.8-4.8H5.2Zm13.6 9.6V9.3L12 14.1 5.2 9.3v7.5h13.6Z" fill="currentColor"/></svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.7a7 7 0 0 0-7 7c0 5 7 11.6 7 11.6s7-6.6 7-11.6a7 7 0 0 0-7-7Zm0 9.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Z" fill="currentColor"/></svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.8 8H17V4.5h-3.2c-3.4 0-5.3 2-5.3 5.2V12H6v3.5h2.5V22h3.8v-6.5h3.2L16 12h-3.7V9.9c0-1.2.4-1.9 1.5-1.9Z" fill="currentColor"/></svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.6 3h8.8A4.6 4.6 0 0 1 21 7.6v8.8a4.6 4.6 0 0 1-4.6 4.6H7.6A4.6 4.6 0 0 1 3 16.4V7.6A4.6 4.6 0 0 1 7.6 3Zm0 1.8a2.8 2.8 0 0 0-2.8 2.8v8.8a2.8 2.8 0 0 0 2.8 2.8h8.8a2.8 2.8 0 0 0 2.8-2.8V7.6a2.8 2.8 0 0 0-2.8-2.8H7.6ZM12 7.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5-2.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" fill="currentColor"/></svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.1c-.2-1.5-.8-2.4-2.2-2.7C17.3 5 12 5 12 5s-5.3 0-6.8.4C3.8 5.7 3.2 6.6 3 8.1 2.8 9.2 2.8 12 2.8 12s0 2.8.2 3.9c.2 1.5.8 2.4 2.2 2.7C6.7 19 12 19 12 19s5.3 0 6.8-.4c1.4-.3 2-1.2 2.2-2.7.2-1.1.2-3.9.2-3.9s0-2.8-.2-3.9ZM10.2 15V9l5.2 3-5.2 3Z" fill="currentColor"/></svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-pattern" aria-hidden="true" />

      <div className="site-container footer-grid">
        <Reveal className="footer-brand">
          <Image className="footer-logo" src="/images/ftr-logo.svg" width={82} height={82} alt="Raja Organic Farms" />
          <h2>In Harmony with Nature.<br /><em>Growing for Tomorrow.</em></h2>
          <div className="footer-tags">
            <span>RESPONSIBLE AGRICULTURE</span>
            <span>QUALITY PRODUCE</span>
            <span>CARE FOR NATURE</span>
            <span>SUSTAINABLE THINKING</span>
          </div>
        </Reveal>

        <Reveal className="footer-column" delay={70}>
          <h3>EXPLORE</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Our Products</Link>
          <Link href="/nature-care">Nature Care</Link>
          <Link href="/contact">Contact Us</Link>
        </Reveal>

        <Reveal className="footer-column footer-contact" delay={140}>
          <h3>CONNECT</h3>
          <p className="footer-contact-row"><span className="footer-line-icon"><PhoneIcon /></span><span>+91 96989 04457</span></p>
          <p className="footer-contact-row"><span className="footer-line-icon"><MailIcon /></span><span>mouneshrajav472000@gmail.com</span></p>
          <p className="footer-contact-row footer-address"><span className="footer-line-icon"><PinIcon /></span><span>Raja Organic Farms<br />71, Pudur Vellangattuvalasu,<br />Kanagapuram, Erode - 638112.</span></p>

          
        </Reveal>

        <Reveal className="footer-column footer-social" delay={210}>
          <h3>FOLLOW</h3>
          <a href="#" aria-label="Facebook"><b className="social fb"><FacebookIcon /></b><span>Facebook</span></a>
          <a href="#" aria-label="Instagram"><b className="social ig"><InstagramIcon /></b><span>Instagram</span></a>
          <a href="#" aria-label="YouTube"><b className="social yt"><YouTubeIcon /></b><span>Youtube</span></a>
        </Reveal>
      </div>

      <div className="site-container footer-bottom">
        <span>© Raja Organic Farms. All Rights Reserved. Concept by repute</span>
        <div>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
