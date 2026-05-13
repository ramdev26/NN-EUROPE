import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, FileText, MessageCircle, ShieldCheck, UserCheck } from 'lucide-react';

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
              Personal Poland Visa Consultation Support
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
            Clear guidance for Poland work visa preparation, documentation, embassy steps, and the Schengen entry journey.
            Built for hardworking clients who want honest support without false promises.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#visa-form" className="bg-gold text-brand-navy px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
              Start Client Form <ArrowRight size={22} />
            </a>
            <a href="#services" className="glass-dark border border-white/10 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 text-center">
              Explore Services
            </a>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap gap-x-8 gap-y-4 items-center">
            {[
              { icon: ShieldCheck, text: 'Transparent Guidance' },
              { icon: FileText, text: 'Document Support' },
              { icon: CheckCircle2, text: 'Step-by-Step Process' },
              { icon: UserCheck, text: 'Personal Follow-Up' },
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

        {/* Client form callout */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 xl:col-span-4"
        >
          <div className="rounded-[1.75rem] border border-white/15 bg-brand-navy/55 p-8 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl relative overflow-hidden ring-1 ring-white/5 group md:rounded-[2rem] md:p-10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/15 blur-[100px] rounded-full -mr-24 -mt-24 group-hover:bg-brand-gold/25 transition-all duration-700" />

            <div className="relative z-10">
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/10 text-brand-gold">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">Ready to start your Poland process?</h3>
              <p className="mt-4 text-base leading-relaxed text-white/60">
                Complete the client details form with your contact information and required documents so we can review your file and contact you for the next step.
              </p>
              <div className="my-7 h-px w-full bg-linear-to-r from-brand-gold/60 via-white/10 to-transparent" />
              <ul className="space-y-3 text-sm font-semibold text-white/70">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-gold" size={18} />
                  Poland work visa consultation
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-gold" size={18} />
                  TRC, passport, and national ID uploads
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-brand-gold" size={18} />
                  Personal review and follow-up by email or WhatsApp
                </li>
              </ul>
              <a
                href="#visa-form"
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gold py-5 text-lg font-bold text-brand-navy shadow-xl shadow-brand-gold/20 transition-all hover:scale-[1.01] hover:shadow-brand-gold/30 active:scale-[0.99]"
              >
                Fill Visa Form <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
