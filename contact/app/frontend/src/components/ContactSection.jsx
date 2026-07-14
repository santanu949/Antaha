import React, { useState } from "react";
import { MessageCircle, Send, Phone, MapPin, ChevronDown, Twitter, User, Mail, MessageSquare, ChevronRight } from "lucide-react";
import MountainVistaParallax from "./ui/mountain-vista-bg";


const COUNTRIES = [
  { code: "US", dial: "+1" },
  { code: "UK", dial: "+44" },
  { code: "AU", dial: "+61" },
  { code: "IN", dial: "+91" },
  { code: "CA", dial: "+1" },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "US",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      alert("Please fill in First Name, Email, and Message.");
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwqBnbyfOTJwYjuvXXNL1jinQ6uaAfBo_yfEQjdsQX1Yu0K3etgkYgvVIZZYCRcqHtbpQ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(form),
      });
      
      const result = await response.json();
      if (result.status === "success") {
        setSubmitStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", country: "US" });
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const inputClass =
    "contact-input w-full md:h-[38px] md:px-3 md:rounded-lg border border-gray-300 bg-white text-[14px] text-gray-900 placeholder:text-gray-400 max-md:text-[10px] max-md:h-[35px] max-md:pl-[34px] max-md:pr-4 max-md:rounded-xl max-md:shadow-sm";

  return (
    <section className="relative w-full">
      <MountainVistaParallax />
      <div className="content-wrap max-w-[1180px] mx-auto md:px-8 max-md:px-5 pt-6 md:pb-24 max-md:pb-[100px]">
        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto">
          <h1 className="display-font max-md:text-[26px] text-[52px] md:text-[64px] leading-[1.02] font-extrabold text-gray-900">
            Contact our team
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="max-md:mt-3 mt-8 grid grid-cols-1 lg:grid-cols-2 max-md:gap-3 md:gap-12 lg:gap-16">
          {/* LEFT: Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-md:gap-2">
              <div>
                <label className="block max-md:text-[9px] text-[13px] font-medium text-gray-700 max-md:mb-0 md:mb-1">First name</label>
                <div className="relative">
                  <div className="max-md:absolute max-md:left-3 max-md:top-1/2 max-md:-translate-y-1/2 max-md:flex md:hidden text-gray-400">
                    <User size={13} strokeWidth={2} />
                  </div>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className="block max-md:text-[9px] text-[13px] font-medium text-gray-700 max-md:mb-0 md:mb-1">Last name</label>
                <div className="relative">
                  <div className="max-md:absolute max-md:left-3 max-md:top-1/2 max-md:-translate-y-1/2 max-md:flex md:hidden text-gray-400">
                    <User size={13} strokeWidth={2} />
                  </div>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 max-md:mt-2">
              <label className="block max-md:text-[9px] text-[13px] font-medium text-gray-700 max-md:mb-0 md:mb-1">Email</label>
              <div className="relative">
                <div className="max-md:absolute max-md:left-3 max-md:top-1/2 max-md:-translate-y-1/2 max-md:flex md:hidden text-gray-400">
                  <Mail size={13} strokeWidth={2} />
                </div>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4 max-md:mt-2">
              <label className="block max-md:text-[9px] text-[13px] font-medium text-gray-700 max-md:mb-0 md:mb-1">Phone number</label>
              <div className="contact-input flex items-center md:h-[38px] md:rounded-lg border border-gray-300 bg-white md:px-3 max-md:h-[35px] max-md:pl-[34px] max-md:pr-3 max-md:rounded-xl max-md:shadow-sm relative">
                <div className="max-md:absolute max-md:left-3 max-md:flex md:hidden text-gray-400">
                  <Phone size={13} strokeWidth={2} />
                </div>
                <div className="flex items-center gap-1 pr-2.5 border-r border-gray-200">
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="country-select appearance-none max-md:pr-2 md:pr-4 max-md:text-[10px] text-[14px] font-medium"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23111827' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right center",
                    }}
                  >
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="flex-1 bg-transparent outline-none border-none max-md:pl-2 md:pl-3 max-md:text-[10px] text-[14px] text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="mt-4 max-md:mt-2">
              <label className="block max-md:text-[9px] text-[13px] font-medium text-gray-700 max-md:mb-0 md:mb-1">Message</label>
              <div className="relative">
                <div className="max-md:absolute max-md:left-3 max-md:top-[12px] max-md:flex md:hidden text-gray-400">
                  <MessageSquare size={13} strokeWidth={2} />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Leave us a message..."
                  rows={4}
                  className="contact-input w-full md:px-3 md:py-2.5 md:rounded-lg border border-gray-300 bg-white max-md:text-[10px] text-[14px] text-gray-900 placeholder:text-gray-400 resize-none max-md:pt-2.5 max-md:pl-[34px] max-md:pr-4 max-md:rounded-xl max-md:shadow-sm max-md:min-h-[77px]"
                />
              </div>
            </div>

            {submitStatus === "success" && (
              <div className="mt-4 max-md:mt-2 p-3 max-md:p-2 bg-green-50 text-green-700 text-[13px] max-md:text-[11px] rounded-lg border border-green-200">
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 max-md:mt-2 p-3 max-md:p-2 bg-red-50 text-red-700 text-[13px] max-md:text-[11px] rounded-lg border border-red-200">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="send-btn md:mt-[172px] w-full md:h-[42px] md:rounded-lg bg-gray-900 text-white text-[14px] font-semibold max-md:mt-3 max-md:h-[35px] max-md:rounded-xl max-md:flex max-md:items-center max-md:justify-center max-md:gap-2 disabled:opacity-70 transition-opacity"
            >
              <Send size={18} className="max-md:block md:hidden" />
              <span>{isSubmitting ? "Sending..." : "Send message"}</span>
            </button>
          </form>

          {/* RIGHT: Contact info (Desktop) */}
          <div className="hidden md:block w-full max-w-[420px] mx-auto lg:mx-0 lg:mr-auto lg:pl-4">
            {/* Chat with us */}
            <div>
              <h3 className="text-[18px] font-semibold text-gray-900">Chat with us</h3>
              <p className="mt-1.5 text-[13px] text-gray-600">Speak to our friendly team via live chat.</p>
              <div className="mt-5 space-y-3">
                <a href="#" className="info-link flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                  <MessageCircle size={16} strokeWidth={2} />
                  <span className="underline underline-offset-4 decoration-1">Start a live chat</span>
                </a>
                <a href="#" className="info-link flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                  <Send size={16} strokeWidth={2} />
                  <span className="underline underline-offset-4 decoration-1">Shoot us an email</span>
                </a>
                <a href="#" className="info-link flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                  <Twitter size={16} strokeWidth={2} />
                  <span className="underline underline-offset-4 decoration-1">Message us on X</span>
                </a>
              </div>
            </div>

            {/* Call us */}
            <div className="mt-10">
              <h3 className="text-[18px] font-semibold text-gray-900">Call us</h3>
              <p className="mt-1.5 text-[13px] text-gray-600">Call our team.</p>
              <a href="tel:+15550000000" className="info-link mt-5 flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                <Phone size={16} strokeWidth={2} />
                <span className="underline underline-offset-4 decoration-1">+1 (555) 000-0000</span>
              </a>
            </div>

            {/* Visit us */}
            <div className="mt-10">
              <h3 className="text-[18px] font-semibold text-gray-900">Visit us</h3>
              <p className="mt-1.5 text-[13px] text-gray-600">Chat to us.</p>
              <a href="#" className="info-link mt-5 flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                <MapPin size={16} strokeWidth={2} />
                <span className="underline underline-offset-4 decoration-1">Los Santos</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Contact info (Mobile) */}
          <div className="md:hidden w-full mt-2 flex flex-col gap-1.5">
            
            <div className="grid grid-cols-2 gap-1.5 items-stretch">
              {/* Mobile Chat Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2.5 flex flex-col h-full">
                <div className="mb-0.5">
                  <h3 className="text-[9px] font-semibold text-gray-900 leading-snug">Chat with us</h3>
                  <p className="text-[7px] text-gray-500 mt-0">Speak to our friendly team via live chat.</p>
                </div>
                <div className="flex flex-col space-y-0 mt-auto">
                  <a href="#" className="flex items-center justify-between py-0.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                        <MessageCircle size={8} strokeWidth={2} />
                      </div>
                      <span className="text-[7px] font-medium text-gray-900">Start a live chat</span>
                    </div>
                    <ChevronRight size={8} className="text-gray-300" />
                  </a>
                  <a href="#" className="flex items-center justify-between py-0.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                        <Send size={8} strokeWidth={2} />
                      </div>
                      <span className="text-[7px] font-medium text-gray-900">Shoot us an email</span>
                    </div>
                    <ChevronRight size={8} className="text-gray-300" />
                  </a>
                  <a href="#" className="flex items-center justify-between py-0.5">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
                        <Twitter size={8} strokeWidth={2} />
                      </div>
                      <span className="text-[7px] font-medium text-gray-900">Message us on X</span>
                    </div>
                    <ChevronRight size={8} className="text-gray-300" />
                  </a>
                </div>
              </div>

              {/* Mobile Call Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2.5 flex flex-col items-start justify-between h-full">
                <div>
                  <h3 className="text-[9px] font-semibold text-gray-900 leading-snug">Call us</h3>
                  <p className="text-[7px] text-gray-500 mt-0.5 mb-1">Call our team directly.</p>
                  <div className="text-[7px] font-semibold text-gray-900 tracking-wide">+1 (555) 000-0000</div>
                </div>
                <a href="tel:+15550000000" className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white shadow-sm mt-auto ml-auto">
                  <Phone size={9} strokeWidth={2} className="fill-white" />
                </a>
              </div>
            </div>

            {/* Mobile Visit Card */}
            <a href="#" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2.5 flex items-center justify-end">
              <div className="text-right flex flex-col items-end mr-24">
                <h3 className="text-[9px] font-semibold text-gray-900 leading-snug">Visit us</h3>
                <p className="text-[7px] text-gray-500 mt-0.5 mb-1">Chat to us in person.</p>
                <div className="flex items-center justify-end gap-1 text-[7px] font-medium text-gray-900">
                  <MapPin size={8} className="text-gray-400" />
                  Los Santos
                </div>
              </div>
              <ChevronRight size={10} className="text-gray-300" />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}