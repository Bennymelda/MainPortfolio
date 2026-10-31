import React from 'react';
import { ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';
import type { Project } from './Project';
import FooterSection from '../Sections/Footer';
interface HeroSectionProps {
  onBack?: () => void;
  onExplore?: () => void;
  project: Project;
}
export const ProjectDetails: React.FC<HeroSectionProps> = ({ onBack, onExplore,  project, }) => {
  return (
    <>

   
      <section className="min-h-screen bg-white dark:bg-[#16100F] text-[#2C221E] px-6 md:px-6 pt-24 pb-10 flex flex-col justify-between font-sans">
  {/* Top Navigation Row */}
  <div className="flex dark:text-gray-300 justify-between items-center text-xs md:text-sm tracking-wider uppercase font-medium">
    <button
      onClick={onBack}
      className="flex items-center gap-2 hover:opacity-75 transition-opacity"
    >
      <ArrowLeft size={16} />
      <span>All work</span>
    </button>

    <div className="text-right">
      <span>{project.category}</span>
    </div>
  </div>

  {/* Main Content Area */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end my-auto py-10">
    {/* Left Big Heading */}
    <div className="lg:col-span-7 flex flex-col">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight font-normal dark:text-white">
        {project.heroTitle}
      </h1>

      <p className="dark:text-gray-100 text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight mt-4 leading-[1.1]">
        {project.heroSubtitle}
      </p>
    </div>

    {/* Right Description & Action */}
    <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right pb-2">
      <p className="text-base md:text-lg text-[#5A4D46] dark:text-zinc-300 max-w-sm leading-relaxed mb-8">
        {project.heroDescription}
      </p>

      <button
        onClick={onExplore}
        className="group flex items-center gap-2 text-sm  font-medium tracking-wide hover:opacity-75 transition-opacity"
      >
        <span className='dark:text-gray-300'>Explore the project</span>
        <ArrowDown
          size={16}
          className="dark:text-gray-300 transform group-hover:translate-y-1 transition-transform"
        />
      </button>
    </div>
  </div>

  {/* Bottom spacing / spacer to match balanced padding */}
  <div className="h-4" />
</section>

<section className="bg-[#FDFBF7] text-[#2C221E] px-6 md:px-4 py-20 font-sans">
  <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

    {/* Left Column: Title */}
    <div className="lg:col-span-5 flex flex-col">
      <span className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#5A4D46]">
        {project.briefLabel}
      </span>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1]">
        {project.briefTitle}
      </h2>
    </div>

    {/* Right Column: Description & Metadata */}
    <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">

      {/* Main Paragraphs */}
      <div className="space-y-6 text-base md:text-lg text-[#5A4D46] leading-relaxed">
        {project.briefParagraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Divider line */}
      <div className="w-full h-[1px] bg-[#E8E2D5] my-10" />

      {/* Role and Product Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#5A4D46] mb-2">
            My Role
          </h3>

          <p className="text-base text-[#2C221E] font-medium">
            {project.role}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-widest uppercase text-[#5A4D46] mb-2">
            The Product
          </h3>

          <p className="text-base text-[#2C221E] font-medium">
            {project.product}
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



<div className="w-full font-sans">
  {/* Upper Dark Section */}
  <section className="bg-[#16100F] text-[#FDFBF7] px-6 md:px-16 py-24 md:py-32">
    <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

      {/* Left Column: Text Content */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        {/* Project Title */}
        <div className="text-3xl font-serif tracking-tight mb-8">
          {project.heroTitle}
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
          {project.secondaryTitle}
        </h2>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-lg">
          {project.secondaryParagraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Right Column: Mobile UI Preview */}
      <div className="lg:col-span-6 flex flex-col items-center justify-center">
        {/* Keep your existing Phone Container and all its contents here */}

        {/* Image Caption */}
        <p className="text-xs text-[#8C8275] mt-4 text-center">
          {project.secondaryCaption}
        </p>
      </div>

    </div>
  </section>

  {/* Lower Light Section Banner */}
  <section className="bg-[#FDFBF7] text-[#2C221E] px-6 md:px-16 py-16 md:py-16 border-t border-[#E8DCC4]">
    <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

      {/* Left Title */}
      <div className="lg:col-span-7">
        <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#7A6B5D] block mb-3">
          {project.bottomLabel}
        </span>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.1]">
          {project.bottomTitle}
        </h3>
      </div>

      {/* Right Action Call */}
      <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between">
        <p className="text-sm md:text-base text-[#5A4D46] mb-6 text-left lg:text-right max-w-md">
          {project.bottomDescription}
        </p>

        <div className="flex items-center gap-4">
          <button className="bg-[#1A1412] text-[#FDFBF7] px-4 py-2 text-xs font-medium rounded hover:bg-[#2C221E] transition-colors">
            Let's talk →
          </button>

          <button className="flex items-center gap-1 text-xs font-medium text-[#2C221E] hover:opacity-75 transition-opacity">
            <span>More work</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

    </div>
  </section>
</div>
 
<FooterSection />
    </>
  );
};

export default ProjectDetails;