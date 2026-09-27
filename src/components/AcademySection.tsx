import { motion } from 'framer-motion';
import { AcademyIcon } from './SectionIcons';

export default function AcademySection() {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-40 flex flex-col md:flex-row items-center relative pl-6 md:pl-0"
    >
      {/* Node marker on the line */}
      <div className="absolute left-[-12px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-[#9CB88F] ink-border z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#2B2620]"></div>
      </div>

      <div className="md:w-1/2 md:pr-16 text-left w-full">
        <h2 className="font-display text-sm sm:text-lg md:text-xl mb-6 text-[#2B2620] leading-relaxed">THE ACADEMY</h2>
        <div className="ink-border p-4 sm:p-6 bg-[#E8DFD0] shadow-[4px_4px_0_0_#2B2620] sm:shadow-[6px_6px_0_0_#2B2620] mb-6 overflow-hidden">
          <h3 className="dot-matrix text-[#E4B65C] mb-2 font-bold">CURRENT DISTRACTION</h3>
          <p className="text-lg sm:text-xl font-bold">Full Stack GenAI Engineer</p>
          <p className="text-base sm:text-lg">@ Accenture</p>
        </div>
        <div className="ink-border-thin p-4 sm:p-6 bg-[#F4EFE6] shadow-[4px_4px_0_0_#2B2620] sm:shadow-[6px_6px_0_0_#2B2620] mb-6 overflow-hidden">
          <h3 className="dot-matrix text-[#9CB88F] mb-2 font-bold">MANDATORY SIDE QUEST</h3>
          <p className="text-base sm:text-lg font-bold">B.Tech — AI &amp; Data Science</p>
          <p className="text-sm sm:text-base text-[#8FA6B2]">BS Abdur Rahman Crescent Institute</p>
          <p className="text-sm sm:text-base mt-2">CGPA: 8.87 / 10 | Because apparently, degrees still matter.</p>
        </div>
        <div className="ink-border-thin p-4 sm:p-6 bg-[#F4EFE6] shadow-[4px_4px_0_0_#2B2620] sm:shadow-[6px_6px_0_0_#2B2620] overflow-hidden">
          <h3 className="dot-matrix text-[#D8A0A6] mb-2 font-bold">THE DARK AGES</h3>
          <p className="text-base sm:text-lg font-bold">Intermediate</p>
          <p className="text-sm sm:text-base text-[#8FA6B2]">Sri Chaitanya Junior College</p>
          <p className="text-sm sm:text-base mt-2">Score: 94.8% (Yes, I was a nerd).</p>
        </div>
      </div>

      {/* Academy Icon */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <div className="w-40 h-40">
          <AcademyIcon />
        </div>
      </div>
    </motion.section>
  );
}
