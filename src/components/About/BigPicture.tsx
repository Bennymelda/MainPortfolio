import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const BigPictureSection: React.FC = () => {
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

    // Background star particles
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 0.01 + 0.003,
    }));

    // Particle swirl on the right background
    const swirlParticles = Array.from({ length: 800 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const rx = 320 + Math.random() * 100;
      const ry = 160 + Math.random() * 60;
      return {
        angle,
        rx,
        ry,
        size: Math.random() * 1.3 + 0.4,
        speed: (Math.random() * 0.001 + 0.0004) * (Math.random() > 0.5 ? 1 : -1),
        alpha: Math.random() * 0.6 + 0.2,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw background stars
      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 225, 255, ${Math.max(0.1, Math.min(1, star.alpha))})`;
        ctx.fill();
      });

      // Draw cosmic particle ring on the right
      const centerX = width * 0.75;
      const centerY = height * 0.5;
      const rotationAngle = -Math.PI / 8;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotationAngle);

      swirlParticles.forEach((p) => {
        p.angle += p.speed;
        const px = Math.cos(p.angle) * p.rx;
        const py = Math.sin(p.angle) * p.ry;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 140, 230, ${p.alpha})`;
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
  const heading = new SplitText(".about-services-heading", {
    type: "chars",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-services-section",
      start: "top 70%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".about-services-label", {
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
        stagger: 0.025,
        ease: "power3.out",
      },
      "-=0.15",
    )
    .from(
      ".about-services-description",
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.2",
    )
    .from(
      ".about-services-link",
      {
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.25",
    );

  gsap.utils.toArray<HTMLElement>(".about-service-item").forEach((item) => {
    gsap.from(item, {
      y: 35,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });
  });
}, []);
  const services = [
    {
      title: 'Websites with a purpose.',
      description:
        'Design and development that make your business easy to understand, easy to trust, and easy to contact.',
      linkText: 'Web design',
      linkUrl: '#web-design',
    },
    {
      title: 'A better way to sell online.',
      description:
        'Online stores that give your products room to shine and your customers a clear path from browsing to checkout.',
      linkText: 'Ecommerce',
      linkUrl: '#ecommerce',
    },
    {
      title: 'Less busywork. More business.',
      description:
        'Connected tools and workplace automations that simplify the repetitive work behind the scenes.',
      linkText: 'Workplace automations',
      linkUrl: '#automations',
    },
  ];

  return (
    <section className="about-services-section relative w-full bg-white dark:bg-zinc-900 text-white py-24 px-6 sm:px-6 lg:px-6 overflow-hidden font-sans">
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-white dark:bg-zinc-900 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="about-services-label text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-6 block">
            WHAT I BRING TO YOUR BUSINESS
          </span>

          <h2 className="about-services-heading text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tight text-black dark:text-white mb-6 leading-[1.08]">
            The big picture. <br />
            The small details.
          </h2>

          <p className="about-services-description text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            A thoughtful website is just the beginning. Benny connects the
            customer-facing experience with the tools that keep your business
            moving.
          </p>

        
        </div>

        {/* Right Column: Services List */}
        <div className="	about-service-item lg:col-span-7 flex flex-col divide-y divide-white/10">
          {services.map((item, index) => (
            <div key={index} className="py-4 first:pt-0 last:pb-0 flex flex-col items-start">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-sm leading-relaxed mb-4 max-w-xl">
                {item.description}
              </p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigPictureSection;