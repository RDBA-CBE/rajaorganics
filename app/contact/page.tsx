import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Raja Organic Farms for product, wholesale, business partnership, farm visit and general enquiries.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="contact-hero">
          <div className="contact-hero-media">
            <Image
              src="/images/naturecare/contact-hero.webp"
              alt="Raja Organic Farms"
              fill
              priority
              sizes="100vw"
              className="contact-hero-img"
            />
            <div className="contact-hero-overlay" aria-hidden="true" />
          </div>
          <div className="site-container contact-hero-inner">
            <Reveal className="contact-hero-copy">
              <span className="contact-hero-kicker">CONTACT US</span>
              <h1 className="contact-hero-title">Let&apos;s Grow a Better<br />Future Together.</h1>
              <p className="contact-hero-intro">Whether you would like to know more about our products, explore a business opportunity or simply learn more about the way we farm, we would be happy to hear from you.</p>
            </Reveal>
          </div>
        </section>

        <section className="sub-section">
          <div className="site-container contact-layout">
            <Reveal className="contact-info reveal-left">
              <span className="section-kicker">GET IN TOUCH</span>
              <h2>Connect with Raja Organic Farms</h2>
              <div className="contact-details">
                <div><span>RAJA ORGANIC FARMS</span></div>
                <div><strong>Address</strong><span>71, Pudur Vellangattuvalasu,,<br />Kanagapuram, Erode - 638112.</span></div>
                <div><strong>Phone</strong><span>+91 96989 04457</span></div>
                <div><strong>Email</strong><span>mouneshrajav472000@gmail.com</span></div>
              </div>
            </Reveal>

            <Reveal className="enquiry-card reveal-right" delay={100}>
              <span className="section-kicker">SEND US AN ENQUIRY</span>
              <h2>Send Us an Enquiry</h2>
              <ContactForm />
            </Reveal>
          </div>
        </section>

     <section className="sub-section-soft">
  
       <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31305.223195725972!2d77.64490007558148!3d11.250160512448181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba971c4222ef4f1%3A0xe5eace8f2a57c19f!2sKanagapuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1790741742106!5m2!1sen!2sin"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Raja Organic Farms Location"
        />
  
</section>
      </main>
      <Footer />
    </>
  );
}
