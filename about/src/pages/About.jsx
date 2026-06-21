import React from "react";
import StatCard from "../components/StatCard";
import { 
  Search, Sparkles, Code2, Hash, Megaphone,
  ShoppingCart, Briefcase, Layout, Cloud, Smartphone,
  Star, LifeBuoy, Clock, Award, MessageCircle,
  HeartPulse, Store, DollarSign, Cpu, GraduationCap,
  TrendingUp, Users, Target, MousePointerClick, ThumbsUp,
  Building
} from "lucide-react";

const businessServices = [
  { label: "SEO", Icon: Search },
  { label: "BRANDING", Icon: Sparkles },
  { label: "WEBSITES", Icon: Code2 },
  { label: "SOCIAL", Icon: Hash },
  { label: "MARKETING", Icon: Megaphone },
];

const projectsServices = [
  { label: "E-COMMERCE", Icon: ShoppingCart },
  { label: "PORTFOLIOS", Icon: Briefcase },
  { label: "LANDING", Icon: Layout },
  { label: "SAAS", Icon: Cloud },
  { label: "MOBILE", Icon: Smartphone },
];

const satisfactionServices = [
  { label: "5-STAR", Icon: Star },
  { label: "SUPPORT", Icon: LifeBuoy },
  { label: "ON-TIME", Icon: Clock },
  { label: "QUALITY", Icon: Award },
  { label: "COMMS", Icon: MessageCircle },
];

const industriesServices = [
  { label: "HEALTHCARE", Icon: HeartPulse },
  { label: "RETAIL", Icon: Store },
  { label: "FINANCE", Icon: DollarSign },
  { label: "TECH", Icon: Cpu },
  { label: "EDUCATION", Icon: GraduationCap },
];

const growthServices = [
  { label: "REVENUE", Icon: TrendingUp },
  { label: "TRAFFIC", Icon: Users },
  { label: "LEADS", Icon: Target },
  { label: "CONVERSIONS", Icon: MousePointerClick },
  { label: "ENGAGEMENT", Icon: ThumbsUp },
];
const Badge = () => {
  // Bracketed badge with corner marks
  return (
    <div className="relative inline-flex items-center justify-center max-md:scale-[0.86] max-md:origin-center">
      {/* corner brackets */}
      <span className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-[#FF5A1F]" />
      <span className="absolute -right-1 -top-1 h-2 w-2 border-r-2 border-t-2 border-[#FF5A1F]" />
      <span className="absolute -left-1 -bottom-1 h-2 w-2 border-l-2 border-b-2 border-[#FF5A1F]" />
      <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-[#FF5A1F]" />
      <div className="rounded-[4px] border border-[#FF5A1F]/40 bg-[#FFF1EA] px-6 py-2">
        <span className="font-display text-[15px] tracking-[0.18em] text-[#FF5A1F]">
          DIGITAL GROWTH PARTNER
        </span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full bg-[var(--bg)] relative overflow-hidden">
      <div className="absolute inset-0 bp-lines pointer-events-none" />
      <div className="absolute inset-0 bp-grid pointer-events-none opacity-50" />
      <div className="relative z-10">
        {/* <Navbar /> */}

        <main className="mx-auto max-w-[1400px] px-10 max-md:px-5 pb-10 pt-10">
          {/* Hero */}
        <section className="flex flex-col items-center text-center">
          <Badge />

          <h1 className="mt-8 max-md:mt-6 font-display text-[62px] max-md:text-[40px] leading-[1.08] tracking-tight max-md:scale-[0.92] max-md:origin-top">
            <div className="whitespace-nowrap max-md:whitespace-normal">
              <span className="text-neutral-900">TRANSFORMING<br className="hidden max-md:block" /></span>
              <span className="text-[#FF5A1F]"> DIGITAL PRESENCE</span>
            </div>

            <div className="whitespace-nowrap max-md:whitespace-normal">
              <span className="text-neutral-900">INTO </span>
              <span className="text-[#FF5A1F]">
                MEASURABLE<br className="hidden max-md:block" />BUSINESS GROWTH
              </span>
            </div>
          </h1>

          <p className="font-mono-jb mt-10 max-md:mt-6 max-w-[1000px] text-[18px] max-md:text-[15px] leading-[1.8] text-neutral-500 max-md:scale-[0.92] max-md:origin-top">
            We help businesses build a stronger digital presence through
            marketing, branding, websites, SEO, and social media. Our focus is
            simple: measurable results, stronger visibility, and sustainable
            growth.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="mt-20 max-md:mt-12">
          {/* Row 1 */}
          <div className="flex flex-wrap items-end justify-center gap-8 max-md:flex-col max-md:items-center max-md:gap-6">
            <StatCard
              value="150+"
              label="BUSINESSES SERVED"
              bg="bg-[#FF5A1F]"
              textColor="text-white"
              width="w-[360px] max-md:w-[86%]"
              height="h-[300px] max-md:h-[130px]"
              fanCards={businessServices}
              mainIcon={Users}
              stripes
              glow
            />
            <StatCard
              value="500+"
              label="PROJECTS DELIVERED"
              bg="bg-[#C8FF3D]"
              textColor="text-neutral-900"
              width="w-[360px] max-md:w-[86%]"
              height="h-[300px] max-md:h-[130px]"
              fanCards={projectsServices}
              mainIcon={Briefcase}
            />
            <StatCard
              value="98%"
              label="CLIENT SATISFACTION"
              bg="bg-neutral-900"
              textColor="text-white"
              width="w-[360px] max-md:w-[86%]"
              height="h-[300px] max-md:h-[130px]"
              fanCards={satisfactionServices}
              mainIcon={Star}
            />
          </div>

          {/* Row 2 - offset to the right */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 pl-[392px] max-md:mt-6 max-md:pl-0 max-md:flex-col max-md:items-center max-md:gap-6">
            <StatCard
              value="25+"
              label="INDUSTRIES SERVED"
              bg="bg-[#7E4BE0]"
              textColor="text-white"
              width="w-[360px] max-md:w-[86%]"
              height="h-[260px] max-md:h-[130px]"
              fanCards={industriesServices}
              mainIcon={Building}
            />
            <StatCard
              value="300%"
              label="AVERAGE GROWTH ACHIEVED"
              bg="bg-[#E26A1F]"
              textColor="text-white"
              width="w-[360px] max-md:w-[86%]"
              height="h-[260px] max-md:h-[130px]"
              fanCards={growthServices}
              mainIcon={TrendingUp}
            />
          </div>
        </section>
      </main>
      </div>
    </div>
  );
};

export default About;