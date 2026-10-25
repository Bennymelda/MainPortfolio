import React, { useState } from 'react';
import { ArrowUpRight, Plus, X } from 'lucide-react';

export const BeforeYouSendSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open as shown in image

  const faqs = [
    {
      question: "Is the website review really free?",
      answer: "Yes. There is no cost and no obligation. I send the review, you decide what to do with it — including nothing."
    },
    {
      question: "What do I actually get back?",
      answer: "You receive a concise, plain-English breakdown highlighting key friction points on your website, along with prioritized recommendations to improve clarity, conversion rates, and user experience."
    },
    {
      question: "How long does it take?",
      answer: "Reviews are completed and sent back directly to your email within 1–2 business days."
    },
    {
      question: "Do I have to hire you afterward?",
      answer: "Not at all. The review is completely yours to keep and use however you like, whether you implement the changes yourself, hand them to your team, or hire us."
    },
    {
      question: "Will you just tell me to rebuild the whole site?",
      answer: "No. Most sites only need targeted adjustments — such as fixing call-to-actions, clarifying messaging, or tweaking mobile layouts — rather than a complete overhaul."
    },
    {
      question: "What if I do not have a website yet?",
      answer: "If you don't have a website yet, we can discuss starting fresh with a custom design or concept tailored to your business goals."
    },
    {
      question: "Do you only review Arizona websites?",
      answer: "While we are based in Mesa and work heavily with Arizona businesses, we review and build websites for clients across the country."
    }
  ];

  return (
    <section className="w-full bg-[#f4f2eb] text-gray-900 py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Subtext */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Before you <br />
            send it over.
          </h2>

          <p className="text-gray-600 text-sm sm:text-sm leading-relaxed mb-8 max-w-lg">
            The questions owners usually ask before handing over their web address.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-purple-700 transition-colors"
          >
            Ask me something else
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column: FAQ Accordion Stack */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-gray-100 border border-gray-400/50 rounded-xl transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-3 sm:p-3 text-left focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {faq.question}

                  </span>
                  <div className="flex items-center justify-center flex-shrink-0 ml-4 text-gray-700">
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
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

export default BeforeYouSendSection;