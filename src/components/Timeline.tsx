import { motion } from 'motion/react';

const steps = [
  {
    title: 'Consultation',
    desc: 'Deep dive into your background to find the best visa path for your goals.',
    icon: '01',
  },
  {
    title: 'Documentation',
    desc: 'Organize required documents, scans, uploads, and details before submission.',
    icon: '02',
  },
  {
    title: 'Visa Processing',
    desc: 'Guidance on the application steps and embassy-related requirements.',
    icon: '03',
  },
  {
    title: 'Travel Support',
    desc: 'Basic preparation support for travel planning after the application stage.',
    icon: '04',
  },
];

export default function Timeline() {
  return (
    <section id="process" className="section-padding bg-brand-accent/5">
      <div className="container-custom">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">The Journey</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold italic">Clear</span> Process
          </h2>
          <p className="text-white/50 text-lg">A simple roadmap that helps you understand what to prepare and what happens next.</p>
        </div>

        <div className="relative">
          {/* Vertical line - refined */}
          <div className="absolute top-0 bottom-0 left-[30px] md:left-1/2 w-px bg-linear-to-b from-brand-gold/50 via-brand-gold/10 to-transparent hidden md:block" />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="w-full md:w-1/2 md:px-16">
                  <motion.div
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`glass p-10 rounded-[2.5rem] border-white/5 relative group hover:border-brand-gold/20 transition-all duration-500 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <span className="text-6xl md:text-8xl font-display font-bold text-brand-gold/5 absolute -top-10 left-10 md:left-auto md:right-10 group-hover:text-brand-gold/10 transition-colors duration-500">
                      {step.icon}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 relative z-10">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed text-base md:text-lg relative z-10">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Center marker */}
                <div className="relative z-10 w-16 h-16 bg-brand-navy border border-white/10 rounded-full flex items-center justify-center shrink-0 group">
                  <div className="w-10 h-10 rounded-full border-2 border-brand-gold/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-3 h-3 bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]" />
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
