import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Header from './components/Header';
import FloatingContact from './components/FloatingContact';

export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <FloatingContact />
    </>
  );
}
