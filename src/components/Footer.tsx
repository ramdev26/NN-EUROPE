import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -mb-64 -mr-64 pointer-events-none" />
      
      <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gold rounded-full flex items-center justify-center font-display font-bold text-brand-navy shadow-lg shadow-brand-gold/20">
              NN
            </div>
            <span className="font-display text-2xl font-bold tracking-tight">
              EUROPE <span className="text-brand-gold">CONSULTANT</span>
            </span>
          </div>
          <p className="text-white/40 text-sm md:text-base leading-relaxed font-semibold">
            Authorized gatekeeper for European relocation. We deliver elite visa consultancy for specialized professionals and visionary families.
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
          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px] text-brand-gold">Corporate</h4>
          <ul className="space-y-5 text-sm md:text-base font-semibold text-white/40">
            {['Global Services', 'Specific Markets', 'Success Ratio', 'Executive Staffing', 'Legal Compliance'].map((link) => (
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
          <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-[10px] text-brand-gold">Destinations</h4>
          <ul className="space-y-4 text-sm md:text-base font-semibold text-white/40">
            {['Poland Business Hub', 'German Career Entry', 'Serbian Digital Residency', 'Romanian Tech Visa', 'Hungarian Investment'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-brand-gold transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass p-8 rounded-3xl border-white/5 space-y-8">
          <h4 className="text-lg font-bold text-white">LHQ Center</h4>
          <ul className="space-y-6 text-sm md:text-base font-medium">
            <li className="flex items-start gap-4">
              <MapPin size={22} className="text-brand-gold shrink-0 mt-1" />
              <span className="text-white/50 leading-relaxed">Executive Tower, Warsaw Central District Office 2201, Poland</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={22} className="text-brand-gold" />
              <span className="text-white/50">+48 573 821 002</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={22} className="text-brand-gold" />
              <span className="text-white/50">exec@nneurope.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-custom pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs md:text-sm font-bold text-white/20 uppercase tracking-widest relative z-10">
        <p>© 2024 NN Europe Consultant. ISO 9001 Certified.</p>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Protocol</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Client Agreement</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Global Audit</a>
        </div>
      </div>
    </footer>
  );
}
