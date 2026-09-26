import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center items-start md:items-center text-left md:text-center ml-8 md:ml-0 mb-32"
    >
      <div className="ink-border p-8 md:p-12 bg-[#E8DFD0] max-w-2xl relative shadow-[8px_8px_0_0_#2B2620]">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#E4B65C] ink-border flex items-center justify-center">
          <div className="w-2 h-2 bg-[#2B2620]"></div>
        </div>
        
        <h1 className="font-display text-base sm:text-xl md:text-3xl mb-6 text-[#2B2620]">ABRAR AHAMMAD</h1>
        <p className="dot-matrix text-lg md:text-xl text-[#2B2620] mb-4">
          SYSTEM INITIALIZATION... (SIGH) OK, WE'RE DOING THIS.
        </p>
        <p className="text-xl md:text-2xl text-[#2B2620]">
          Final-year AI &amp; Data Science engineer. I build multi-agent systems, RAG pipelines, and full-stack GenAI products so you don't have to pretend you know how.
        </p>
      </div>
      <div className="mt-12 text-[#8FA6B2] dot-matrix animate-pulse">
        SCROLL TO COMMENCE JOURNEY v
      </div>
    </motion.section>
  );
}
