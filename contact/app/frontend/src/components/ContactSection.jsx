import React, { useState } from "react";
import { MessageCircle, Send, Phone, MapPin, ChevronDown, Twitter } from "lucide-react";
import MountainVistaParallax from "./ui/mountain-vista-bg";

const SERVICES = [
  ["Website design", "Content creation"],
  ["UX design", "Strategy & consulting"],
  ["User research", "Other"],
];

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
    message: "",
    country: "US",
  });
  const [services, setServices] = useState({});

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const toggleService = (s) => {
    setServices((p) => ({ ...p, [s]: !p[s] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const picked = Object.entries(services).filter(([, v]) => v).map(([k]) => k);
    alert(`Message sent!\n\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nServices: ${picked.join(", ") || "None"}`);
  };

  const inputClass =
    "contact-input w-full h-[38px] px-3 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-900 placeholder:text-gray-400";

  return (
    <section className="relative w-full">
      <MountainVistaParallax />
      <div className="content-wrap max-w-[1180px] mx-auto px-8 pt-6 pb-24">
        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto">
          <h1 className="display-font text-[52px] md:text-[64px] leading-[1.02] font-extrabold text-gray-900">
            Contact our team
          </h1>
        </div>

        {/* Two-column layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT: Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1">First name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1">Last name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-[13px] font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>

            <div className="mt-4">
              <label className="block text-[13px] font-medium text-gray-700 mb-1">Phone number</label>
              <div className="contact-input flex items-center h-[38px] rounded-lg border border-gray-300 bg-white px-3">
                <div className="flex items-center gap-1 pr-2.5 border-r border-gray-200">
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="country-select appearance-none pr-4 text-[14px] font-medium"
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
                  className="flex-1 bg-transparent outline-none border-none pl-3 text-[14px] text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-[13px] font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Leave us a message..."
                rows={4}
                className="contact-input w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-[14px] text-gray-900 placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Services */}
            <div className="mt-6">
              <p className="text-[13px] font-medium text-gray-700 mb-3">Services</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5">
                {SERVICES.flat().map((s) => (
                  <label key={s} className="svc-row flex items-center gap-2.5 text-[13px] text-gray-700 cursor-pointer select-none">
                    <span
                      onClick={(e) => { e.preventDefault(); toggleService(s); }}
                      className={`relative w-[16px] h-[16px] rounded-[4px] border ${services[s] ? "bg-gray-900 border-gray-900" : "bg-white border-gray-300"} flex items-center justify-center transition-colors duration-150`}
                    >
                      {services[s] && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={!!services[s]}
                      onChange={() => toggleService(s)}
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="send-btn mt-8 w-full h-[42px] rounded-lg bg-gray-900 text-white text-[14px] font-semibold"
            >
              Send message
            </button>
          </form>

          {/* RIGHT: Contact info */}
          <div className="w-full max-w-[420px] mx-auto lg:mx-0 lg:mr-auto lg:pl-4">
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
              <p className="mt-1.5 text-[13px] text-gray-600">Call our team Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+15550000000" className="info-link mt-5 flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                <Phone size={16} strokeWidth={2} />
                <span className="underline underline-offset-4 decoration-1">+1 (555) 000-0000</span>
              </a>
            </div>

            {/* Visit us */}
            <div className="mt-10">
              <h3 className="text-[18px] font-semibold text-gray-900">Visit us</h3>
              <p className="mt-1.5 text-[13px] text-gray-600">Chat to us in person at our Melbourne HQ.</p>
              <a href="#" className="info-link mt-5 flex items-center gap-2.5 text-[14px] font-semibold text-gray-900">
                <MapPin size={16} strokeWidth={2} />
                <span className="underline underline-offset-4 decoration-1">100 Smith Street, Collingwood VIC 3066</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}