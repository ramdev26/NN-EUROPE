import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Software Engineer',
    image: 'https://i.pravatar.cc/150?u=sarah',
    content: 'NN Europe made my move to Germany incredibly smooth. Their expertise in work visa processing is unmatched.',
  },
  {
    name: 'Robert C. ',
    role: 'Business Owner',
    image: 'https://i.pravatar.cc/150?u=robert',
    content: 'I was struggling with Poland business visa for months. NN Europe resolved it in just 3 weeks. Highly recommended!',
  },
  {
    name: 'Elena Petrova',
    role: 'Project Manager',
    image: 'https://i.pravatar.cc/150?u=elena',
    content: 'The level of professionalism and care they show is rare. They didn’t just help with the visa, but with settling in too.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="container-custom">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4">Client Voices</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted by <span className="text-gold italic">Global</span> Leaders
          </h2>
          <p className="text-white/50 text-lg">Success stories from professionals who are now thriving in the heart of Europe.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group border-white/5 hover:border-brand-gold/30 transition-all duration-500"
            >
              <Quote className="text-brand-gold/10 absolute top-8 right-10 group-hover:text-brand-gold/20 transition-colors" size={70} />
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-lg text-white/70 italic mb-10 relative z-10 leading-relaxed font-display">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5 mt-auto">
                <div className="relative">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border border-white/10 group-hover:scale-105 transition-transform shadow-lg" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brand-gold rounded-full border-2 border-brand-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-brand-gold transition-colors">{t.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
