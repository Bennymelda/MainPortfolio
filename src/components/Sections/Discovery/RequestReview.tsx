import React, { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

export const RequestReviewSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goal: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Review request sent successfully!');
  };

  return (
    <section id="audit-form" className="w-full bg-[#0a0a10] text-white py-20 px-6 sm:px-6 lg:px-6 font-sans">
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Information & Bio */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full pr-0 lg:pr-8">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4 block">
              FREE WEBSITE REVIEW
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
              Let’s see what <br />
              your website is <br />
              doing.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
              Send the web address and I will tell you straight what is working and what is costing you customers. If the fixes are simple, I will say so.
            </p>

            {/* Author Profile Card */}
            <div className="pt-8 border-t border-white/10 flex items-start gap-4 mb-8">
              <img
                src="./main-picture.png?auto=format&fit=crop&q=80&w=200"
                alt="Brandon Mitchell"
                className="w-12 h-12 rounded-full object-cover border border-white/20 flex-shrink-0"
              />
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Brandon Mitchell</h4>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                  I review every site myself. Five years of building websites and automations for Arizona businesses, and I have seen where the leads leak out.
                </p>
              </div>
            </div>

            {/* Email Contact Box */}
            <div className="bg-zinc-900 border border-white/5 rounded-xl p-5">
              <p className="text-xs text-gray-400 mb-2">Prefer email? Send your site straight to me.</p>
              <a
                href="mailto:benedictaibesi45@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-400" />
                benedictaibesi45@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="lg:col-span-6 bg-[#121118] border border-white/10 rounded-xl p-6 sm:p-10 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Request your free review
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mb-8">
            Two minutes now, a clear list of fixes back in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First and last name"
                className="w-full bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@yourbusiness.com"
                className="w-full bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Website
              </label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="yourbusiness.com"
                className="w-full bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                What would you like the site to do? <span className="text-gray-500 font-normal">(optional)</span>
              </label>
              <textarea
                name="goal"
                rows={3}
                value={formData.goal}
                onChange={handleChange}
                placeholder="More calls, more bookings, fewer questions by phone — whatever matters most right now."
                className="w-full bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f3f1ec] text-gray-900 font-semibold text-xs sm:text-sm py-4 rounded-xl hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2 mt-4"
            >
              <span>Send my website for review</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-[11px] text-gray-500 text-center mt-4">
            No cost and no obligation. Your details stay with me and are never shared or sold.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RequestReviewSection;