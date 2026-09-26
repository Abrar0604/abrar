import { motion } from 'framer-motion';
import { contact } from '../data/world';

export default function SummitSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="pb-20 flex flex-col justify-center items-start md:items-center text-left md:text-center relative pl-8 md:pl-0"
    >
       {/* Final Node marker on the line */}
       <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 top-0 w-8 h-8 bg-[#E4B65C] ink-border z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[#2B2620]"></div>
      </div>

      <div className="max-w-2xl mt-12 md:mt-20">
        <h2 className="font-display text-2xl mb-8 text-[#2B2620]">THE SUMMIT</h2>
        
        <div className="ink-border p-8 bg-[#E8DFD0] shadow-[8px_8px_0_0_#2B2620] mb-8 text-left">
          <p className="text-xl leading-relaxed">
            Abrar is currently seeking <strong className="text-[#9CB88F]">AI/ML Engineering</strong>, <strong className="text-[#D8A0A6]">Full Stack</strong>, and <strong className="text-[#E4B65C]">Data Science</strong> roles.
            <br/><br/>
            Ready to build production-grade intelligent systems from day one... or at least fix the broken ones you already have. Your call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/Abrar_Ahammad_Resume.pdf"
            download
            className="block ink-border p-4 text-center font-display text-sm cursor-pointer hover:bg-[#E8DFD0] transition-colors"
            style={{ backgroundColor: '#E4B65C', color: '#2B2620' }}
          >
            DOWNLOAD RESUME
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="block ink-border p-4 text-center text-xl cursor-pointer hover:bg-[#E8DFD0] transition-colors dot-matrix break-all"
            style={{ backgroundColor: '#F4EFE6', color: '#2B2620' }}
          >
            {contact.email}
          </a>
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block ink-border p-4 text-center text-xl cursor-pointer hover:bg-[#E8DFD0] transition-colors dot-matrix"
            style={{ backgroundColor: '#8FA6B2', color: '#2B2620' }}
          >
            LINKEDIN
          </a>
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block ink-border p-4 text-center text-xl cursor-pointer hover:bg-[#E8DFD0] transition-colors dot-matrix"
            style={{ backgroundColor: '#9CB88F', color: '#2B2620' }}
          >
            GITHUB
          </a>
        </div>
      </div>
    </motion.section>
  );
}
