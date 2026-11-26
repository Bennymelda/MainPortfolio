
import React, { useState, useRef } from 'react';
import { ArrowUpRight, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const RequestReviewSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    goal: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sectionRef = useRef<HTMLElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const submissionData = {
      name: formData.name,
      email: formData.email,
      _replyto: formData.email,
      _subject: `New Free Website Review Request from ${formData.name}`,
      _template: 'table',
      _honey: '',
      website: formData.website,
      goal: formData.goal || 'Not provided',
    };

    fetch('https://formsubmit.co/ajax/benedictaibesi45@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(submissionData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (String(data.success) !== 'true') {
          throw new Error(
            data.message || 'Unable to send your request. Please try again.'
          );
        }

        setSubmitStatus('success');

        setFormData({
          name: '',
          email: '',
          website: '',
          goal: '',
        });
      })
      .catch((error) => {
        console.error('Website review submission error:', error);

        setSubmitStatus('error');
        setErrorMessage(
          error.message || 'Something went wrong. Please try again.'
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useGSAP(() => {
    gsap.from(".audit-left", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".audit-form-card", {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="audit-form"
      className="w-full bg-white dark:bg-[#0a0a10] text-white py-20 px-6 sm:px-6 lg:px-6 font-sans"
    >
      <div className="max-w-9xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column */}
        <div className="audit-left lg:col-span-6 flex flex-col justify-between h-full pr-0 lg:pr-8">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-400 mb-4 block">
              FREE WEBSITE REVIEW
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black dark:text-white mb-6 leading-[1.08]">
              Let’s see what <br />
              your website is <br />
              doing.
            </h2>

            <p className="text-gray-800 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
              Send the web address and I will tell you straight what is working and what is costing you customers. If the fixes are simple, I will say so.
            </p>

            {/* Author Profile Card */}
            <div className="pt-8 border-t border-white/10 flex items-start gap-4 mb-8">
              <img
                src="./profile-removebg-preview.png?auto=format&fit=crop&q=80&w=200"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border border-white/20 flex-shrink-0"
              />

              <div>
                <h4 className="text-sm font-bold text-black dark:text-white mb-1">
                  Benedicta Ibesi
                </h4>

                <p className="text-xs text-gray-700 dark:text-gray-400 leading-relaxed max-w-md">
                  I review every site myself. I focus on identifying where websites lose visitors, create friction, and miss opportunities to convert.
                </p>
              </div>
            </div>

            {/* Email Contact Box */}
            <div className="bg-gray-50 dark:bg-zinc-900 border border-white/5 rounded-xl p-5">
              <p className="text-xs text-gray-700 dark:text-gray-400 mb-2">
                Prefer email? Send your site straight to me.
              </p>

              <a
                href="mailto:benedictaibesi45@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-black dark:text-white hover:text-[#94B49F] transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-700 dark:text-gray-400" />
                benedictaibesi45@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="audit-form-card lg:col-span-6 bg-white dark:bg-[#121118] border border-black/10 dark:border-white/5 rounded-xl p-6 sm:p-10">

          <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
            Request your free review
          </h3>

          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400 mb-8">
            Two minutes now, a clear list of fixes back in your inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Your name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First and last name"
                className="w-full bg-gray-50 dark:bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-black dark:text-white placeholder-gray-600 focus:outline-none focus:border-[#94B49F] focus:ring-1 focus:ring-[#94B49F] transition-all"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@yourbusiness.com"
                className="w-full bg-gray-50 dark:bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-black dark:text-white placeholder-gray-600 focus:outline-none focus:border-[#94B49F] focus:ring-1 focus:ring-[#94B49F] transition-all"
                required
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Website
              </label>

              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourbusiness.com"
                className="w-full bg-gray-50 dark:bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-black dark:text-white placeholder-gray-600 focus:outline-none focus:border-[#94B49F] focus:ring-1 focus:ring-[#94B49F] transition-all"
                required
              />
            </div>

            {/* Goal */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                What would you like the site to do?{' '}
                <span className="text-gray-500 font-normal">
                  (optional)
                </span>
              </label>

              <textarea
                name="goal"
                rows={3}
                value={formData.goal}
                onChange={handleChange}
                placeholder="More calls, more bookings, fewer questions by phone — whatever matters most right now."
                className="w-full bg-gray-50 dark:bg-[#0a0910] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-black dark:text-white placeholder-gray-600 focus:outline-none focus:border-[#94B49F] focus:ring-1 focus:ring-[#94B49F] transition-all resize-none"
              />
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />

                <div>
                  <p className="text-sm font-semibold">
                    Review request sent successfully!
                  </p>

                  <p className="text-xs mt-1">
                    Thank you! I'll review your website and get back to you.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-red-800">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />

                <div>
                  <p className="text-sm font-semibold">
                    Request could not be sent.
                  </p>

                  <p className="text-xs mt-1">
                    {errorMessage}
                  </p>

                  <p className="text-xs mt-1">
                    Please try again or email me directly.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#94B49F] text-gray-900 font-semibold text-xs sm:text-sm py-4 rounded-xl hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2 mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting
                  ? 'Sending request...'
                  : 'Send my website for review'}
              </span>

              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowUpRight className="w-4 h-4" />
              )}
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
