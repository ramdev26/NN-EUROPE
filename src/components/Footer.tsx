import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -mb-64 -mr-64 pointer-events-none" />
      
      <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24 relative z-10">
        <div className="space-y-8">
          <BrandLogo size="footer" />
          <p className="text-white/40 text-sm md:text-base leading-relaxed font-semibold">
            Personal visa consultation and document guidance for clients preparing for genuine European opportunities.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center hover:bg-gold hover:text-brand-navy transition-all duration-500 hover:-translate-y-1">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px] text-brand-gold">Support</h4>
          <ul className="space-y-5 text-sm md:text-base font-semibold text-white/40">
            {['Visa Consultation', 'Document Review', 'Poland Process', 'Embassy Preparation', 'Client Follow-up'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-brand-gold transition-all flex items-center gap-2 group">
                  <span className="w-0 h-px bg-brand-gold group-hover:w-4 transition-all duration-300" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px] text-brand-gold">Services</h4>
          <ul className="space-y-4 text-sm md:text-base font-semibold text-white/40">
            {['Poland Work Visa', 'TRC Document Check', 'Passport File Review', 'Application Guidance', 'Schengen Entry Support'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-brand-gold transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-8 rounded-3xl border-white/5 space-y-8">
          <h4 className="text-lg font-bold text-white">Contact</h4>
          <ul className="space-y-6 text-sm md:text-base font-medium">
            <li className="flex items-start gap-4">
              <MapPin size={22} className="text-brand-gold shrink-0 mt-1" />
              <span className="text-white/50 leading-relaxed">Online consultation support for Poland visa applicants</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={22} className="text-brand-gold" />
              <span className="text-white/50">+48 573 821 002</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={22} className="text-brand-gold" />
              <span className="text-white/50">navinnimesh25@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-custom pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs md:text-sm font-bold text-white/20 uppercase tracking-widest relative z-10">
        <p>© 2026 NN Europe Consultant. Personal visa consultation service.</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a href="#visa-form" className="hover:text-brand-gold transition-colors">Client Form</a>
          <a href="#services" className="hover:text-brand-gold transition-colors">Services</a>
          <a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
