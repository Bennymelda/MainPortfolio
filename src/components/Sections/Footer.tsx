import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import {Link} from "react-router-dom"
export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-[#14111a] text-white pt-16 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10 font-sans relative">
      <div className="max-w-8xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16">
          
          {/* Brand & Info Column (Takes 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              {/* Logo */}
              {/* Logo */}
<div className="flex items-center gap-2.5 mb-6">
  <div className="w-7 h-7 rounded-full bg-[#82A38D] flex items-center justify-center text-black font-bold text-xs shadow-md">
    B
  </div>

  <span className="font-bold tracking-wider text-sm text-black dark:text-white">
    BENNY IBESI
  </span>
</div>

              {/* Tagline */}
             <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-mono leading-relaxed mb-8 max-w-xs">
  I build websites and web applications that turn attention into action.
</p>
            </div>

            {/* Address & Email */}
            <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300 font-mono">
  <p>Nigeria · Available Worldwide</p>

  <a
    href="mailto:benedictaibesi45@gmail.com"
    className="hover:text-black dark:hover:text-white transition-colors inline-block"
  >
    benedictaibesi45@gmail.com
  </a>
</div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-700 dark:text-gray-400 uppercase mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-xs text-gray-800 dark:text-gray-300 font-medium">

              <li><Link to="/work" className="hover:text-black dark:hover:text-[#94B49F] transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-black dark:hover:text-[#94B49F] transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-black dark:hover:text-[#94B49F] transition-colors">Contact</Link></li>
              <li><Link to="/discovery" className="hover:text-black dark:hover:text-[#94B49F] transition-colors">Free website audit</Link></li>
              <a
  href="/discovery#audit-form"
  className="hover:text-black dark:hover:text-[#94B49F] transition-colors"
>
  Free homepage concept
</a>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-700 dark:text-gray-400 uppercase mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3 text-xs text-gray-800 dark:text-gray-300 font-medium">
              <li  className="hover:text-black dark:hover:text-[#94B49F] transition-colors">E-commerce</li>
              <li className="hover:text-black dark:hover:text-[#94B49F] transition-colors">Web Design</li>
              <li className="hover:text-black dark:hover:text-[#94B49F] transition-colors">Web Development</li>
              <li className="hover:text-black dark:hover:text-[#94B49F] transition-colors">SASS</li>
              <li>
              </li>
            </ul>
          </div>

          
{/* Column 3: Connect */}
<div>
  <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-700 dark:text-gray-400 uppercase mb-5">
    CONNECT
  </h4>

  <ul className="space-y-3 text-xs text-gray-800 dark:text-gray-300 font-medium">
    <li>
      <a
        href="https://www.linkedin.com/in/benny-ibesi"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#94B49F] transition-colors"
      >
        LinkedIn
      </a>
    </li>

    <li>
      <a
        href="https://github.com/Bennymelda"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#94B49F] transition-colors"
      >
        GitHub
      </a>
    </li>

    <li>
      <a
        href="mailto:benedictaibesi45@gmail.com"
        className="hover:text-[#94B49F] transition-colors"
      >
        Email me
      </a>
    </li>

    <li>
      <a
        href="/contact"
        className="inline-flex items-center gap-1 text-black dark:text-white hover:text-[#94B49F] transition-colors pt-1"
      >
        Let's talk <ArrowUpRight className="w-3 h-3" />
      </a>
    </li>
  </ul>
</div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-700 dark:text-gray-400 gap-4">
          <p>© 2026 benedicta. Built with purpose.</p>
        </div>
      </div>

      {/* Floating CTA Badge Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[#f3f1ec] text-gray-700 dark:text-gray-900 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl hover:bg-zinc-900 dark:hover:bg-white transition-all transform hover:scale-105 border border-gray-200"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Start a project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </footer>
  );
};

export default FooterSection;