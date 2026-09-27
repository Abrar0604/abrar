import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectIcons } from './ProjectIcons';

export default function ProjectsSection() {
  return (
    <div className="mb-40 relative">
      <h2 className="font-display text-sm sm:text-xl md:text-2xl mb-16 text-center text-[#2B2620] leading-relaxed">MISSION ARCHIVES</h2>
      
      <div className="space-y-20 sm:space-y-32">
        {projects.map((proj, idx) => {
          const isLeft = idx % 2 === 0;
          const Icon = ProjectIcons[proj.id] || (() => <div className="w-full h-full bg-[#E8DFD0] ink-border"></div>);

          return (
            <motion.section
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center relative pl-6 md:pl-0`}
            >
              {/* Node marker on the line */}
              <div className="absolute left-[-12px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-[#D8A0A6] ink-border z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#2B2620]"></div>
              </div>

              <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 text-left' : 'md:pl-16 text-left'} w-full`}>
                <div className="ink-border p-4 sm:p-6 bg-[#F4EFE6] shadow-[4px_4px_0_0_#2B2620] sm:shadow-[8px_8px_0_0_#2B2620] overflow-hidden">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="dot-matrix text-[#D8A0A6] font-bold text-base sm:text-lg">{proj.codename}</p>
                    <span className="text-xs sm:text-sm text-[#8FA6B2] flex-shrink-0 mt-1">{proj.year}</span>
                  </div>
                  <h3 className="font-display text-xs sm:text-sm md:text-base leading-relaxed text-[#2B2620] mb-3">{proj.title}</h3>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {proj.tech.map((t) => (
                      <span key={t} className="ink-border-thin bg-[#E4B65C] px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-sm dot-matrix">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* One-liner description */}
                  <p className="text-base sm:text-lg leading-relaxed mb-4">{proj.oneLiner}</p>

                  {/* Key stats — the numbers that matter */}
                  <div className="mb-4">
                    <ul className="list-none space-y-1">
                      {proj.keyStats.map((stat, i) => (
                        <li key={i} className="text-sm sm:text-base flex items-start gap-2">
                          <span className="text-[#9CB88F] mt-0.5 flex-shrink-0 font-bold">+</span>
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action links */}
                  <div className="flex gap-2 pt-2 border-t-2 border-[#C9C0AF]">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-border-thin px-3 py-1.5 text-xs sm:text-sm dot-matrix bg-[#E8DFD0] hover:bg-[#C9C0AF] transition-colors cursor-pointer"
                      >
                        VIEW SOURCE
                      </a>
                    )}
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ink-border-thin px-3 py-1.5 text-xs sm:text-sm dot-matrix bg-[#9CB88F] hover:bg-[#7a9a6e] transition-colors cursor-pointer"
                      >
                        LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Unique SVG Icon representing the project */}
              <div className={`hidden md:flex md:w-1/2 justify-center items-center ${isLeft ? 'pl-16' : 'pr-16'}`}>
                <div className="w-48 h-48">
                  <Icon />
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
