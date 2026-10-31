import React, { useState } from 'react';
import { ArrowUpRight, Mail} from 'lucide-react';
import Form from './Form';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
gsap.registerPlugin(useGSAP, ScrollTrigger);
export const ContactSection: React.FC = () => {
  const [activeTab] = useState<number>(1);
  

useGSAP(() => {
  const heading = new SplitText(".contact-heading", {
    type: "chars",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(heading.chars, {
    yPercent: 100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.035,
    ease: "power3.out",
  })
    .from(
      ".contact-intro p",
      {
        y: 15,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".contact-step",
      {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".contact-email",
      {
        y: 15,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".contact-form",
      {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.6"
    );
}, []);


  return (
    <section className="contact-section w-full bg-white dark:bg-zinc-900 text-white py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Context */}
        <div className="contact-intro lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
              LET'S TALK
            </span>

            <h2 className="contact-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white mb-6 leading-[1.1]">
              Good work starts <br />
              with a <span className="text-[#94B49F]">conversation.</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-12 max-w-xs">
              A new website, a fresh direction, or a better way to run your business. Tell me a little about yourself, then we'll shape the project together.
            </p>

            {/* Stepper Guide */}
            <div className="space-y-6 mb-12">
              <div className="contact-step flex items-start gap-4">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-colors ${
                    activeTab === 1
                      ? 'border-[#CEE5D0] text-white bg-[#94B49F]'
                      : 'border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-400'
                  }`}
                >
                  01
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 ">Make an introduction</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Your details come straight to me.</p>
                </div>
              </div>

              <div className="contact-step flex items-start gap-4">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-colors ${
                    activeTab === 2
                      ? 'border-[#CEE5D0] text-white bg-[#94B49F]'
                      : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-400'
                  }`}
                >
                  02
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 ">Tell me what you need</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">A rough idea is a good place to start.</p>
                </div>
              </div>

              <div className="contact-step flex items-start gap-4">
                <div
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-semibold flex-shrink-0 transition-colors ${
                    activeTab === 3
                      ? 'border-[#CEE5D0] text-white bg-[#94B49F]'
                      : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-400'
                  }`}
                >
                  03
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 ">Find the right fit</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-4000">A budget and timeline that work for you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Footer */}
          <div className="contact-email pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-400 mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Prefer email?</span>
            </div>
            <a
              href="mailto:benedictaibesi45@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-[#94B49F] transition-colors"
            >
              benedictaibesi45@gmail.com <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

       <div className="contact-form lg:col-span-7">
  <Form />
</div>
      </div>
    </section>
  );
};

export default ContactSection;