import React, { useState } from 'react';
import { ArrowUpRight, Mail} from 'lucide-react';
import Form from './Form';

export const ContactSection: React.FC = () => {
  const [activeTab] = useState<number>(1);
  

  return (
    <section className="w-full bg-white dark:bg-black text-white py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Context */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full pr-0 lg:pr-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
              LET'S TALK
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white mb-6 leading-[1.1]">
              Good work starts <br />
              with a <span className="text-[#94B49F]">conversation.</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-12 max-w-xs">
              A new website, a fresh direction, or a better way to run your business. Tell me a little about yourself, then we'll shape the project together.
            </p>

            {/* Stepper Guide */}
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
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

              <div className="flex items-start gap-4">
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

              <div className="flex items-start gap-4">
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
          <div className="pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-400 mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span>Prefer email?</span>
            </div>
            <a
              href="mailto:benedictaibesi45@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-purple-300 transition-colors"
            >
              benedictaibesi45@gmail.com <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

       <Form />
      </div>
    </section>
  );
};

export default ContactSection;