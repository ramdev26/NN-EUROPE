import { motion } from 'motion/react';
import { Target, Shield, Clock, Award } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Profile-Based Guidance',
    desc: 'A clear review of your skills, background, and goals before suggesting the next step.',
  },
  {
    icon: Shield,
    title: 'Honest Communication',
    desc: 'No false promises, no pressure. You receive practical guidance about the process and documents.',
  },
  {
    icon: Clock,
    title: 'Step-by-Step Support',
    desc: 'Guidance through document preparation, application stages, and embassy-related procedures.',
  },
  {
    icon: Award,
    title: 'Client-Focused Service',
    desc: 'Personal follow-up so you understand what is needed and what to prepare next.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1200px] max-h-[800px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              The NN Difference
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              Unparalleled <span className="text-gold italic">Standard</span> of Service
            </motion.h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
              Moving toward Europe is an important life decision. We keep the process clear, practical, and focused on genuine opportunities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-4 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-gold group-hover:text-brand-navy group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                    <reason.icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-gold transition-colors">{reason.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/5 group">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                alt="Expert Consultant" 
                className="w-full h-auto grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decors */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/10 blur-[80px] rounded-full -z-10" />
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 md:left-20 glass p-8 rounded-3xl border-white/10 shadow-3xl z-20 max-w-[200px]"
            >
              <div className="text-4xl font-display font-bold text-gold mb-2">1:1</div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 leading-tight">Personal guidance for each client</p>
            </motion.div>

            <div className="absolute top-20 -right-8 glass p-5 rounded-2xl border-white/10 shadow-2xl z-20 hidden md:block">
              <Shield size={24} className="text-brand-gold mb-2" />
              <div className="text-xs font-bold">Risk-Free Process</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
