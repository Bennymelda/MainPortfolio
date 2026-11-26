
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Form = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    currentWebsite: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitStatus('idle');
  };

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (activeTab < 3) {
      setActiveTab((prev) => prev + 1);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const submissionData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      _replyto: formData.email,
      _subject: `New Portfolio Enquiry from ${formData.firstName} ${formData.lastName}`,
      _template: 'table',
      _honey: '',
      phone: formData.phone || 'Not provided',
      business_name: formData.businessName || 'Not provided',
      current_website: formData.currentWebsite || 'Not provided',
      project_type: formData.projectType || 'Not specified',
      project_description: formData.description || 'Not provided',
      budget: formData.budget || 'Not specified',
      timeline: formData.timeline || 'Not specified',
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
        // FormSubmit may return success as a string.
        if (String(data.success) !== 'true') {
          throw new Error(
            data.message || 'Unable to send your message. Please try again.'
          );
        }

        setSubmitStatus('success');

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          businessName: '',
          currentWebsite: '',
          projectType: '',
          description: '',
          budget: '',
          timeline: '',
        });

        setActiveTab(1);
      })
      .catch((error) => {
        console.error('Form submission error:', error);

        setSubmitStatus('error');
        setErrorMessage(
          error.message || 'Something went wrong. Please try again.'
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <div className="lg:col-span-7 bg-[#f3f1ec] text-gray-900 rounded-xl p-6 sm:p-10 shadow-sm">

        {/* Tabs Navigation */}
        <div className="grid grid-cols-3 gap-2 border-b border-gray-300/60 pb-4 mb-8">

          <button
            type="button"
            onClick={() => setActiveTab(1)}
            className={`text-left pb-2 transition-all ${
              activeTab === 1
                ? 'border-b-2 border-[#94B49F] text-gray-700 font-bold'
                : 'text-gray-400 hover:text-gray-600 font-medium'
            }`}
          >
            <span className="text-[10px] sm:text-xs block">
              01 About you
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab(2)}
            className={`text-left pb-2 transition-all ${
              activeTab === 2
                ? 'border-b-2 border-[#94B49F] text-gray-900 font-bold'
                : 'text-gray-400 hover:text-gray-600 font-medium'
            }`}
          >
            <span className="text-[10px] sm:text-xs block">
              02 Your project
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab(3)}
            className={`text-left pb-2 transition-all ${
              activeTab === 3
                ? 'border-b-2 border-[#94B49F] text-gray-900 font-bold'
                : 'text-gray-400 hover:text-gray-600 font-medium'
            }`}
          >
            <span className="text-[10px] sm:text-xs block">
              03 Budget &amp; timing
            </span>
          </button>

        </div>

        <form onSubmit={handleNext}>

          {/* STEP 1: About You */}
          {activeTab === 1 && (
            <div className="space-y-6">

              <div>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1">
                  STEP 1 OF 3
                </span>

                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-1">
                  First, a little about you.
                </h3>

                <p className="text-xs sm:text-sm text-gray-600">
                  Start with the basics. We'll get into your project next.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs text-gray-600 mb-1 font-medium">
                    First name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1 font-medium">
                    Last name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                    required
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs text-gray-600 mb-1 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1 font-medium">
                    Phone <span className="text-gray-400">(optional)</span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>
                  <label className="block text-xs text-gray-600 mb-1 font-medium">
                    Business name <span className="text-gray-400">(optional)</span>
                  </label>

                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1 font-medium">
                    Current website <span className="text-gray-400">(optional)</span>
                  </label>

                  <input
                    type="text"
                    name="currentWebsite"
                    value={formData.currentWebsite}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                  />
                </div>

              </div>
            </div>
          )}

          {/* STEP 2: Your Project */}
          {activeTab === 2 && (
            <div className="space-y-6">

              <div>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1">
                  STEP 2 OF 3
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  What are we building?
                </h3>

                <p className="text-xs sm:text-sm text-gray-600">
                  Tell us about your project goals and scope.
                </p>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1 font-medium">
                  Project Type
                </label>

                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                >
                  <option value="">Select a service...</option>
                  <option value="custom_website">Custom Website Design &amp; Dev</option>
                  <option value="e_commerce">Online Store / E-commerce</option>

                  <option value="redesign">Website Redesign</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1 font-medium">
                  Tell us about the project
                </label>

                <textarea
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Briefly describe your goals, required features, or pain points..."
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all resize-none"
                />
              </div>

            </div>
          )}

          {/* STEP 3: Budget & Timing */}
          {activeTab === 3 && (
            <div className="space-y-6">

              <div>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-1">
                  STEP 3 OF 3
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  Budget &amp; Timeline.
                </h3>

                <p className="text-xs sm:text-sm text-gray-600">
                  Helps us tailor the initial scope and roadmap.
                </p>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1 font-medium">
                  Estimated Budget
                </label>

                <select
  name="budget"
  value={formData.budget}
  onChange={handleInputChange}
  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
>
  <option value="">Select budget range...</option>
  <option value="under_500">Under $500</option>
  <option value="500_1000">$500 - $1,000</option>
  <option value="1000_2500">$1,000 - $2,500</option>
  <option value="2500_5000">$2,500 - $5,000</option>
  <option value="5000_plus">$5,000+</option>
  <option value="not_sure">Not sure yet I'd like to discuss</option>
</select>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-1 font-medium">
                  Desired Timeline
                </label>

                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-300 rounded-xl px-3.5 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#CEE5D0] transition-all"
                >
                  <option value="">Select target timeline...</option>
                  <option value="asap">ASAP (Within 2-3 weeks)</option>
                  <option value="1_month">1 Month</option>
                  <option value="2_months">2+ Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

            </div>
          )}

          {/* Submission Feedback */}
          {submitStatus === 'success' && (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
              <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />

              <div>
                <p className="text-sm font-semibold">
                  Message sent successfully!
                </p>
                <p className="text-xs mt-1">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-red-800">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />

              <div>
                <p className="text-sm font-semibold">
                  Message could not be sent.
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

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-8">

            {activeTab > 1 && (
              <button
                type="button"
                onClick={() => setActiveTab((prev) => prev - 1)}
                disabled={isSubmitting}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors disabled:opacity-50"
              >
                Go back
              </button>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto inline-flex items-center gap-2 bg-[#789982] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-[#94B49F] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>
                {isSubmitting
                  ? 'Sending...'
                  : activeTab === 3
                    ? 'Submit Request'
                    : 'Continue'}
              </span>

              {isSubmitting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ArrowRight className="w-3.5 h-3.5" />
              )}
            </button>

          </div>

        </form>
      </div>
    </>
  );
};

export default Form;
