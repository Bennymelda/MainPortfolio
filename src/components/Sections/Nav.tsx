import React, { useState } from 'react';
import {  ArrowUpRight, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-zinc-900 backdrop-blur-md border-b border-white/5 font-sans">
      <div className="max-w-9xl mx-auto px-6 sm:px-6 lg:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <span className="font-bold tracking-wider text-base text-white group-hover:text-purple-300 transition-colors">
            IBESI BENEDICTA
          </span>
        </NavLink>

        

        {/* Start a project CTA Button */}
        <div className="hidden lg:flex items-center justify-between gap-8">
            {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-gray-300">
          <ThemeToggle />

         <NavLink to="/work" className="hover:text-white transition-colors">
  Work
</NavLink>



<NavLink to="/about" className="hover:text-white transition-colors">
  About
</NavLink>

<NavLink to="/contact" className="hover:text-white transition-colors">
  Contact
</NavLink>

        </nav>
          <NavLink
  to="/contact"
  className="inline-flex items-center gap-1.5 bg-[#f3f1ec] text-gray-900 font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-white transition-all shadow-md transform hover:scale-[1.02]"
>
  <span>Start a project</span>
  <ArrowUpRight className="w-3.5 h-3.5 text-gray-800" />
</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a12] border-b border-white/10 px-6 py-6 flex flex-col gap-4 text-sm font-medium text-gray-300 animate-fadeIn">
     
                 <NavLink to="/work" className="hover:text-white transition-colors">
  Work
</NavLink>

<NavLink to="/about" className="hover:text-white transition-colors">
  About
</NavLink>

<NavLink to="/contact" className="hover:text-white transition-colors">
  Contact
</NavLink>
          <div className="pt-2">
           <NavLink
  to="/contact"
  className="inline-flex items-center gap-1.5 bg-[#f3f1ec] text-gray-900 font-semibold text-xs px-4 py-2.5 rounded-lg hover:bg-white transition-all shadow-md transform hover:scale-[1.02]"
>
  <span>Start a project</span>
  <ArrowUpRight className="w-3.5 h-3.5 text-gray-800" />
</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;