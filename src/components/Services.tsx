import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Users, History, FileText, Compass } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Work Visa',
    description: 'Relocate for professional growth with high-paying career opportunities across the EU.',
  },
  {
    icon: GraduationCap,
    title: 'Student Visa',
    description: 'Get admission into top European universities with full residency and work support.',
  },
  {
    icon: Users,
    title: 'Family Visa',
    description: 'Bring your loved ones with you. Expert guidance for family reunification programs.',
  },
  {
    icon: Compass,
    title: 'Visit Visa',
    description: 'Explore the beauty and culture of Europe with seamless tourist visa processing.',
  },
  {
    icon: FileText,
    title: 'Document Prep',
    description: 'Professional legal documentation, translation, and notarization for error-free applications.',
  },
  {
    icon: History,
    title: 'Consultation Support',
    description: '24/7 dedicated support throughout your journey, from first step to final landing.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-brand-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4"
          >
            Our Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Premium Solutions for <span className="text-gold italic">Global </span> Profiles
          </motion.h2>
          <p className="text-lg text-white/50 leading-relaxed">
            We provide end-to-end solutions for all your European relocation needs. 
            Our expert consultants navigate the legislative local landscape while you prepare for your future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="glass p-10 rounded-[2rem] border-white/5 hover:border-brand-gold/40 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />
              
              <div className="w-16 h-16 bg-white/[0.03] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-brand-navy shadow-lg transition-all duration-500">
                <service.icon size={32} className="text-brand-gold group-hover:text-brand-navy transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-brand-gold font-bold text-sm">View Success Stories</span>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Compass size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
