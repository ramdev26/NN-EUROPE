import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const countries = [
  { name: 'Poland', code: 'PL', flag: '🇵🇱', image: 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1470&auto=format&fit=crop' },
  {
    name: 'Serbia',
    code: 'RS',
    flag: '🇷🇸',
    image:
      'https://images.pexels.com/photos/31003267/pexels-photo-31003267.jpeg?auto=compress&cs=tinysrgb&w=1374&h=2060&fit=crop',
  },
  {
    name: 'Romania',
    code: 'RO',
    flag: '🇷🇴',
    image:
      'https://images.pexels.com/photos/34504268/pexels-photo-34504268.jpeg?auto=compress&cs=tinysrgb&w=1374&h=2060&fit=crop',
  },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1470&auto=format&fit=crop' },
  { name: 'Hungary', code: 'HU', flag: '🇭🇺', image: 'https://images.unsplash.com/photo-1551867633-194f125bddfa?q=80&w=1471&auto=format&fit=crop' },
];

export default function Countries() {
  return (
    <section id="countries" className="section-padding bg-brand-accent/20 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              Our Destinations
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Strategic <span className="text-gold italic">Gateways</span> to Europe
            </motion.h2>
            <p className="text-lg text-white/50 leading-relaxed">
              We help you understand the requirements, documents, and preparation steps for selected European destinations, with a special focus on Poland work visa support.
            </p>
          </div>
          <button className="bg-white/5 hover:bg-brand-gold hover:text-brand-navy border border-white/10 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group w-fit">
            Explore All Regions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-3/4 rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl"
            >
              <img 
                src={country.image} 
                alt={country.name} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-115 grayscale-[30%] group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="absolute inset-0 border border-white/0 group-hover:border-brand-gold/30 transition-all duration-500 rounded-[2rem] m-3" />

              <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 glass-dark rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                  {country.flag}
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{country.name}</h3>
                <div className="flex items-center gap-2 opacity-60 text-xs font-bold uppercase tracking-widest text-brand-gold-bright">
                  <span>{country.code}</span>
                  <div className="w-1 h-1 rounded-full bg-brand-gold" />
                  <span>Schengen Area</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
