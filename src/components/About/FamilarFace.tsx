import React from 'react';

import { ArrowUpRight,  MapPin } from 'lucide-react';
import { Link } from "react-router-dom";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const FamiliarFaceSection: React.FC = () => {

  useGSAP(() => {
  const heading = new SplitText(".about-purpose-heading", {
    type: "chars",
  });

  const paragraphs = new SplitText(".about-purpose-paragraph", {
    type: "lines",
    linesClass: "about-purpose-line",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-purpose-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".about-purpose-label", {
    y: 15,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })
    .from(
      heading.chars,
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.035,
        ease: "power3.out",
      },
      "-=0.15"
    )
    .from(
      paragraphs.lines,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".about-purpose-author",
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.1"
    );

  gsap.from(".about-purpose-image", {
    x: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-purpose-image",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}, []);


useGSAP(() => {
  gsap.from(".next-chapter-left", {
    x: -30,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".next-chapter-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".next-chapter-right", {
    x: 30,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".next-chapter-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });
}, []);
  return (
    <>
    <section className="about-purpose-section w-full bg-white dark:bg-zinc-900 dark:text-black text-white py-24 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Showcase */}
        <div className="about-purpose-image lg:col-span-5">
          <div className="relative w-full overflow-hidden rounded-xl ">
  <img
    src="/profile-removebg-preview.png"
    alt="Benny, Frontend Developer"
    className="block w-full h-auto max-h-[440px] object-contain object-center"
  />
</div>
        </div>

        {/* Right Column: Copy & Details */}
       
<div className="lg:col-span-6 flex flex-col items-start">
  <span className="about-purpose-label text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-4 block">
    DESIGN-MINDED. DEVELOPMENT-FOCUSED.
  </span>

  <h2 className="	about-purpose-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-6 leading-[1.08]">
    I build with 
    purpose.
  </h2>

  <div className="space-y-4 text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
    <p className='about-purpose-paragraph'>
      I'm Benny, a frontend developer who turns ideas into real products.
      I combine thoughtful design with modern frontend development to build
      websites and web applications that are clear, responsive, and easy to use.
    </p>

    <p className='about-purpose-paragraph'>
      I care about more than making a website look good. I think about how
      people experience it, how quickly they can understand what you offer,
      and what helps them trust your business enough to take action.
    </p>
  </div>

  {/* Author Footnote & Link */}
  <div className="about-purpose-author pt-6 border-t border-black/10 dark:border-white/10 w-full flex items-center justify-between">
    <div>
      <h4 className="text-sm font-bold text-black dark:text-white">
        Benny Ibesi
      </h4>

      <p className="text-xs text-gray-700 dark:text-gray-400">
        Frontend Developer
      </p>
    </div>

    
  </div>
</div>


      </div>
    </section>

    <section className="next-chapter-section w-full bg-[#CEE5D0] text-gray-900 py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading and CTAs */}
        <div className="next-chapter-left lg:col-span-8 flex flex-col items-start">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-600 mb-4 block">
            YOUR NEXT CHAPTER STARTS HERE
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.08]">
            Let’s build what’s next <br />
            for your business.
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            Tell us where you are and where you want to go. We'll figure out the right next step together.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#94B49F] text-black font-medium text-xs sm:text-sm px-6 py-3.5 rounded-lg hover:bg-zinc-900 transition-colors shadow-md"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800 hover:text-black transition-colors py-2"
            >
              See the work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Local Reach Card with Vertical Border Line */}
      
      
<div className="next-chapter-right lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-400/50 pt-8 lg:pt-0 lg:pl-10 flex flex-col items-start">
  <div className="mb-4">
    <MapPin className="w-5 h-5 text-gray-800 dark:text-gray-200" />
  </div>

  <h3 className="text-xl sm:text-2xl font-bold text-gray-900  mb-3">
    Built for your users.
  </h3>

  <p className="text-gray-600  text-xs sm:text-sm leading-relaxed mb-6">
    I build websites and web applications around the people using them,
    making sure the experience is clear, responsive, and purposeful.
  </p>

  <Link
    to="/work"
    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900  hover:text-[#94B49F] transition-colors"
  >
    Explore my work
    <ArrowUpRight className="w-3.5 h-3.5" />
  </Link>
</div>


      </div>
    </section>
    </>
  );
};

export default FamiliarFaceSection;