import React from 'react';

import { ArrowUpRight,  MapPin } from 'lucide-react';
import { Link } from "react-router-dom";
export const FamiliarFaceSection: React.FC = () => {
  return (
    <>
    <section className="w-full bg-white dark:bg-black dark:text-black text-white py-24 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Image Showcase */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
              alt="Brandon Mitchell working at desk"
              className="w-full h-[380px] sm:h-[440px] object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: Copy & Details */}
       
<div className="lg:col-span-6 flex flex-col items-start">
  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-4 block">
    DESIGN-MINDED. DEVELOPMENT-FOCUSED.
  </span>

  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-800 dark:text-gray-200 mb-6 leading-[1.08]">
    I build with <br />
    purpose.
  </h2>

  <div className="space-y-4 text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
    <p>
      I'm Benny, a frontend developer who turns ideas into real products.
      I combine thoughtful design with modern frontend development to build
      websites and web applications that are clear, responsive, and easy to use.
    </p>

    <p>
      I care about more than making a website look good. I think about how
      people experience it, how quickly they can understand what you offer,
      and what helps them trust your business enough to take action.
    </p>
  </div>

  {/* Author Footnote & Link */}
  <div className="pt-6 border-t border-black/10 dark:border-white/10 w-full flex items-center justify-between">
    <div>
      <h4 className="text-sm font-bold text-black dark:text-white">
        Benny Ibesi
      </h4>

      <p className="text-xs text-gray-700 dark:text-gray-400">
        Frontend Developer
      </p>
    </div>

    <Link
      to="/about"
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-black dark:text-white hover:text-[#94B49F] transition-colors"
    >
      More about me
      <ArrowUpRight className="w-4 h-4" />
    </Link>
  </div>
</div>


      </div>
    </section>

    <section className="w-full bg-[#CEE5D0] text-gray-900 py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Heading and CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start">
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
              className="inline-flex items-center gap-2 bg-[#94B49F] text-black font-medium text-xs sm:text-sm px-6 py-3.5 rounded-lg hover:bg-black transition-colors shadow-md"
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
      
      
<div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-gray-400/50 pt-8 lg:pt-0 lg:pl-10 flex flex-col items-start">
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