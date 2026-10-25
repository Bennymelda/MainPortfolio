import React, { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Clock, Mail, Check, AlertTriangle, Search } from 'lucide-react';

export const FreeWebsiteReviewSection: React.FC = () => {
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

    const stars = Array.from({ length: 100 }, () => ({
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

  return (
    <section className="relative w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-6 lg:px-6 overflow-hidden font-sans">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-4 block">
            FREE WEBSITE REVIEW
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-800 dark:text-gray-300 mb-6 leading-[1.08]">
            Find out why your <br />
            website <br />
            isn't bringing <br />
            in calls.
          </h2>

          <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-sm font-normal">
            Send me your website. I go through it by hand and send back a plain-English list of what is working, what is turning customers away, and what to fix first. No cost, no sales pitch.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a
              href="#audit-form"
              className="inline-flex items-center gap-2 bg-white text-black font-medium text-xs sm:text-sm px-5 py-3 rounded-md hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get my free review
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="benny:benedictaibesi45@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-black dark:text-white hover:text-purple-300 transition-colors py-2"
            >
              Or email me your site
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-700 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-gray-700 dark:text-gray-400" />
              <span>Two minutes to request</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5  text-gray-700 dark:text-gray-400" />
              <span>Back in 1-2 business days</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5  text-gray-700 dark:text-gray-400" />
              <span>Yours to keep either way</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="bg-[#12111a] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden min-h-[280px]">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-600/50" />
              </div>
              <div className="bg-[#1c1b28] border border-white/5 rounded-md px-3 py-1 text-[11px] text-gray-400 font-mono flex-1 max-w-[200px] text-center ml-2">
                yourbusiness.com
              </div>
            </div>

            <div className="space-y-4 relative pt-2">
              <div className="relative">
                <div className="h-6 bg-gray-800/60 rounded-md w-full" />
                <div className="absolute right-0 -top-2 bg-[#191924] border border-gray-700/80 rounded-md px-2.5 py-1 text-[10px] text-gray-200 flex items-center gap-1.5 shadow-lg">
                  <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                  <span>Headline never says what you do</span>
                </div>
              </div>

              <div className="h-2.5 bg-gray-800/40 rounded w-2/3" />
              <div className="h-2.5 bg-gray-800/40 rounded w-1/2 mb-6" />

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-16 bg-gray-800/30 rounded-lg border border-gray-800" />
                <div className="h-16 bg-gray-800/30 rounded-lg border border-gray-800" />
                <div className="h-16 bg-gray-800/30 rounded-lg border border-gray-800" />
              </div>

              <div className="absolute right-6 top-20 bg-[#191924] border border-gray-700/80 rounded-md px-2.5 py-1 text-[10px] text-gray-200 flex items-center gap-1.5 shadow-xl z-10">
                <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                <span>No phone number above the fold</span>
              </div>

              <div className="absolute right-4 top-16 w-16 h-16 rounded-full border-2 border-gray-500/30 bg-white/5 backdrop-blur-[2px] pointer-events-none flex items-center justify-center">
                <Search className="w-6 h-6 text-gray-400 opacity-20 transform -rotate-45" />
              </div>

              <div className="inline-block mt-4 border border-dashed border-gray-600 rounded-md px-3 py-1.5 bg-black/20">
                <span className="text-[10px] text-gray-300">Contact button hidden on phones</span>
              </div>
            </div>
          </div>

          <div className="bg-[#122019] border border-emerald-900/50 rounded-2xl p-5 sm:p-6 shadow-xl">
            <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3 block">
              FIX FIRST
            </span>

            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 font-medium">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Say what you do and where you do it</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Put the call button where thumbs are</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Cut the homepage load time in half</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreeWebsiteReviewSection;