import { motion } from 'motion/react';
import { Trophy, CheckCircle2, Globe, Users } from 'lucide-react';

const stats = [
  { icon: CheckCircle2, value: '98.7%', label: 'Visa approval' },
  { icon: Users, value: '15k+', label: 'Happy clients' },
  { icon: Globe, value: '25+', label: 'Destinations' },
  { icon: Trophy, value: '12+', label: 'Years experience' },
] as const;

export default function Stats() {
  return (
    <section className="relative z-20 px-5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative -mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-brand-navy/80 p-6 shadow-[0_40px_100px_-24px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:-mt-28 md:rounded-[2.5rem] md:p-8 lg:-mt-32 lg:rounded-[3rem] lg:p-10 xl:p-12"
        >
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-gold/45 to-transparent md:inset-x-12"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-brand-gold/[0.06] via-transparent to-blue-500/[0.04]" aria-hidden />

          <div className="relative z-10 mb-8 text-center md:mb-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-gold-bright/90 md:text-xs">
              Track record
            </p>
            <p className="mt-2 font-display text-lg text-white/50 md:text-xl">Numbers that reflect real outcomes</p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="group/item flex min-h-[11.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-7 text-center shadow-inner shadow-black/20 transition-all duration-300 hover:border-brand-gold/30 hover:bg-white/[0.05] sm:min-h-[12.5rem] sm:rounded-[1.35rem] sm:px-4 sm:py-8 md:min-h-[13rem] md:py-9"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-brand-navy/60 text-brand-gold transition-all duration-300 group-hover/item:scale-105 group-hover/item:border-brand-gold/25 group-hover/item:bg-brand-gold/10 md:h-14 md:w-14 md:rounded-2xl">
                  <stat.icon className="size-[1.35rem] md:size-7" strokeWidth={2} />
                </div>

                <p className="font-display text-[1.65rem] font-bold leading-none tracking-tight text-gold tabular-nums sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-none">
                  {stat.value}
                </p>

                <span
                  className="mx-auto mt-4 block h-px w-10 bg-linear-to-r from-transparent via-brand-gold/50 to-transparent md:mt-5 md:w-12"
                  aria-hidden
                />

                <p className="mt-3 max-w-[11rem] text-[11px] font-bold uppercase leading-snug tracking-[0.14em] text-white/65 sm:text-xs sm:tracking-[0.16em] md:mt-3.5 md:max-w-none md:text-[0.8125rem]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
