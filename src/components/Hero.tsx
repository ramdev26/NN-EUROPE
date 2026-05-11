import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronDown, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20 pb-24 md:pt-32 md:pb-28">
      {/* Background with cinematic Europe city */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop" 
          alt="European City" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-navy/95 via-brand-navy/20 to-brand-navy/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,15,29,0.55)_100%)]" />
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
          
          <h1 className="mb-8 max-w-3xl font-bold tracking-tight">
            <span className="block text-[0.7rem] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold-bright/95 mb-5 md:mb-6">
              Your trusted path to Europe
            </span>
            <span className="block text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl text-white">
              Your European dream
            </span>
            <span className="mt-2 block text-4xl leading-[1.12] sm:text-5xl sm:leading-[1.1] md:text-6xl lg:text-7xl">
              <span className="text-gold italic">starts here</span>
              <span className="text-white">.</span>
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-medium">
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
                className="flex items-center gap-2.5 text-sm md:text-base text-white/70"
              >
                <badge.icon className="text-brand-gold" size={18} />
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
          <div className="rounded-[1.75rem] border border-white/15 bg-brand-navy/55 p-8 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl relative overflow-hidden ring-1 ring-white/5 group md:rounded-[2rem] md:p-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/15 blur-[100px] rounded-full -mr-24 -mt-24 group-hover:bg-brand-gold/25 transition-all duration-700" />

            <div className="relative z-10 mb-8">
              <h3 className="text-xl font-bold text-white md:text-2xl">Eligibility check</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                Tell us a little about your plans — we will match you with the right track.
              </p>
              <div className="mt-5 h-px w-full max-w-[12rem] bg-linear-to-r from-brand-gold/70 to-transparent" />
            </div>

            <form className="relative z-10 space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold-bright">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maria Kowalski"
                  autoComplete="name"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-[15px] text-white shadow-inner shadow-black/20 placeholder:text-white/40 focus:border-brand-gold focus:bg-white/[0.14] focus:outline-hidden focus:ring-2 focus:ring-brand-gold/25"
                />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold-bright">
                    Destination
                  </label>
                  <div className="relative">
                    <select className="w-full cursor-pointer appearance-none rounded-2xl border border-white/15 bg-white/10 py-4 pr-11 pl-4 text-[15px] text-white shadow-inner shadow-black/20 focus:border-brand-gold focus:bg-white/[0.14] focus:outline-hidden focus:ring-2 focus:ring-brand-gold/25 [&>option]:bg-brand-navy [&>option]:text-white">
                      <option>Poland</option>
                      <option>Serbia</option>
                      <option>Germany</option>
                      <option>Romania</option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 size-5 -translate-y-1/2 text-white/35"
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold-bright">
                    Visa type
                  </label>
                  <div className="relative">
                    <select className="w-full cursor-pointer appearance-none rounded-2xl border border-white/15 bg-white/10 py-4 pr-11 pl-4 text-[15px] text-white shadow-inner shadow-black/20 focus:border-brand-gold focus:bg-white/[0.14] focus:outline-hidden focus:ring-2 focus:ring-brand-gold/25 [&>option]:bg-brand-navy [&>option]:text-white">
                      <option>Work</option>
                      <option>Study</option>
                      <option>Family</option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 size-5 -translate-y-1/2 text-white/35"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="mt-2 w-full rounded-2xl bg-gold py-5 text-lg font-bold text-brand-navy shadow-xl shadow-brand-gold/20 transition-all hover:scale-[1.01] hover:shadow-brand-gold/30 active:scale-[0.99]"
              >
                Check my eligibility
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
