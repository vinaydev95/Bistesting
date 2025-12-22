import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Header from './components/Header';


export default function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
