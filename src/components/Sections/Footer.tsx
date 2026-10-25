import React from 'react';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-zinc-900 text-white pt-16 pb-12 px-6 md:px-12 lg:px-20 border-t border-white/10 font-sans relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16">
          
          {/* Brand & Info Column (Takes 2 columns on lg) */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-0 lg:pr-8">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  J
                </div>
                <span className="font-bold tracking-wider text-sm text-white">
                  JUNCIE STUDIOS
                </span>
              </div>

              {/* Tagline */}
              <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm font-mono leading-relaxed mb-8 max-w-xs">
                Websites and workplace automations for Arizona businesses.
              </p>
            </div>

            {/* Address & Email */}
            <div className="space-y-1.5 text-xs text-gray-700 dark:text-gray-400 font-mono">
              <p>Mesa, AZ 85212</p>
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
              <li><a href="#services" className="hover:text-black dark:hover:text-white transition-colors">Services</a></li>
              <li><a href="#locations" className="hover:text-black dark:hover:text-white transition-colors">Locations</a></li>
              <li><a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a></li>
              <li><a href="#blog" className="hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
              <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
              <li><a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a></li>
              <li><a href="#audit" className="hover:text-black dark:hover:text-white transition-colors">Free website audit</a></li>
              <li><a href="#concept" className="hover:text-black dark:hover:text-white transition-colors">Free homepage concept</a></li>
              <li><a href="#privacy" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-700 dark:text-gray-400 uppercase mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3 text-xs text-gray-800 dark:text-gray-300 font-medium">
              <li><a href="#e-commerce" className="hover:text-black dark:hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#web-design" className="hover:text-black dark:hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#graphic-design" className="hover:text-black dark:hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="#app-dev" className="hover:text-black dark:hover:text-white transition-colors">App Development</a></li>
              <li><a href="#web-dev" className="hover:text-black dark:hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#seo" className="hover:text-black dark:hover:text-white transition-colors">SEO</a></li>
              <li>
                <a href="#all-services" className="inline-flex items-center gap-1 text-black dark:text-white hover:text-[#94B49F] transition-colors pt-1">
                  All services<ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Arizona & Beyond */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-gray-700 dark:text-gray-400 uppercase mb-5">
              ARIZONA &amp; BEYOND
            </h4>
            <ul className="space-y-3 text-xs text-gray-800 dark:text-gray-300 font-medium">
              <li><a href="#mesa" className="hover:text-black dark:hover:text-white transition-colors">Mesa</a></li>
              <li><a href="#scottsdale" className="hover:text-black dark:hover:text-white transition-colors">Scottsdale</a></li>
              <li><a href="#tempe" className="hover:text-black dark:hover:text-white transition-colors">Tempe</a></li>
              <li><a href="#chandler" className="hover:text-black dark:hover:text-white transition-colors">Chandler</a></li>
              <li><a href="#gilbert" className="hover:text-black dark:hover:text-white transition-colors">Gilbert</a></li>
              <li>
                <a href="#all-areas" className="inline-flex items-center gap-1 text-black dark:text-white hover:text-[#94B49F] transition-colors pt-1">
                  All service areas <ArrowUpRight className="w-3 h-3" />
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
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[#f3f1ec] text-gray-700 dark:text-gray-900 text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl hover:bg-black dark:hover:bg-white transition-all transform hover:scale-105 border border-gray-200"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Start a project</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;