import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { Link } from "react-router-dom";
import {useGSAP} from "@gsap/react"
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
export const HeroSection: React.FC = () => {
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

    // Generate random background star particles
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.01 + 0.003,
    }));

    // Generate ring particles for the cosmic oval on the right
    const ringParticles = Array.from({ length: 800 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const rx = 280 + Math.random() * 60; // horizontal radius dispersion
      const ry = 140 + Math.random() * 30; // vertical tilt dispersion
      return {
        angle,
        rx,
        ry,
        size: Math.random() * 1.2 + 0.4,
        speed: (Math.random() * 0.001 + 0.0005) * (Math.random() > 0.5 ? 1 : -1),
        alpha: Math.random() * 0.6 + 0.2,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw starry background
      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 180, 159, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.fill();
      });

      // Draw cosmic ring on the right
      const centerX = width * 0.75;
      const centerY = height * 0.45;
      const rotationAngle = -Math.PI / 8; // tilt angle

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle);

      ringParticles.forEach((p) => {
  p.angle += p.speed;

  const px = Math.cos(p.angle) * p.rx;
  const py = Math.sin(p.angle) * p.ry;

  ctx.beginPath();
  ctx.arc(px, py, p.size, 0, Math.PI * 2);

  ctx.fillStyle = `rgba(148, 180, 159, ${p.alpha})`;

  ctx.fill();
});
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

useGSAP(() => {
  const heroHeading = new SplitText(".heading", {
    type: "lines",
  });
const taglineText = new SplitText(".title", {
  type: "chars",
});
  const paragraphText = new SplitText(".subtitle", {
    type: "lines",
  });

  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
    },
  });

  tl.from(taglineText.chars, {
  yPercent: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.06,
}).from(heroHeading.lines, {
    yPercent: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.6,
  })
    .from(
      paragraphText.lines,
      {
        y: 25,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      },
      "-=0.3"
    )
    .from(
      ".hero-buttons a",
      {
        y: 20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "-=0.2"
    );
}, []);

 return (
  <section className="relative w-full min-h-screen bg-white dark:bg-zinc-900 text-white flex flex-col justify-between overflow-hidden px-6 md:px-6 lg:px-6 pt-24 pb-12 select-none">
    {/* Background Interactive Canvas */}
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />

    {/* Subtle Glows */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-900/15 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-green-900/15 rounded-full blur-[150px] pointer-events-none" />

    {/* Top Tagline */}
    <div className="relative z-10 pt-4">
      <span className="title text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-800 dark:text-gray-300">
        FRONTEND DEVELOPER
      </span>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 max-w-3xl my-auto py-12">
      <h1 className="heading text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-black dark:text-white">
        I turn ideas into <br />
        <span className="text-[#94B49F]">real products.</span>
      </h1>

      <p className="subtitle text-gray-800 dark:text-gray-400 text-sm sm:text-base md:text-base max-w-sm leading-relaxed mb-10 font-normal">
  I build conversion-focused websites and web applications that help
  businesses turn attention into trust, and trust into action.
</p>

      {/* Action Buttons */}
      <div className="hero-buttons flex flex-wrap items-center gap-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#94B49F] text-black font-medium text-sm px-4 py-2 rounded-md hover:bg-[#839f8d] transition-colors shadow-lg shadow-white/5"
        >
          Start a project
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <a
          href="#work"
          className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium text-sm transition-colors py-2"
        >
          Explore my work
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </div>

    {/* Bottom Spacer / Optional Footer anchor */}
    <div className="relative z-10" />
  </section>
);
};

export default HeroSection;