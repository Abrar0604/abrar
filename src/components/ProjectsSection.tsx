import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ProjectIcons } from './ProjectIcons';

export default function ProjectsSection() {
  return (
    <div className="mb-40 relative">
      <h2 className="font-display text-2xl mb-16 text-center text-[#2B2620]">MISSION ARCHIVES</h2>
      
      <div className="space-y-32">
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
              className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center relative pl-8 md:pl-0`}
            >
              {/* Node marker on the line */}
              <div className="absolute left-[-16px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-[#D8A0A6] ink-border z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-[#2B2620]"></div>
              </div>

              <div className={`md:w-1/2 ${isLeft ? 'md:pr-16 text-left' : 'md:pl-16 text-left'} w-full`}>
                <div className="ink-border p-6 bg-[#F4EFE6] shadow-[8px_8px_0_0_#2B2620]">
                  <p className="dot-matrix text-[#D8A0A6] font-bold text-lg mb-2">{proj.codename}</p>
                  <h3 className="font-display text-lg leading-relaxed text-[#2B2620] mb-2">{proj.title}</h3>
                  <p className="text-base text-[#8FA6B2] mb-4">YEAR {proj.year}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <span key={t} className="ink-border-thin bg-[#E4B65C] px-2 py-1 text-sm dot-matrix">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="dot-matrix text-[#9CB88F] font-bold mb-1">THE "EASY" IDEA</h4>
                    <p className="text-lg leading-relaxed">{proj.missionBriefing}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="dot-matrix text-[#D8A0A6] font-bold mb-1">WHY I ALMOST QUIT TECH</h4>
                    <p className="text-lg leading-relaxed">{proj.bossChallenge}</p>
                  </div>

                  <div>
                    <h4 className="dot-matrix text-[#E4B65C] font-bold mb-1">WHAT I SURVIVED WITH</h4>
                    <ul className="list-none space-y-1">
                      {proj.lootStats.map((stat, i) => (
                        <li key={i} className="text-lg flex items-start gap-2">
                          <span className="text-[#E4B65C] mt-1">*</span>
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>
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
