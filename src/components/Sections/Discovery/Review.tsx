import React from 'react';
import { Eye, MousePointerClick, Smartphone, Gauge, MapPin, ShieldCheck, Check, ArrowUpRight } from 'lucide-react';

export const ReviewCoversSection: React.FC = () => {
  const coverCards = [
    {
      icon: <Eye className="w-5 h-5 text-gray-300" />,
      title: "First impression",
      description: "What your homepage says you do, and whether someone new understands it in about five seconds."
    },
    {
      icon: <MousePointerClick className="w-5 h-5 text-gray-300" />,
      title: "The path to contact",
      description: "How easy it is to call, book, or send a message from any page — not just the contact page."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-gray-300" />,
      title: "Phone experience",
      description: "How the site behaves on the screens most of your customers actually use, including tap targets."
    },
    {
      icon: <Gauge className="w-5 h-5 text-gray-300" />,
      title: "Speed",
      description: "What is slowing the page down, and which of those fixes are worth the effort."
    },
    {
      icon: <MapPin className="w-5 h-5 text-gray-300" />,
      title: "Local search",
      description: "Whether Google can tell what you do and where you do it, across Scottsdale, Tempe, Chandler, and the wider metro."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gray-300" />,
      title: "Trust signals",
      description: "Reviews, photos, pricing clarity, and the details that make people comfortable hiring you."
    }
  ];

  const planBullets = [
    "The three fixes worth doing first, in order",
    "What each one should do for calls or bookings",
    "Rough effort, so you know what is a quick win"
  ];

  return (
    <>
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-6 lg:px-6 font-sans">
  <div className="max-w-9xl mx-auto">

    {/* Header Grid: Title Left, Subtext Right */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
      <div className="lg:col-span-7">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-black dark:text-gray-300 leading-[1.1]">
          What the review covers.
        </h2>
      </div>

      <div className="lg:col-span-5">
        <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mx-auto max-w-xs">
          Six things decide whether a visitor becomes a customer. I check all six on your site and tell you where you stand.
        </p>
      </div>
    </div>

    {/* 3x2 Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {coverCards.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-[#14111a] border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col justify-between hover:border-black/20 dark:hover:border-white/15 transition-all duration-300"
        >
          <div>
            <div className="w-5 h-5  rounded-xl flex items-center justify-center mb-4">
              {card.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-300 mb-3">
              {card.title}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>

    {/* Bottom Banner Card */}
    <div className="bg-[#f3f7f4] dark:bg-[#101b15] border border-none dark:border-emerald-950/60 rounded-2xl p-4 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">

      <div className="lg:col-span-7">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          You get a short plan, not a 40-page report.
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-sm leading-relaxed">
          Long audits get filed away. This one is written so you can hand it to whoever works on your site — including me, if you want a quote.
        </p>
      </div>

      <div className="lg:col-span-5 space-y-3 border-t lg:border-t-0 lg:border-l border-[#94B49F]/30 dark:border-emerald-900/40 pt-6 lg:pt-0 lg:pl-8">

        {planBullets.map((bullet, idx) => (
          <div key={idx} className="flex items-start gap-3">

            <div className="w-5 h-5 rounded-full bg-[#94B49F]/20 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-[#5f806c] dark:text-emerald-400" />
            </div>

            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-base">
              {bullet}
            </span>

          </div>
        ))}

      </div>
    </div>

  </div>
</section>


<section className="w-full bg-[#121118] text-white py-10 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading and Context */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full pr-0 lg:pr-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
              How it works.
            </h2>

            <p className="text-gray-400 text-sm sm:text-sm leading-relaxed mb-10 max-w-sm font-normal">
              You are dealing with me directly the whole way through — no account manager, no automated report, no follow-up calls you did not ask for.
            </p>
            <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors"
          >
            Rather talk it through first?
            <ArrowUpRight className="w-4 h-4" />
          </a>
          </div>

          
        </div>

        {/* Right Column: Step Cards */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          
          {/* Card 1 */}
          <div className="bg-[#1b1924] border border-white/5 rounded-lg p-2 sm:p-2 hover:border-white/10 transition-colors">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
              Send your website
            </h3>
            <p className="text-gray-400 text-xs sm:text-xs leading-relaxed">
              Fill in the form with your web address and what you would like the site to do for the business.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1b1924] border ml-10 border-white/5 rounded-lg p-2 sm:p-2 hover:border-white/10 transition-colors">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
              I go through it by hand
            </h3>
            <p className="text-gray-400 text-xs sm:text-xs leading-relaxed">
              No automated score sheet. I look at the pages your customers use, on desktop and on a phone.
            </p>
          </div>

          {/* Card 3 (Highlighted Green/Sage Accent) */}
          <div className="bg-[#c2d3c7] ml-15 text-gray-900 rounded-lg p-2 sm:p-2 shadow-xl">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 ">
              You get a short plan
            </h3>
            <p className="text-gray-800 text-xs  leading-relaxed">
              A written review in 1–2 business days with the fixes ranked. Then it is your call what happens next.
            </p>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};

export default ReviewCoversSection;