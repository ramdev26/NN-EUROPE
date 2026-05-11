import { motion } from 'motion/react';
import { Trophy, CheckCircle, Globe, Users } from 'lucide-react';

const stats = [
  { icon: CheckCircle, value: '98.7%', label: 'Visa Approval' },
  { icon: Users, value: '15k+', label: 'Happy Clients' },
  { icon: Globe, value: '25+', label: 'Destinations' },
  { icon: Trophy, value: '12+', label: 'Years Experience' },
];

export default function Stats() {
  return (
    <section className="relative z-20 px-5">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 lg:p-20 -mt-20 md:-mt-32 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-linear-to-br from-brand-gold/5 via-transparent to-blue-500/5 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group/item"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] text-brand-gold mb-5 group-hover/item:bg-gold group-hover/item:text-brand-navy group-hover/item:scale-110 shadow-lg transition-all duration-500 border border-white/5">
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-gold font-display">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
