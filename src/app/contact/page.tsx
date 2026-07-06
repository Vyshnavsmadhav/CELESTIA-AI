"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    role: "",
    region: "",
    timeline: "",
    problem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.company || !formData.role) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate API call
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-[104px] min-h-screen flex items-center justify-center bg-[#f7f6f2] py-16 px-4 md:px-8">
        <div className="w-full max-w-3xl bg-[#fdfdfc] rounded-2xl p-8 md:p-12 border border-[#e8e7e3] shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-300">
          
          {submitted ? (
            <div className="text-center py-12 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-300">
              <span className="material-symbols-outlined text-[64px] text-[#dfbe82] mb-6">
                check_circle
              </span>
              <h2 className="font-hanken text-[36px] font-light text-primary mb-4">
                Thank You
              </h2>
              <p className="font-inter text-[16px] text-on-surface-variant max-w-md mx-auto leading-relaxed mb-8">
                Your inquiry has been sent successfully. Our team will review your project details and get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    workEmail: "",
                    company: "",
                    role: "",
                    region: "",
                    timeline: "",
                    problem: "",
                  });
                }}
                className="bg-primary text-on-primary px-8 py-3 rounded-none font-inter text-[12px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Form Title */}
              <div className="text-center mb-10">
                <h1 className="font-hanken text-[36px] md:text-[42px] font-light tracking-tight text-[#1b2530]">
                  Tell Us About Your Project
                </h1>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="font-inter text-[13px] font-semibold text-[#444748]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter"
                  />
                </div>

                {/* Work Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="workEmail" className="font-inter text-[13px] font-semibold text-[#444748]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter"
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-inter text-[13px] font-semibold text-[#444748]">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter"
                  />
                </div>

                {/* Role */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="role" className="font-inter text-[13px] font-semibold text-[#444748]">
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter"
                  />
                </div>

                {/* Region Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="region" className="font-inter text-[13px] font-semibold text-[#444748]">
                    Region
                  </label>
                  <div className="relative">
                    <select
                      id="region"
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full appearance-none bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 pr-10 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter"
                    >
                      <option value="">Select region</option>
                      <option value="North America">North America</option>
                      <option value="Europe">Europe</option>
                      <option value="Asia-Pacific">Asia-Pacific</option>
                      <option value="Latin America">Latin America</option>
                      <option value="Middle East & Africa">Middle East & Africa</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">
                      keyboard_arrow_down
                    </span>
                  </div>
                </div>

                {/* Timeline Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="timeline" className="font-inter text-[13px] font-semibold text-[#444748]">
                    Timeline
                  </label>
                  <div className="relative">
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full appearance-none bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 pr-10 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                      <option value="Short Term (1-3 months)">Short Term (1-3 months)</option>
                      <option value="Medium Term (3-6 months)">Medium Term (3-6 months)</option>
                      <option value="Long Term (6+ months)">Long Term (6+ months)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">
                      keyboard_arrow_down
                    </span>
                  </div>
                </div>
              </div>

              {/* Description Textarea */}
              <div className="flex flex-col gap-2">
                <label htmlFor="problem" className="font-inter text-[13px] font-semibold text-[#444748]">
                  Please describe your business problem
                </label>
                <textarea
                  id="problem"
                  rows={4}
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="Describe your specific business challenge, current processes, and what you hope to achieve with AI..."
                  className="w-full bg-[#faf9f7] border border-[#e2e1dd] rounded-lg px-4 py-3 text-[14px] text-primary focus:outline-none focus:border-[#dfbe82] transition-colors font-inter resize-y"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#dfbe82] text-[#1b2530] font-semibold py-4 px-6 rounded-lg text-[14px] hover:bg-[#d4b174] active:bg-[#c9a466] transition-all cursor-pointer shadow-sm font-inter"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => alert("Calendar booking system coming soon.")}
                  className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#dfbe82] text-[#dfbe82] font-semibold py-4 px-6 rounded-lg text-[14px] hover:bg-[#dfbe82]/5 active:bg-[#dfbe82]/10 transition-all cursor-pointer font-inter"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  Book a Calendar Slot
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
