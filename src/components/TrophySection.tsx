import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

export default function TrophySection() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-40 flex flex-col md:flex-row items-center relative pl-8 md:pl-0"
    >
      {/* Node marker on the line */}
      <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-[#E4B65C] ink-border z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#2B2620]"></div>
      </div>

      <div className="md:w-1/2 md:pr-16 text-left w-full">
        <h2 className="font-display text-xl mb-6 text-[#2B2620]">TROPHY COAST</h2>
        
        {certifications.length === 0 ? (
          <div className="ink-border p-8 bg-[#E8DFD0] shadow-[6px_6px_0_0_#2B2620] text-center">
             <div className="mx-auto mb-6 w-16 h-16 ink-border bg-[#F4EFE6] flex items-center justify-center">
              <span className="font-display text-2xl text-[#C9C0AF]">?</span>
            </div>
            <p className="dot-matrix text-[#8FA6B2] text-xl mb-2">CHEST EMPTY</p>
            <p className="text-lg">No certifications collected yet. I prefer building things that actually work over hoarding PDF badges. (I'll get around to it eventually).</p>
          </div>
        ) : (
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="ink-border p-4 bg-[#E8DFD0] shadow-[4px_4px_0_0_#2B2620] flex items-center gap-4">
                <div className="w-12 h-12 ink-border bg-[#E4B65C] flex-shrink-0 flex items-center justify-center">
                   <span className="font-display text-xs text-[#2B2620]">*</span>
                </div>
                <div>
                  <p className="text-lg font-bold">{cert.name}</p>
                  <p className="text-base text-[#8FA6B2] dot-matrix">{cert.issuer} // {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="hidden md:block md:w-1/2"></div>
    </motion.section>
  );
}
