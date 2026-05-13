import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    q: 'How long does the Europe work visa take?',
    a: 'Processing times vary by country. Typically, Poland and Serbia take 4–8 weeks, while Germany can take 3–6 months depending on the specific track.',
  },
  {
    q: 'What are the basic requirements for a student visa?',
    a: 'You generally need an admission letter from a recognized university, proof of financial means, academic transcripts, and a valid passport.',
  },
  {
    q: 'Can I bring my family with me on a work visa?',
    a: 'Yes, most EU countries allow dependents. We specialize in family reunification programs alongside your main application.',
  },
  {
    q: 'Is a job offer mandatory before applying?',
    a: 'For most Work Visas, yes. However, some countries have job-seeker visas or specialized tracks for high-demand professionals.',
  },
  {
    q: 'Do you guarantee visa approval?',
    a: 'No. Visa decisions are made by the relevant authorities. We help you prepare documents, understand steps, and avoid common mistakes, but we do not make false approval promises.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-brand-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[800px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">Support Center</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Common <span className="text-gold italic">Queries</span>
          </h2>
          <p className="text-white/50 text-lg">Clear answers about visa preparation, documents, and client support.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-3xl overflow-hidden transition-all duration-500 ${active === i ? 'glass border-brand-gold/20 shadow-2xl shadow-brand-gold/5' : 'bg-white/[0.02] border border-white/5 hover:border-white/10'}`}>
              <button 
                className="w-full p-8 flex items-center justify-between text-left font-bold text-lg md:text-xl transition-all"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className={active === i ? 'text-brand-gold' : 'text-white'}>{faq.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${active === i ? 'bg-gold text-brand-navy rotate-180' : 'bg-white/5 text-white'}`}>
                  {active === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-white/50 leading-relaxed text-base md:text-lg border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
