import React, { useState } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const WorkingTogetherSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default second item open as shown in image


const faqs = [
  {
    question: "What is different about working with me?",
    answer:
      "You work directly with me from the first conversation to the final product. I take the time to understand what you're trying to achieve, then design and build a website around your goals, audience, and business—not just a template."
  },
  {
    question: "How do you make sure a website actually works for a business?",
    answer:
      "I focus on more than how a website looks. I think about clarity, user experience, responsiveness, performance, and the path you want visitors to take. The goal is to make it easy for people to understand what you offer, trust your business, and take action."
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Yes. You can explore my work to see the websites and web applications I've built, the problems they were designed to solve, and the decisions behind the final product."
  }
];


useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".working-together",
      start: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".working-heading", {
    y: 25,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  }).from(
    ".working-faq",
    {
      y: 20,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    },
    "-=0.3"
  );
}, []);


  return (
    <section className="working-together relative w-full bg-[#CEE5D0] text-white py-20 px-6 md:px-6 lg:px-6 overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-indigo-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-5 flex flex-col items-start">
  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-800  mb-4">
    WORKING TOGETHER
  </span>

  <h2 className="working-heading text-3xl text-black  sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-[1.1]">
    Looking for a frontend developer?
  </h2>

  <p className="text-gray-700  text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
    I work with businesses and founders to turn ideas into clear, responsive,
    and conversion-focused websites and web applications built around their goals.
  </p>

  <Link
    to="/contact"
    className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-[#94B49F] transition-colors"
  >
    Let's work together
    <ArrowUpRight className="w-4 h-4" />
  </Link>
</div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`working-faq border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white  border-zinc-200 '
                    : 'bg-white   border-zinc-200   hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-4 py-2 border border-zinc-100  text-left focus:outline-none"
                >
                  <span className="text-base sm:text-base font-medium text-gray-800 ">
                    {faq.question}
                  </span>
                  <div className="cursor-pointer w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 ml-4 text-gray-800 ">
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-800  text-sm sm:text-base leading-relaxed animate-fadeIn">
                    <p className="mb-6">{faq.answer}</p>
                    
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WorkingTogetherSection;