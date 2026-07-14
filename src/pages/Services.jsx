import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, TrendingUp, Hash,
  FileText, Search, Target, Rocket, Sliders,
  Trophy, ShieldCheck, Sparkles, Check, ChevronRight, MessageSquare
} from "lucide-react";

const EASE = [0.17, 0.55, 0.55, 1];

/* ---------- Section: Side panels (the floating frame info) ---------- */
const FrameLabel = ({ children, className = "" }) => (
  <div className={`font-mono-label text-[11px] uppercase text-[var(--muted)] ${className}`}>
    {children}
  </div>
);

const HeroSidePanels = () => (
  <>
    {/* Left top mono label */}
    <FrameLabel className="absolute left-6 lg:left-10 top-[120px] hidden xl:block">
      01_Services_Overview
    </FrameLabel>

    {/* Left card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      className="side-panel absolute left-6 lg:left-10 top-[160px] w-[200px] hidden xl:block"
      data-testid="side-panel-mission"
    >
      <div className="h-7 w-7 rounded-md bg-[var(--accent)] grid place-items-center mb-3">
        <Sparkles className="h-4 w-4 text-white" />
      </div>
      <p className="text-[15px] leading-snug font-medium">
        Strategy.<br />Execution.<br />Growth.<br />That&apos;s Antaha.
      </p>
      <div className="mt-4 h-8 w-8 rounded-full bg-[#1d6ef0] grid place-items-center">
        <ArrowUpRight className="h-4 w-4 text-white" />
      </div>
    </motion.div>

    {/* Left card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
      className="side-panel absolute left-6 lg:left-10 top-[420px] w-[200px] hidden xl:block"
      data-testid="side-panel-focus"
    >
      <div className="font-mono-label text-[10px] uppercase text-[var(--muted)] mb-3">Our Focus</div>
      <ul className="space-y-2.5 text-[13px]">
        {["Measurable Results", "Strategic Approach", "Transparent Process", "Long-term Growth"].map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1d6ef0] shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Right card 1 */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      className="side-panel absolute right-6 lg:right-10 top-[120px] w-[200px] hidden xl:block"
      data-testid="side-panel-mindset"
    >
      <div className="font-medium text-[14px] mb-1">Growth Mindset</div>
      <p className="text-[12.5px] leading-snug text-[var(--ink-soft)]">
        We combine strategy, creativity, and performance to deliver real business outcomes.
      </p>
      <div className="mt-4 flex items-center gap-2">
        <div className="flex -space-x-2">
          {[
            "https://i.pravatar.cc/40?img=12",
            "https://i.pravatar.cc/40?img=32",
            "https://i.pravatar.cc/40?img=58",
          ].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="h-7 w-7 rounded-full border-2 border-white object-cover"
            />
          ))}
          <span className="h-7 w-7 rounded-full bg-[#1d6ef0] text-white text-[10px] font-semibold grid place-items-center border-2 border-white">
            20+
          </span>
        </div>
      </div>
      <div className="mt-2 text-[11px] text-[var(--muted)]">Growth Experts</div>
    </motion.div>

    {/* Right card 2 */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
      className="side-panel absolute right-6 lg:right-10 top-[400px] w-[200px] hidden xl:block"
      data-testid="side-panel-trusted"
    >
      <div className="font-medium text-[14px] mb-3">Trusted By</div>
      <ul className="space-y-2.5 text-[13px]">
        {[
          { n: "digitally", i: <Hash className="h-3.5 w-3.5" /> },
          { n: "Startly", i: <Target className="h-3.5 w-3.5" /> },
          { n: "Greenline", i: <TrendingUp className="h-3.5 w-3.5" /> },
          { n: "CloudBase", i: <ShieldCheck className="h-3.5 w-3.5" /> },
          { n: "LayerOps", i: <Sliders className="h-3.5 w-3.5" /> },
        ].map((b) => (
          <li key={b.n} className="flex items-center gap-2 text-[var(--ink-soft)]">
            <span className="h-5 w-5 rounded-full border border-[var(--line)] grid place-items-center">{b.i}</span>
            {b.n}
          </li>
        ))}
      </ul>
      <div className="mt-3 text-[11px] text-[var(--muted)]">and more...</div>
    </motion.div>
  </>
);

/* ---------- Section: Hero ---------- */
const Hero = () => (
  <section id="hero" className="relative px-6 lg:px-10 pt-4 pb-16 max-md:pb-4">
    <div className="absolute inset-0 bp-grid pointer-events-none" />
    <HeroSidePanels />

    <div className="relative max-w-4xl mx-auto text-center max-md:text-left pt-4 max-md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="inline-flex items-center font-mono-label text-[11px] tracking-[0.18em] text-[var(--accent)] border border-dashed border-[var(--accent)]/60 rounded-md px-3 py-1.5 mb-8 max-md:scale-[0.5] max-md:origin-top max-md:mb-3 max-md:flex max-md:w-fit max-md:mx-auto"
        data-testid="hero-eyebrow"
      >
        OUR SERVICES
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        className="font-display max-md:text-[22px] text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-tight"
        data-testid="hero-title"
      >
        <span className="block max-md:hidden">STRATEGY. CREATIVITY.</span>
        <span className="block text-[var(--accent)] max-md:hidden">GROWTH. DELIVERED.</span>

        <span className="hidden max-md:block">STRATEGY.</span>
        <span className="hidden max-md:block">CREATIVITY.</span>
        <span className="hidden max-md:block text-[var(--accent)]">GROWTH. DELIVERED.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
        className="font-mono-label max-md:text-[8.5px] text-[13px] sm:text-[14px] text-[var(--ink-soft)] max-w-2xl mx-auto mt-7 max-md:mt-5 max-md:mx-0 max-md:text-left leading-[1.9] max-md:leading-[1.6]"
        data-testid="hero-subtitle"
      >
        We help ambitious businesses build a strong digital presence,
        attract the right audience, and achieve measurable results
        through expert strategy and execution.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
        className="mt-10 max-md:mt-4 flex items-center justify-center max-md:justify-start gap-4 max-md:gap-2 flex-wrap max-md:flex-nowrap max-md:w-full"
      >
        <a href="#contact" className="pill-cta pill-primary max-md:flex-1 max-md:h-[42px] max-md:text-[10px] max-md:px-3 max-md:rounded-lg max-md:flex max-md:justify-center max-md:items-center max-md:gap-1.5 max-md:whitespace-nowrap" data-testid="cta-book-consultation">
          Book Free Consultation
          <span className="h-7 w-7 max-md:h-5 max-md:w-5 rounded-full bg-white/15 grid place-items-center shrink-0">
            <ArrowRight className="h-3.5 w-3.5 max-md:h-2.5 max-md:w-2.5" />
          </span>
        </a>
        <a href="#case-studies" className="pill-cta pill-ghost max-md:flex-1 max-md:h-[42px] max-md:text-[10px] max-md:rounded-lg max-md:bg-white max-md:border max-md:border-neutral-200 max-md:shadow-sm max-md:text-neutral-900 max-md:flex max-md:justify-center max-md:items-center max-md:whitespace-nowrap max-md:px-3" data-testid="cta-case-studies">
          View Case Studies
        </a>
      </motion.div>
    </div>
  </section>
);

/* ---------- Service card visual mockups (CSS only) ---------- */
const WebsiteVisual = () => (
  <div className="rounded-lg bg-[#0f1216] aspect-[16/10] overflow-hidden relative p-3">
    <div className="flex items-center gap-1.5 mb-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="text-white text-[11px] leading-tight font-semibold">
      Building<br/>Digital Experiences<br/>That Convert
    </div>
    <div className="mt-2 flex gap-1">
      <span className="rounded bg-[#3ddc84] text-[8px] px-1.5 py-0.5 text-black font-semibold">Get Started</span>
      <span className="rounded border border-white/30 text-[8px] px-1.5 py-0.5 text-white">Learn More</span>
    </div>
    <div className="mt-2 grid grid-cols-3 gap-1">
      {[0,1,2].map((i)=>(
        <div key={i} className="rounded bg-white/10 h-7" />
      ))}
    </div>
  </div>
);

const SeoVisual = () => (
  <div className="rounded-lg border border-[var(--line)] aspect-[16/10] p-3 bg-white relative">
    <div className="text-[10px] text-[var(--muted)]">Organic Traffic</div>
    <div className="text-emerald-500 font-bold text-2xl mt-0.5">+152%</div>
    <svg viewBox="0 0 160 50" className="absolute bottom-3 left-3 right-3 w-[calc(100%-1.5rem)] h-12">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,40 L20,38 L40,32 L60,34 L80,26 L100,22 L120,16 L140,12 L160,6 L160,50 L0,50 Z" fill="url(#g1)" />
      <path d="M0,40 L20,38 L40,32 L60,34 L80,26 L100,22 L120,16 L140,12 L160,6" fill="none" stroke="#10b981" strokeWidth="1.5" />
    </svg>
  </div>
);

const BrandingVisual = () => (
  <div className="rounded-lg bg-[#f3f0e8] aspect-[16/10] p-3 grid grid-cols-3 gap-1.5 relative overflow-hidden">
    <div className="rounded bg-white border border-[var(--line)] grid place-items-center text-[8px] font-bold tracking-wider">NOVA</div>
    <div className="rounded bg-[#1a1a1a] grid place-items-center text-white text-[8px] font-bold tracking-wider">NOVA</div>
    <div className="rounded bg-white border border-[var(--line)]" />
    <div className="rounded bg-[#1a1a1a] grid place-items-center">
      <div className="flex gap-0.5">
        <span className="h-3 w-3 rounded-full bg-white" />
        <span className="h-3 w-3 rounded-full bg-[#ff5b1f]" />
      </div>
    </div>
    <div className="rounded bg-white border border-[var(--line)]" />
    <div className="rounded bg-[#1a1a1a]" />
  </div>
);

const SocialVisual = () => (
  <div className="rounded-lg border border-[var(--line)] aspect-[16/10] p-3 bg-white relative">
    <div className="text-[10px] text-[var(--muted)]">Followers</div>
    <div className="font-bold text-2xl mt-0.5">+8,650</div>
    <div className="mt-1 text-[10px] text-[var(--muted)]">Engagement Rate</div>
    <div className="font-bold text-xl text-[#8b5cf6]">7.62%</div>
    <svg viewBox="0 0 160 40" className="absolute bottom-2 left-3 right-3 w-[calc(100%-1.5rem)] h-10">
      <path d="M0,30 L30,28 L60,22 L90,18 L120,10 L160,4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
    </svg>
  </div>
);

const MarketingVisual = () => (
  <div className="rounded-lg border border-[var(--line)] p-3 bg-white">
    <div className="text-[11px] font-semibold">Campaign Performance</div>
    <div className="grid grid-cols-3 gap-2 mt-2 text-[10px]">
      <div>
        <div className="text-[var(--muted)]">Impressions</div>
        <div className="font-bold text-sm">1.2M</div>
      </div>
      <div>
        <div className="text-[var(--muted)]">Clicks</div>
        <div className="font-bold text-sm">24.6K</div>
      </div>
      <div>
        <div className="text-[var(--muted)]">Conversions</div>
        <div className="font-bold text-sm">3.8K</div>
      </div>
    </div>
    <div className="mt-2 flex items-end gap-1 h-12">
      {[40, 65, 30, 75, 45, 90, 55, 70, 85].map((h, i) => (
        <div key={i} style={{ height: `${h}%` }} className="flex-1 rounded-sm bg-gradient-to-t from-blue-500 to-blue-300" />
      ))}
    </div>
  </div>
);

const ContentVisual = () => (
  <div className="rounded-lg border border-[var(--line)] p-3 bg-white">
    <div className="text-[11px] font-semibold mb-2">Top Performing Content</div>
    {[
      { name: "Blog Post", val: "12.5K" },
      { name: "Landing Page", val: "8.3K" },
      { name: "Case Study", val: "6.1K" },
    ].map((c) => (
      <div key={c.name} className="flex items-center justify-between text-[10px] py-1 border-b border-[var(--line)] last:border-0">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3 w-3 text-[var(--muted)]" />
          {c.name}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{c.val}</span>
          <svg viewBox="0 0 30 10" className="w-7 h-3">
            <path d="M0,8 L8,6 L15,4 L22,3 L30,1" fill="none" stroke="#10b981" strokeWidth="1" />
          </svg>
        </div>
      </div>
    ))}
  </div>
);

const ConsultingVisual = () => (
  <div className="rounded-lg border border-[var(--line)] p-3 bg-white">
    <div className="text-[11px] font-semibold mb-2">Growth Roadmap</div>
    {[
      "Market Research",
      "Strategy Planning",
      "Execution Roadmap",
      "Performance Tracking",
    ].map((s) => (
      <div key={s} className="flex items-center justify-between text-[10px] py-1">
        <div className="flex items-center gap-1.5">
          <Check className="h-3 w-3 text-emerald-500" />
          {s}
        </div>
        <ArrowRight className="h-3 w-3 text-[var(--muted)]" />
      </div>
    ))}
  </div>
);

/* ---------- Section: Service grid (spotlight) ---------- */
const SERVICES = [
  { id: "web",     title: "Website Development",    tone: "#7c5cff", visual: <WebsiteVisual />,    desc: "High-performing, responsive websites that are fast, SEO-friendly and built to convert." },
  { id: "seo",     title: "SEO Optimization",         tone: "#7bc242", visual: <SeoVisual />,        desc: "Rank higher, get found faster, and drive organic traffic that brings in real customers." },
  { id: "brand",   title: "Branding & Identity",      tone: "#ff5b1f", visual: <BrandingVisual />,   desc: "Create a strong brand identity that builds trust and sets you apart from others." },
  { id: "social",  title: "Social Media Marketing",   tone: "#e3268f", visual: <SocialVisual />,     desc: "Build engaged communities and grow your brand across the right social platforms." },
  { id: "digital", title: "Digital Marketing",         tone: "#2d7ef7", visual: <MarketingVisual />,  desc: "Data-driven campaigns that increase visibility, generate leads and boost ROI." },
  { id: "content", title: "Content Strategy",          tone: "#f0b400", visual: <ContentVisual />,    desc: "Content that educates, engages and converts your audience into customers." },
  { id: "growth",  title: "Growth Consulting",         tone: "#3aa84a", visual: <ConsultingVisual />, desc: "Strategic guidance and roadmaps to scale your business sustainably." },
];

const ServiceCard = ({ service, index }) => {
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - r.top}px`);
  };
  return (
    <>
      {/* Desktop Card */}
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE, delay: (index % 4) * 0.06 }}
        onMouseMove={handleMove}
        data-testid={`service-card-${service.id}`}
        className="spot-card rounded-2xl p-5 flex flex-col gap-4 h-full min-h-[380px] max-md:hidden"
      >
        <h3 className="font-display text-[22px] leading-tight">{service.title}</h3>
        {service.visual}
        <p className="text-[14px] text-[var(--ink-soft)] leading-relaxed">{service.desc}</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-semibold text-[14px] mt-auto"
          style={{ color: service.tone }}
          data-testid={`service-explore-${service.id}`}
        >
          Explore <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </motion.article>

      {/* Mobile Card */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: EASE }}
        whileTap={{ scale: 0.98 }}
        className={`hidden ${service.id === "content" || service.id === "growth" ? "max-md:!hidden" : "max-md:flex"} bg-white rounded-2xl p-2.5 flex-row items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-neutral-100`}
      >
        <div className="w-[80px] h-[50px] shrink-0 relative bg-neutral-50 rounded-[10px] overflow-hidden border border-neutral-100">
           <div className="absolute top-0 left-0 w-[200px] origin-top-left scale-[0.4] pointer-events-none">
             {service.visual}
           </div>
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
           <h3 className="text-[10px] font-bold text-neutral-900 leading-tight mb-1">{service.title}</h3>
           <p className="text-[8px] text-neutral-500 leading-snug line-clamp-2 pr-1">{service.desc}</p>
        </div>
        <div className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center shrink-0">
           <ChevronRight className="h-3 w-3 text-neutral-400" />
        </div>
      </motion.article>
    </>
  );
};

const ServicesGrid = () => (
  <section id="services" className="relative px-6 lg:px-10 pb-24 max-md:px-4 max-md:pb-10">
    <div className="max-w-6xl mx-auto">
      {/* Mobile-only header */}
      <div className="hidden max-md:flex items-center justify-between mb-4 mt-2">
        <h2 className="text-[10px] font-bold tracking-widest uppercase text-neutral-800">Our Services</h2>
        <div className="flex items-center gap-1.5 text-[#FF5A1F] text-[9.5px] font-semibold">
           <Sparkles className="h-3 w-3" />
           5 Services
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-md:gap-3">
        {SERVICES.slice(0, 4).map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 max-md:mt-3 max-md:gap-3">
        {SERVICES.slice(4).map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
      </div>


    </div>
  </section>
);

/* ---------- Main page ---------- */
export default function ServicesPage() {
  return (
    <main data-testid="antaha-landing" className="bg-[var(--bg)] relative">
      <div className="absolute inset-0 bp-lines pointer-events-none" />
      <div className="relative z-10">
        <Hero />
        <ServicesGrid />
      </div>
    </main>
  );
}
