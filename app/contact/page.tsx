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
                <div><strong>Address</strong><span>Green Valley Road, Thondamuthur,<br />Coimbatore, Tamil Nadu – 641109</span></div>
                <div><strong>Phone</strong><span>+91 98765 33578</span></div>
                <div><strong>Email</strong><span>rajaorganics@gmail.com</span></div>
              </div>
            </Reveal>

            <Reveal className="enquiry-card reveal-right" delay={100}>
              <span className="section-kicker">SEND US AN ENQUIRY</span>
              <h2>Send Us an Enquiry</h2>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="sub-section sub-section-soft">
          <div className="site-container visit-grid">
            <Reveal className="section-heading bordered-heading gold-border reveal-left">
              <span className="section-kicker">VISIT US</span>
              <h2>Come closer to where it all begins.</h2>
              <p>Raja Organic Farms, Green Valley Road, Thondamuthur, Coimbatore, Tamil Nadu – 641109.</p>
            </Reveal>
            <Reveal className="section-heading reveal-right" delay={100}>
              <span className="section-kicker">FOLLOW OUR JOURNEY</span>
              <h2>Follow Our Journey</h2>
              <p>Stay connected with Raja Organic Farms and discover more about our farms, products, cultivation practices and our journey towards more responsible agriculture.</p>
              <div className="follow-links"><span>Facebook</span><span>Instagram</span><span>YouTube</span></div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
