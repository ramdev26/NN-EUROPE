import { motion } from 'motion/react';
import { CheckCircle2, Heart, Shield, Sparkles } from 'lucide-react';

const pillars = [
  'Trusted and transparent consultation',
  'Professional visa and documentation guidance',
  'Personalized support for each client',
  'Focused on genuine European opportunities',
  'Dedicated to client success and long-term trust',
];

const paragraphs = [
  'Founded on November 18, NN Europe Consultant was created with one clear mission, to guide people toward genuine European opportunities with honesty, transparency, and responsibility.',
  'We understand that many individuals have been misled by unreliable agencies and false promises. That is why NN Europe Consultant was established to provide a trustworthy and professional path for those who dream of building a future in Europe.',
  'At NN Europe Consultant, we help clients identify the right opportunities that match their skills, experience, and career goals. We specialize in Poland work visa consultation, documentation assistance, embassy procedures, and step-by-step guidance for entering Schengen countries legally and confidently.',
  'Our passion is helping hardworking individuals turn their European dream into a reality by offering safe, reliable, and client-focused support throughout the entire process.',
  'We believe every person deserves a fair opportunity to succeed, and we are committed to making the journey easier, clearer, and more secure for every client we serve.',
];

export default function AboutUs() {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-brand-accent/25 border-y border-white/5">
      <div className="absolute top-0 right-0 w-[min(100%,520px)] h-[520px] bg-brand-gold/[0.07] blur-[140px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em]">About Us</span>
            <span className="h-px flex-1 min-w-[3rem] bg-linear-to-r from-brand-gold/60 to-transparent max-w-[120px]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white/70">
              <Sparkles size={14} className="text-brand-gold" />
              Founded November 18
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
          >
            Your <span className="text-gold italic">trusted partner</span> for a real path to Europe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/55 leading-relaxed"
          >
            Honesty, transparency, and responsibility in every conversation — from first consultation to life in Europe.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.45 }}
                className="text-base md:text-lg text-white/65 leading-relaxed font-medium"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/15 border border-brand-gold/25 flex items-center justify-center">
                  <Shield className="text-brand-gold" size={24} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Why choose us</h3>
              </div>
              <ul className="space-y-4">
                {pillars.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex gap-3 text-sm md:text-base text-white/75 font-semibold leading-snug"
                  >
                    <CheckCircle2 className="text-brand-gold shrink-0 mt-0.5" size={20} strokeWidth={2.25} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative overflow-hidden rounded-[2rem] border border-brand-gold/30 p-8 md:p-10 bg-linear-to-br from-brand-gold/20 via-brand-navy to-brand-navy"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.15),transparent_55%)]" />
              <div className="relative flex flex-col sm:flex-row sm:items-center gap-8">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/20 p-3 shadow-lg">
                  <img
                    src="/logo.png"
                    alt=""
                    role="presentation"
                    className="h-full w-full object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-2xl md:text-3xl font-bold text-white mb-2">NN Europe Consultant</p>
                  <p className="text-lg md:text-xl text-brand-gold-bright font-semibold tracking-wide">
                    Your Trusted Path To Europe.
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                    <Heart size={14} className="text-brand-gold" />
                    Client-first, always
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
