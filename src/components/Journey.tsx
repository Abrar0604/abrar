import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './HeroSection';
import AcademySection from './AcademySection';
import ArmorySection from './ArmorySection';
import ProjectsSection from './ProjectsSection';
import TrophySection from './TrophySection';
import SummitSection from './SummitSection';

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Central Progress Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#2B2620] opacity-10 transform md:-translate-x-1/2 z-0"></div>
      <motion.div 
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#E4B65C] transform md:-translate-x-1/2 z-0 origin-top"
        style={{ scaleY }}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-20 z-10 relative">
        <HeroSection />
        <ProjectsSection />
        <AcademySection />
        <ArmorySection />
        <TrophySection />
        <SummitSection />
      </div>
    </div>
  );
}
