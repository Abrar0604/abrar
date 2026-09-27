import { motion } from 'framer-motion';
import { contact } from '../data/world';

export default function HeroSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="min-h-[80vh] flex flex-col justify-center items-start md:items-center text-left md:text-center ml-6 md:ml-0 mb-32"
    >
      <div className="ink-border p-5 sm:p-8 md:p-12 bg-[#E8DFD0] max-w-2xl w-full relative shadow-[4px_4px_0_0_#2B2620] sm:shadow-[8px_8px_0_0_#2B2620] overflow-hidden">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#E4B65C] ink-border flex items-center justify-center">
          <div className="w-2 h-2 bg-[#2B2620]"></div>
        </div>
        
        <h1 className="font-display text-xs sm:text-base md:text-2xl lg:text-3xl mb-4 text-[#2B2620] leading-relaxed">ABRAR AHAMMAD</h1>
        
        <p className="dot-matrix text-base sm:text-lg md:text-xl text-[#9CB88F] font-bold mb-4">
          AI/ML ENGINEER | FULL STACK GENAI | DATA SCIENCE
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-[#2B2620] mb-6">
          I build multi-agent systems, RAG pipelines, and full-stack GenAI products. Currently engineering at Accenture. B.Tech AI &amp; Data Science (8.87 CGPA).
        </p>

        {/* CTA Row — right here, not buried at the bottom */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <a
            href="/Abrar_Ahammad_Resume.pdf"
            download
            className="ink-border px-4 py-2 sm:py-3 text-center font-display text-xs cursor-pointer hover:bg-[#F4EFE6] transition-colors leading-relaxed"
            style={{ backgroundColor: '#E4B65C', color: '#2B2620' }}
          >
            DOWNLOAD RESUME
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-border px-4 py-2 sm:py-3 text-center text-base sm:text-lg cursor-pointer hover:bg-[#E8DFD0] transition-colors dot-matrix"
            style={{ backgroundColor: '#8FA6B2', color: '#2B2620' }}
          >
            LINKEDIN
          </a>
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ink-border px-4 py-2 sm:py-3 text-center text-base sm:text-lg cursor-pointer hover:bg-[#E8DFD0] transition-colors dot-matrix"
            style={{ backgroundColor: '#9CB88F', color: '#2B2620' }}
          >
            GITHUB
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="ink-border px-4 py-2 sm:py-3 text-center text-sm sm:text-base cursor-pointer hover:bg-[#E8DFD0] transition-colors dot-matrix break-all"
            style={{ backgroundColor: '#F4EFE6', color: '#2B2620' }}
          >
            {contact.email}
          </a>
        </div>
      </div>
      <div className="mt-12 text-[#8FA6B2] dot-matrix animate-pulse text-base">
        SCROLL TO EXPLORE v
      </div>
    </motion.section>
  );
}
