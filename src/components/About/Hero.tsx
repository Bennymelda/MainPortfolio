import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown, MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const AboutHeroSection: React.FC = () => {
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
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Stars background
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
        ctx.fillStyle = `rgba(220, 225, 255, ${Math.max(0.1, Math.min(1, star.alpha))})`;
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


  useGSAP(() => {
  const heading = new SplitText(".about-heading", {
    type: "chars",
  });

  const paragraph = new SplitText(".about-description", {
    type: "lines",
    linesClass: "about-line",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-hero",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".about-label", {
    y: 15,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  })
    .from(
      heading.chars,
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.035,
        ease: "power3.out",
      },
      "-=0.2",
    )
    .from(
      paragraph.lines,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.25",
    )
    .from(
      ".about-buttons",
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.2",
    )
    .from(
      ".about-image",
      {
        scale: 0.94,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.7",
    )
    .from(
      ".about-badge",
      {
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    );
}, []);


useGSAP(() => {
  const heading = new SplitText(".about-story-heading", {
    type: "chars",
  });

  const paragraphs = new SplitText(".about-story-paragraph", {
    type: "lines",
    linesClass: "about-story-line",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-story-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".about-story-label", {
    y: 15,
    opacity: 0,
    duration: 0.4,
    ease: "power2.out",
  })
    .from(
      heading.chars,
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.025,
        ease: "power3.out",
      },
      "-=0.15",
    )
    .from(
      paragraphs.lines,
      {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .from(
      ".about-value-1",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.1",
    )
    .from(
      ".about-value-2",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.45",
    )
    .from(
      ".about-value-3",
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.45",
    );
}, []);
  return (
    <>
    <section className="	about-hero relative w-full bg-white dark:bg-zinc-900 text-white py-20 px-6 sm:px-6 lg:px-6 overflow-hidden font-sans min-h-[600px] flex items-center">
      {/* Background Star Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Subtle Purple Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-green-900/15 rounded-full blur-[140px] pointer-events-none" />

      
<div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

  {/* Left Column: Heading and Details */}
  <div className="lg:col-span-6 flex flex-col items-start">

    <span className="about-label text-[11px] font-medium tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-6 block">
      ABOUT BENNY · FRONTEND DEVELOPER
    </span>

    <h1 className="about-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black dark:text-white mb-6 leading-[1.08]">
      Turning ideas into
      <br />
      <span className="text-[#94B49F]">
        real products.
      </span>
    </h1>

    <p className="about-description text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
      I'm a frontend developer focused on building fast, responsive, and
      conversion-focused websites and web applications that help businesses
      turn attention into trust and action.
    </p>

    <div className="about-buttons flex flex-wrap items-center gap-6">

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-[#94B49F] text-black font-semibold text-xs sm:text-sm px-5 py-3 rounded-lg hover:bg-[#839f8d] transition-colors shadow-lg"
      >
        Start a project
        <ArrowUpRight className="w-4 h-4" />
      </Link>

      <Link
        to="/work"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-300 hover:text-[#94B49F] transition-colors py-2"
      >
        Explore my work
        <ArrowDown className="w-4 h-4" />
      </Link>

    </div>
  </div>


  {/* Right Column: Featured Image */}
  <div className="about-image lg:col-span-6 relative">

    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 group">

      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs text-white">
        <MapPin className="w-3.5 h-3.5 text-white" />
        <span>Based in Nigeria · Working globally</span>
      </div>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000"
        alt="Frontend development workspace"
        className="w-full h-[380px] sm:h-[420px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
      />

    </div>


    {/* Floating Experience Badge */}
    <div className="about-badge absolute -bottom-6 -left-4 sm:-left-6 bg-[#f3f1ec] dark:bg-[#14141a] text-gray-900 dark:text-white rounded-2xl p-5 shadow-2xl flex items-center gap-4 border border-gray-200 dark:border-white/10 z-20">

      <span className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
        2+
      </span>

      <div className="border-l border-gray-300 dark:border-white/10 pl-4 py-0.5">

        <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-snug">
          Years building with code
        </h4>

        <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">
          Frontend. Design-minded. Purposeful.
        </p>

      </div>
    </div>

  </div>

</div>

    </section>


<div className="w-full font-sans">
      {/* Top Bar Section (Dark Space Background) */}
      <div className="w-full bg-white dark:bg-zinc-900 text-gray-400 py-4 px-6 sm:px-6 lg:px-6 border-b border-black/10 dark:border-white/10 text-[11px] font-mono tracking-wider flex flex-col sm:flex-row justify-between items-center gap-2">
  <div>Anambra, Nigeria · Working globally</div>
  <div>Frontend Development / UI / Web Applications</div>
</div>

      {/* Main Section (Light Cream Background) */}
      <section className="about-story-section w-full bg-[#f4f2eb] text-gray-900 py-20 px-6 sm:px-6 lg:px-6">
        <div className="max-w-9xl mx-auto">
          
          {/* Top Headline & Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
            
            {/* Left Headline Column */}
            <div className="lg:col-span-7">
<span className="about-story-label text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
  DESIGN-MINDED. DEVELOPMENT-FOCUSED.
</span>
              <h2 className="about-story-heading text-4xl sm:text-4xl lg:text-4xl font-medium tracking-tight text-gray-900 leading-[1.08] max-w-md">
                Professional online experiences. Half a decade in the making.
              </h2>
            </div>

            {/* Right Story Paragraphs Column */}
            <div className="lg:col-span-5 space-y-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
              <p className='about-story-paragraph'>
                Since 2024, Benny has brought design and development together for businesses. The goal is simple: make your online presence as considered and capable as the business behind it.
              </p>
              <p className='about-story-paragraph'>
                That starts with understanding what you do, who you serve, and what needs to work better. From a first website to a more connected business, every project starts with your priorities.
              </p>
            </div>

          </div>

          {/* Bottom 3-Column Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-gray-300/70">
            
            {/* Column 1 */}
            <div className="about-value-1 flex flex-col items-start">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Your business comes first.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A clear plan shaped around your customers and goals, with a scope that makes sense for where you are now.
              </p>
            </div>

            {/* Column 2 */}
            <div className="about-value-2 flex flex-col items-start">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Good design goes deeper.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                How it looks, how it loads, and how easily someone can take the next step all deserve the same attention.
              </p>
            </div>

            {/* Column 3 */}
            <div className="about-value-3 flex flex-col items-start">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Keep the conversation direct.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Work with the person designing and building your project. Straightforward answers, shared decisions, and a familiar face.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
    </>
  );
};

export default AboutHeroSection;