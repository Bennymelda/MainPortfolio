import React, { useState } from 'react';
import { ArrowDown, Search } from 'lucide-react';
import SelectedWorkSection from './Project.tsx';
import FooterSection from '../Sections/Footer';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
export const BuiltToStandOutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All work');
  const [searchQuery, setSearchQuery] = useState('');
useGSAP(() => {
  const heading = new SplitText('.work-heading', {
    type: 'chars',
  });

  const paragraph = new SplitText('.work-description', {
    type: 'lines',
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.work-header',
      start: 'top 75%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.from(heading.chars, {
    yPercent: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.035,
    ease: 'power3.out',
  }).from(
    paragraph.lines,
    {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
    },
    '-=0.4'
  );

  return () => {
    heading.revert();
    paragraph.revert();
  };
}, []);
  const categories = ['All work'];

  return (
    <>
    <section className="w-full bg-white dark:bg-zinc-900 text-gray-900 pt-20 pb-12 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-8xl mx-auto">
        
        {/* Top Header Grid */}
        <div className="work-header grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          
          {/* Main Title Left */}
          <div className="lg:col-span-8">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 mb-4 block">
              SELECTED WORK & CASE STUDIES
            </span>

            <h2 className="work-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.05]">
              Built to stand out. <br />
              <span className="text-[#94B49F]">Made to work.</span>
            </h2>
          </div>

          {/* Subtext Right */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-start pl-0 lg:pl-6 pb-2">
            <p className="work-description text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Distinct businesses. Thoughtful websites. A closer look at what I design and build.
            </p>

            <a href="#selected-work"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-[#94B49F] transition-colors"
            >
              Explore the work
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Filter Bar */}
        <div className="border-t border-b border-gray-200/80 dark:border-gray-800/80 py-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === category
                    ? 'bg-[#1e1c24] text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search & Refine */}
          <div className="flex items-center gap-4">
            {/* Search Input Box */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Find a project"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 pl-9 pr-4 py-2 focus:outline-none border-b border-transparent focus:border-gray-400 transition-colors"
              />
            </div>

          </div>

        </div>

        

      </div>
   
    </section>
     <SelectedWorkSection isMainProjectPage={true} />
    <FooterSection />
    </>
  );
};

export default BuiltToStandOutSection;