import React from 'react';
import { ArrowDown, PhoneOff, Smartphone, EyeOff, SearchX, AlertCircle } from 'lucide-react';
import {useGSAP} from "@gsap/react"
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
export const SoundFamiliarSection: React.FC = () => {
  const problems = [
    {
      icon: <PhoneOff className="w-5 h-5 text-gray-500" />,
      title: "People visit, then nobody calls.",
      description: "Traffic is not the problem. The page never asks for the next step, so visitors read it and leave."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-gray-500" />,
      title: "It looks fine on your laptop, rough on a phone.",
      description: "Most customers find you on a phone first. That is usually where the calls quietly disappear."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-gray-500" />,
      title: "A stranger cannot tell what you do.",
      description: "If your headline does not say the service and the city, people bounce before they scroll."
    },
    {
      icon: <SearchX className="w-5 h-5 text-gray-500" />,
      title: "You show up for your name, not for the work.",
      description: "Ranking for your business name is easy. Ranking for what you sell is where the leads are."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-gray-500" />,
      title: "You are not sure what to fix first.",
      description: "Everyone has an opinion about your website. A review gives you an order and a reason."
    }
  ];
useGSAP(() => {
  const heading = new SplitText(".problems-heading", {
    type: "chars",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".problems-section",
      start: "top 50%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(".problems-label", {
    y: 15,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })
    .from(
      heading.chars,
      {
        yPercent: 100,
        opacity: 0,
        duration: 0.6,
        stagger: 0.025,
        ease: "power3.out",
      },
      "-=0.15"
    )
    .from(
      ".problems-description",
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .from(
      ".problems-link",
      {
        y: 12,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.2"
    );

  gsap.utils.toArray<HTMLElement>(".problem-item").forEach((item) => {
    gsap.from(item, {
      y: 25,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });
  });
}, []);
  return (
    <section className="problems-section w-full bg-[#f3f1ec] text-gray-900 py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Subtext */}
        <div className="problems-intro lg:col-span-5 flex flex-col items-start ">
          <span className="problems-label text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
            WHY OWNERS ASK FOR THIS
          </span>

          <h2 className="problems-heading text-4xl sm:text-5xl lg:text-5xl font-lighttracking-tight text-zinc-900 mb-6 leading-[1]">
            Does any of this <br />
            sound familiar?
          </h2>

          <p className="problems-description text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            A website can look perfectly fine and still cost you customers every week. These are the five problems I find most often on Arizona business sites.
          </p>

          <a
            href="#review"
            className="problems-link inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#82A38D] transition-colors"
          >
            Have your site reviewed
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column: List of Problems */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-gray-300/60 border-t border-b border-gray-300/60">
          {problems.map((item, index) => (
            <div key={index} className="problem-item py-4 sm:py-4 flex items-start gap-4 sm:gap-6 group">
              <div className="p-2  group-hover:bg-gray-200 transition-colors flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold  text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoundFamiliarSection;