import React from 'react';
import { ArrowUpRight, Search} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const ServicesGridSection: React.FC = () => {

  useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".service-column-1", {
    x: -35,
    y: 25,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
  })
    .from(
      ".service-column-2",
      {
        x: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.55"
    )
    .from(
      ".service-column-3",
      {
        y: 45,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.55"
    );
}, []);
  return (
  
<section className="services-grid w-full bg-[#070711] text-white py-16 px-4 sm:px-8 lg:px-16 overflow-hidden font-sans">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* COLUMN 1 */}
    <div className="service-column-1  flex flex-col gap-6">

      {/* Header */}
      <div className="p-4 sm:p-6 flex flex-col justify-center min-h-[200px]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
          What are you <br />
          looking to build?
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          A better website. A stronger presence.
          <br />
          Something people remember.
        </p>
      </div>

      {/* See what's possible */}
      <a href="#selected-work">
        <div className="bg-zinc-800 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden group hover:border-white/20 transition-all duration-300">

          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              See what's possible.
            </h3>

            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              A closer look at the businesses I've helped build online.
            </p>

            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#94B49F] transition-colors">
              View work
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Mockups */}
          <div className="relative mt-8 h-48 w-full">

            {/* Phone */}
            <div className="absolute left-0 bottom-[-10px] w-28 h-40 bg-[#11111b] border-2 border-gray-700 rounded-2xl p-1.5 shadow-2xl transform -rotate-6 group-hover:translate-y-[-4px] transition-transform duration-300 z-10">

              <div className="w-full h-full bg-[#1b192c] rounded-xl p-2 flex flex-col justify-between">

                <div className="w-8 h-1 bg-gray-700 rounded-full mx-auto" />

                <div className="my-auto text-center">
                  <span className="text-[7px] font-bold tracking-wider uppercase text-yellow-400 block">
                    TAKE YOUR BUSINESS
                  </span>

                  <span className="text-[8px] font-extrabold text-white leading-tight block">
                    TO NEW HEIGHTS
                  </span>

                  <div className="mt-2 bg-yellow-400 text-black text-[6px] font-bold py-0.5 rounded">
                    Learn More
                  </div>
                </div>

                <div className="w-full h-1 bg-gray-800 rounded" />
              </div>
            </div>

            {/* Laptop */}
            <div className="absolute right-[-10px] bottom-[-20px] w-52 h-36 bg-[#13121f] border-2 border-gray-700 rounded-xl p-1.5 shadow-2xl transform rotate-3 group-hover:scale-[1.02] transition-transform duration-300">

              <div className="w-full h-full bg-[#e8eae6] rounded-lg overflow-hidden text-black p-2 flex flex-col justify-between">

                <div className="flex items-center justify-between border-b border-gray-300 pb-1">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                </div>

                <div className="my-auto font-black text-center text-xs tracking-tighter text-slate-800 uppercase">
                  ON THE STREAM
                </div>

                <div className="bg-green-700 text-white text-[7px] py-1 text-center font-bold rounded">
                  EXPLORE NOW
                </div>

              </div>
            </div>

          </div>
        </div>
      </a>
    </div>


    {/* COLUMN 2 */}
    <div className="service-column-2 flex flex-col">

      <Link to="/contact" className="h-full">
        <div className="h-full min-h-[400px] bg-[#14141a] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group">

          {/* Top */}
          <div>
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#94B49F]/30 mb-6">
              <img
                src="./profile-removebg-preview.png?auto=format&fit=crop&q=80&w=200"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
              Have something
              <br />
              in mind?
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Tell me what you're working on and let's figure out how to bring it to life.
            </p>
          </div>

          {/* Bottom */}
          <div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-[#94B49F] transition-colors">
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

        </div>
      </Link>

    </div>


    {/* COLUMN 3 */}
    <div className="service-column-3 flex flex-col">

      <Link to="/discovery" className="h-full">
        <div className="h-full min-h-[400px] bg-[#f3f1ec] text-gray-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">

          {/* Top */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 max-w-xs">
              Is your website working for you?
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Find out what's helping your website convert — and what's getting in the way.
            </p>

            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
              Get my free audit
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>

          {/* Audit Graphic */}
          <div className="absolute left-6 right-6 bottom-10">

            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg transform rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-300">

              <div className="flex items-center justify-between border border-gray-200 rounded-lg p-2.5 bg-gray-50">

                <span className="text-[9px] text-gray-400">
                  Your website URL
                </span>

                <div className="w-6 h-6 bg-gray-200 rounded-md flex items-center justify-center">
                  <Search className="w-3 h-3 text-gray-600" />
                </div>

              </div>

              <div className="mt-3 space-y-2">
                <div className="h-1.5 bg-gray-200 rounded w-full" />
                <div className="h-1.5 bg-gray-200 rounded w-3/4" />
                <div className="h-1.5 bg-gray-200 rounded w-1/2" />
              </div>

            </div>

          </div>

        </div>
      </Link>

    </div>

  </div>
</section>

  );
};

export default ServicesGridSection;