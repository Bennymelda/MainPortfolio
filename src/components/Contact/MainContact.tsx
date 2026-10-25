
import { ArrowUpRight, Mail } from 'lucide-react';
import {Scan, Sparkles } from 'lucide-react';
import Form from '../Sections/Form';
import FooterSection from '../Sections/Footer';
export const LetUsTalkSection: React.FC = () => {


  return (
    <>
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Bio, and Email */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full pr-0 lg:pr-6">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-4 block">
              LET'S TALK
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-6 leading-[1.08]">
              Good things start <br />
              with a <span className="text-[#94B49F]">conversation.</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
              A new website, a better online store, or a little less busywork. Tell me what’s on your mind, and we'll work out the next step.
            </p>

            {/* Author Profile Card */}
            <div className="flex items-center gap-4 mb-10">
              <img
                src="./main-picture.png?auto=format&fit=crop&q=80&w=200"
                alt="Brandon Mitchell"
                className="w-14 h-14 rounded-full object-cover border border-white/20 flex-shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Benedicta Ibesi</h4>
                <p className="text-xs text-gray-800 dark:text-gray-400 leading-snug">
                  Developer, your point of contact. <br />
                  Based in Anambra, Nigeria.
                </p>
              </div>
            </div>

            {/* Email Contact Box */}
            <div className="pt-4 border-t border-white/10 mb-4 ">
              <div className="flex items-center gap-2 text-xs text-gray-800 dark:text-gray-400 mb-1">
                <Mail className="w-3.5 h-3.5" />
                <span>Prefer email?</span>
              </div>
              <a
                href="mailto:benedictaibesi45@gmail.com"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-black dark:text-white hover:text-purple-300 transition-colors"
              >
                benedictaibesi45@gmail.com <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* What Happens Next Footnote */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white mb-1">
              What happens next?
            </h4>
            <p className="text-xs text-gray-700 dark:text-gray-400 leading-relaxed max-w-md">
              I'll read your message and follow up to talk through the scope, your questions, and where to start.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6  ">
          <Form />
        </div>

      </div>
    </section>


<section className="w-full bg-[#f4f2eb] text-gray-900 py-10 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Title & Subtitle */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
            A PLACE TO START
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.08]">
            Still figuring <br />
            things out?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            You don’t need to have it all mapped out.
          </p>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Green/Sage Accent */}
          <div className="bg-[#CEE5D0] border border-gray-300/60 rounded-xl p-8 flex flex-col justify-between min-h-[260px] hover:shadow-lg transition-all duration-300 group">
            <div>
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mb-6 text-gray-800">
                <Scan className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                A fresh pair of eyes.
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Get a free review of your current website and a clearer idea of what to improve.
              </p>
            </div>

            <a
              href="#review"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 group-hover:text-[#94B49F] transition-colors"
            >
              Request a website review
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Lavender/Purple Accent */}
          <div className="bg-[#FCF8E8] border border-purple-200/60 rounded-xl p-8 flex flex-col justify-between min-h-[260px] hover:shadow-lg transition-all duration-300 group">
            <div>
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center mb-6 text-gray-800">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Picture something new.
              </h3>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                Request a free homepage concept to explore a new direction for your business.
              </p>
            </div>

            <a
              href="#concept"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-900 group-hover:text-[#94B49F] transition-colors"
            >
              Request a homepage concept
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
     
      </div>
    </section>
    <FooterSection />
    </>
  );
};

export default LetUsTalkSection;