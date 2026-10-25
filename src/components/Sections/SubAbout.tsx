import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection: React.FC = () => {
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

  // Background stars
  const stars = Array.from({ length: 120 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.2 + 0.3,
    alpha: Math.random() * 0.7 + 0.3,
    speed: Math.random() * 0.01 + 0.003,
  }));

  // Particle swirl on the right
  const swirlParticles = Array.from({ length: 1200 }, () => {
    const angle = Math.random() * Math.PI * 2;
    const rx = 350 + Math.random() * 120;
    const ry = 180 + Math.random() * 80;

    return {
      angle,
      rx,
      ry,
      size: Math.random() * 1.5 + 0.4,
      speed:
        (Math.random() * 0.0012 + 0.0004) *
        (Math.random() > 0.5 ? 1 : -1),
      alpha: Math.random() * 0.7 + 0.2,
    };
  });

  const render = () => {
    ctx.clearRect(0, 0, width, height);

    // Stars
    stars.forEach((star) => {
      star.alpha += Math.sin(Date.now() * star.speed) * 0.01;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

      ctx.fillStyle = `rgba(148, 180, 159, ${Math.max(
        0.1,
        Math.min(1, star.alpha)
      )})`;

      ctx.fill();
    });

    // Swirl
    const centerX = width * 0.78;
    const centerY = height * 0.5;
    const rotationAngle = -Math.PI / 7;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotationAngle);

    swirlParticles.forEach((p) => {
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

  return (
  <section className="relative w-full min-h-[550px] bg-white dark:bg-black text-black dark:text-white flex items-center justify-center overflow-hidden px-6 py-20 font-sans">

    {/* Background Particle Canvas
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
 */}
    {/* Subtle Green Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#94B49F]/10 dark:bg-[#94B49F]/15 rounded-full blur-[140px] pointer-events-none" />

    {/* Content Container */}
    <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14">

      {/* Profile Image Card */}
      <div className="relative flex-shrink-0 w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[380px] rounded-xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10">
        <img
          src="./main-picture.png?auto=format&fit=crop&q=80&w=800"
          alt="Brandon Mitchell"
          className="w-full h-full object-cover object-center"
        />
      </div>

    
{/* Text Content */}
<div className="flex flex-col items-start max-w-xl">

  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white mb-6">
    Hey, I'm Benny.
  </h2>

  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-sm">
    I'm a frontend developer who turns ideas into real products people
    can actually use. I build fast, responsive, conversion-focused
    websites and web applications designed to make businesses easier
    to understand, trust, and choose.
  </p>

  <Link
    to="/contact"
    className="inline-flex items-center gap-2 bg-[#94B49F] text-black font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg hover:bg-[#839f8d] transition-colors shadow-md"
  >
    Start a project
    <ArrowUpRight className="w-4 h-4" />
  </Link>

</div>

    </div>
  </section>
);
};

export default AboutSection;