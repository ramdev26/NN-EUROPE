import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-32 pb-32 md:pb-40 overflow-hidden">
      {/* Background with cinematic Europe city */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop" 
          alt="European City" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-transparent to-brand-navy/90" />
      </div>

      <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 xl:col-span-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 glass rounded-full mb-8 border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-bright">
              Authorized European Immigration Partner
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight">
            Your Dream <span className="text-gold italic">Europe</span> Journey Starts Here
          </h1>
          
          <p className="text-lg md:text-xl text-white/75 mb-10 max-w-2xl leading-relaxed">
            Premium consultancy for visa processing, relocation, and career expansion in the heart of Europe. 
            Trusted by global professionals for seamless, high-success transitions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-gold text-brand-navy px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
              Book Free Consultation <ArrowRight size={22} />
            </button>
            <button className="glass-dark border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center">
              Explore Services
            </button>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap gap-x-8 gap-y-4 items-center">
            {[
              { icon: ShieldCheck, text: 'Licensed Consultants' },
              { icon: Zap, text: 'Fast-Track Processing' },
              { icon: CheckCircle2, text: '99% Success Rate' },
              { icon: Users, text: '15k+ Global Profiles' },
            ].map((badge, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="flex items-center gap-2.5 text-sm md:text-base text-white/50"
              >
                <badge.icon className="text-brand-gold/70" size={18} />
                <span className="font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 xl:col-span-4"
        >
          <div className="glass-dark p-8 md:p-10 rounded-3xl border-white/5 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:bg-brand-gold/20 transition-all duration-700" />
            
            <h3 className="text-2xl font-bold mb-8 text-gold flex items-center gap-3">
              Eligibility Check
              <div className="flex-1 h-px bg-linear-to-r from-brand-gold/50 to-transparent" />
            </h3>
            
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Richard European" 
                  className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-5 py-4 focus:outline-hidden focus:border-brand-gold focus:bg-white/[0.08] transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Destination</label>
                  <select className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-4 focus:outline-hidden focus:border-brand-gold focus:bg-white/[0.08] transition-all appearance-none">
                    <option className="bg-brand-navy">Poland</option>
                    <option className="bg-brand-navy">Serbia</option>
                    <option className="bg-brand-navy">Germany</option>
                    <option className="bg-brand-navy">Romania</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Visa Type</label>
                  <select className="w-full bg-white/[0.05] border border-white/10 rounded-2xl px-4 py-4 focus:outline-hidden focus:border-brand-gold focus:bg-white/[0.08] transition-all appearance-none">
                    <option className="bg-brand-navy">Work</option>
                    <option className="bg-brand-navy">Study</option>
                    <option className="bg-brand-navy">Family</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-gold text-brand-navy py-5 rounded-2xl font-bold text-lg mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-gold/10">
                Check My Eligibility
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
