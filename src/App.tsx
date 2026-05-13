import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Countries from './components/Countries';
import AboutUs from './components/AboutUs';
import VisaClientForm from './components/VisaClientForm';
import WhyChooseUs from './components/WhyChooseUs';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-gold z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <AboutUs />
        <VisaClientForm />
        <Services />
        <Countries />
        <WhyChooseUs />
        <Timeline />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] -right-[10%] w-[35%] h-[35%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
