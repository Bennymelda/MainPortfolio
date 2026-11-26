
import React, { useEffect, useRef } from 'react';
import { ArrowLeft} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from './Project';
import FooterSection from '../Sections/Footer';
import {  ExternalLink } from 'lucide-react';
interface HeroSectionProps {
  onBack?: () => void;
  onExplore?: () => void;
  project: Project;
}

export const ProjectDetails: React.FC<HeroSectionProps> = ({
  onBack,

  project,
}) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.01 + 0.003,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 225, 255, ${Math.max(
          0.1,
          Math.min(1, star.alpha)
        )})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-white dark:bg-zinc-900 text-[#2C221E] px-6 md:px-6 pt-24 pb-10 flex flex-col justify-between font-sans">

        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-0"
        />

        <div className="relative z-10 flex dark:text-gray-300 justify-between items-center text-xs md:text-sm tracking-wider uppercase font-medium">

          <Link
            to="/work"
            onClick={onBack}
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span>All work</span>
          </Link>

          <div className="text-right">
            <span>{project.category}</span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end my-auto py-10">

          <div className="lg:col-span-7 flex flex-col">

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight font-normal dark:text-white">
              {project.heroTitle}
            </h1>

            <p className="dark:text-gray-100 text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight mt-4 leading-[1.1]">
              {project.heroSubtitle}
            </p>

          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right pb-2">

            <p className="text-base md:text-lg text-[#5A4D46] dark:text-zinc-300 max-w-sm leading-relaxed mb-8">
              {project.heroDescription}
            </p>
            <div className="bg-black/90 backdrop-blur-md text-white text-[12px] font-mono px-3 py-1 rounded-md uppercase tracking-wider mb-4">
            {project.tags}
          </div>

            <a
  href={project.liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 bg-[#1A1412] text-white px-6 py-4 rounded-full text-sm font-medium hover:bg-[#408A71] transition-all duration-300"
>
  <span>View Live Website</span>

  <ExternalLink
    size={16}
    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
  />
</a>

          </div>
        </div>

        {/* FIRST IMAGE - DESKTOP OVERVIEW */}
        <div className="relative py-4 px-5 z-10 w-full h-[80%] bg-gray-200 overflow-hidden rounded-2xl mt-5">
          <img
            src={project.image}
            alt={`${project.title} desktop overview`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-4" />

      </section>


      {/* THE BRIEF */}
      <section className="bg-[#FDFBF7] text-[#2C221E] px-6 md:px-4 py-20 font-sans">

        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 flex flex-col">

            <span className="text-xs font-semibold tracking-widest uppercase mb-4 text-[#5A4D46]">
              {project.briefLabel}
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1]">
              {project.briefTitle}
            </h2>

          </div>

          <div className="lg:col-span-7 flex flex-col justify-between h-full pt-2">

            <div className="space-y-6 text-base md:text-lg text-[#5A4D46] leading-relaxed">

              {project.briefParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

            </div>

            <div className="w-full h-[1px] bg-[#E8E2D5] my-10" />

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


      {/* SECOND IMAGE - FEATURE SHOWCASE */}
      <section className="bg-white dark:bg-zinc-900 text-[#2C221E] dark:text-white px-6 md:px-16 py-24 md:py-32 font-sans">

        <div className="max-w-8xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-5">

              <span className="text-xs font-semibold tracking-widest uppercase text-[#8C8275] mb-5 block">
                Inside the experience
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
                {project.featureTitle}
              </h2>

              <p className="text-base md:text-lg text-[#5A4D46] dark:text-zinc-300 leading-relaxed max-w-lg">
                {project.featureDescription}
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800">
                <img
                  src={project.secImage}
                  alt={`${project.title} feature showcase`}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* THIRD IMAGE - MOBILE EXPERIENCE */}
      <section className="bg-[#141414] text-[#FDFBF7] px-6 md:px-16 py-24 md:py-32 font-sans">

        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT - MOBILE TEXT */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            <span className="text-xs font-semibold tracking-widest uppercase text-[#8C8275] mb-5">
              Mobile experience
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
              {project.mobileTitle}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-lg">
              {project.mobileDescription}
            </p>

          </div>

          {/* RIGHT - MOBILE IMAGE */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">

            <div className="max-w-[320px] w-full overflow-hidden rounded-[2rem] py-4 bg-zinc-800 border border-zinc-700 shadow-2xl">

              <img
                src={project.mobileImage}
                alt={`${project.title} mobile experience`}
                className="w-full h-auto object-contain"
              />

            </div>

            <p className="text-xs text-[#8C8275] mt-6 text-center">
              {project.mobileCaption}
            </p>

          </div>

        </div>
      </section>


      {/* BOTTOM CTA */}
      <section className="bg-[#FDFBF7] text-[#2C221E] px-6 md:px-16 py-16 border-t border-[#E8DCC4]">

        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          <div className="lg:col-span-7">

            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-[#7A6B5D] block mb-3">
              {project.bottomLabel}
            </span>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.1]">
              {project.bottomTitle}
            </h3>

          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between">

            <p className="text-sm md:text-base text-[#5A4D46] mb-6 text-left lg:text-right max-w-md">
              {project.bottomDescription}
            </p>

            <Link
              to="/contact"
              className="bg-[#1A1412] text-[#FDFBF7] px-4 py-2 text-xs font-medium rounded hover:bg-[#2C221E] transition-colors"
            >
              Let's talk →
            </Link>

          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default ProjectDetails;
