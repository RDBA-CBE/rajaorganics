import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Commitment from './components/Commitment';
import Products from './components/Products';
import Exports from './components/Exports';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <Philosophy />
      <Commitment />
      <Products />
      <Exports />
      <Footer />
    </main>
  );
}
