import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function ArmorySection() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-40 flex flex-col md:flex-row-reverse items-center relative pl-8 md:pl-0"
    >
      {/* Node marker on the line */}
      <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-[#8FA6B2] ink-border z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#2B2620]"></div>
      </div>

      <div className="md:w-1/2 md:pl-16 text-left w-full">
        <h2 className="font-display text-xl mb-6 text-[#2B2620]">THE ARMORY</h2>
        <div className="space-y-6">
          {skills.map((cat, idx) => (
            <motion.div 
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="ink-border p-5 bg-[#E8DFD0] shadow-[4px_4px_0_0_#2B2620]"
            >
              <h3 className="font-display text-sm mb-3" style={{ color: '#E4B65C' }}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="ink-border-thin bg-[#F4EFE6] px-2 py-1 text-base dot-matrix"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </motion.section>
  );
}
