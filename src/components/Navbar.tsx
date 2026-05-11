import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Countries', href: '#countries' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-navy/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 md:w-11 md:h-11 bg-gold rounded-full flex items-center justify-center font-display font-bold text-brand-navy group-hover:scale-110 shadow-lg shadow-brand-gold/20 transition-all duration-500">
            NN
          </div>
          <span className="font-display text-lg md:text-xl font-bold tracking-tight">
            EUROPE <span className="text-brand-gold">CONSULTANT</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/70 hover:text-brand-gold transition-all duration-300 relative group flex items-center gap-1"
            >
              {link.name}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
            </a>
          ))}
          <button className="bg-gold text-brand-navy px-7 py-3 rounded-full font-bold flex items-center gap-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="bg-gold text-brand-navy p-2 rounded-full font-bold hover:scale-105 transition-transform">
            <Phone size={18} />
          </button>
          <button className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-navy/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name} 
                  href={link.href} 
                  className="text-xl font-bold text-white/80 hover:text-brand-gold p-3 rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5">
                <button className="bg-gold text-brand-navy w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg shadow-xl shadow-brand-gold/10">
                  Book Free Consultation <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
