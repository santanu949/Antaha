import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUp, Apple } from "lucide-react";

/* ---------- Android glyph (lucide doesn't ship a filled Android bot) ---------- */
const AndroidIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.523 15.34a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1m-11.046 0a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1m11.42-6.21 2.094-3.625a.435.435 0 0 0-.752-.435L17.12 8.737a13.07 13.07 0 0 0-10.24 0L4.76 5.07a.434.434 0 1 0-.752.435L6.1 9.13C2.503 11.087.05 14.756 0 19h24c-.05-4.244-2.503-7.913-6.103-9.87" />
  </svg>
);

/* ---------- Sparkle divider for marquee ---------- */
const Sparkle = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0l1.8 8.4L22 10l-8.2 1.6L12 22l-1.8-10.4L2 10l8.2-1.6z" />
  </svg>
);

/* ---------- Marquee row ---------- */
const MarqueeRow = () => {
  const items = ["SPONSOR CONNECTION", "ABSOLUTE PRIVACY", "ACCOUNTABILITY REDEFINED"];
  // Repeat enough times for a seamless loop
  const repeated = Array.from({ length: 6 }, () => items).flat();

  return (
    <div className="absolute left-0 right-0 top-0 z-20 overflow-hidden">
      <div
        className="relative w-[110%] -translate-x-[5%] -rotate-[1.6deg] origin-center
                   border-y border-black/10 bg-white/85 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.04)]"
      >
        <div className="flex overflow-hidden whitespace-nowrap py-4 sm:py-5">
          <motion.div
            className="flex shrink-0 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 38,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {repeated.concat(repeated).map((text, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-10 sm:gap-14 px-6 sm:px-8"
                data-testid={`marquee-item-${i}`}
              >
                <span className="font-medium tracking-[0.32em] text-[12px] sm:text-[13px] text-neutral-900">
                  {text}
                </span>
                <Sparkle className="h-3 w-3 text-neutral-400" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Magnetic wrapper for primary buttons ---------- */
const Magnetic = ({ children, strength = 18, className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Primary pill (Download buttons) ---------- */
const PrimaryPill = ({ icon, label, testId }) => (
  <Magnetic className="inline-block">
    <motion.button
      data-testid={testId}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className="group relative flex items-center gap-3 rounded-full
                 bg-white/70 backdrop-blur-md
                 border border-black/[0.08]
                 px-7 sm:px-9 py-4 sm:py-[18px]
                 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.18)]
                 hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_16px_36px_-14px_rgba(0,0,0,0.28)]
                 hover:border-black/[0.14]
                 transition-[box-shadow,border-color,background-color] duration-300"
    >
      <span className="text-neutral-900">{icon}</span>
      <span className="text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em] text-neutral-900">
        {label}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full
                   bg-gradient-to-b from-white/60 to-transparent opacity-0
                   group-hover:opacity-100 transition-opacity duration-300"
      />
    </motion.button>
  </Magnetic>
);

/* ---------- Secondary pill ---------- */
const SecondaryPill = ({ label, testId }) => (
  <motion.button
    data-testid={testId}
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 320, damping: 22 }}
    className="rounded-full bg-white/60 backdrop-blur-md
               border border-black/[0.07]
               px-6 sm:px-7 py-2.5 sm:py-3
               text-[13.5px] font-medium text-neutral-800
               shadow-[0_1px_2px_rgba(0,0,0,0.03),0_6px_16px_-10px_rgba(0,0,0,0.14)]
               hover:border-black/[0.14]
               hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_10px_22px_-10px_rgba(0,0,0,0.22)]
               transition-[box-shadow,border-color] duration-300"
  >
    {label}
  </motion.button>
);

/* ---------- Scroll to top circular button ---------- */
const ScrollTopButton = () => {
  const onClick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.button
      data-testid="scroll-to-top-btn"
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      aria-label="Scroll to top"
      className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full
                 bg-white/70 backdrop-blur-md
                 border border-black/10
                 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_22px_-12px_rgba(0,0,0,0.25)]
                 hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_16px_30px_-14px_rgba(0,0,0,0.32)]
                 transition-shadow duration-300"
    >
      <motion.span
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="text-neutral-800"
      >
        <ArrowUp className="h-4 w-4" strokeWidth={2.25} />
      </motion.span>
    </motion.button>
  );
};

/* ---------- Footer ---------- */
const Footer = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Parallax for giant ANTAHA word
  const antahaY = useSpring(useTransform(scrollYProgress, [0, 1], [80, -20]), {
    stiffness: 60,
    damping: 18,
  });
  const headingY = useSpring(useTransform(scrollYProgress, [0, 1], [40, 0]), {
    stiffness: 80,
    damping: 20,
  });
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <footer
      ref={sectionRef}
      data-testid="antaha-footer"
      className="footer-antaha relative isolate overflow-hidden bg-[#f5f5f4] pt-20 sm:pt-24 pb-4"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.15) 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* subtle grain */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Top marquee strip */}
      <MarqueeRow />

      {/* Giant ANTAHA background typography */}
      <motion.div
        aria-hidden
        style={{ y: antahaY }}
        className="absolute inset-x-0 bottom-[-40px] sm:bottom-[-60px] z-0 flex justify-center pointer-events-none select-none"
      >
        <span className="footer-antaha-word leading-none text-neutral-900/[0.055]
                         text-[26vw] sm:text-[22vw] lg:text-[19vw]
                         font-black tracking-[-0.04em]">
          ANTAHA
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 sm:px-10">
        <motion.h2
          data-testid="footer-heading"
          style={{ y: headingY, opacity: headingOpacity }}
          className="footer-heading text-center font-black tracking-[-0.045em] leading-[0.95]
                     text-[14vw] sm:text-[11vw] lg:text-[148px]"
        >
          Ready to begin?
        </motion.h2>

        {/* Primary buttons */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-12 sm:mt-14 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <PrimaryPill
            testId="download-ios-btn"
            icon={<Apple className="h-5 w-5" fill="currentColor" strokeWidth={0} />}
            label="Download iOS"
          />
          <PrimaryPill
            testId="download-android-btn"
            icon={<AndroidIcon className="h-5 w-5" />}
            label="Download Android"
          />
        </motion.div>

        {/* Secondary buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <SecondaryPill testId="privacy-btn" label="Privacy Policy" />
          <SecondaryPill testId="terms-btn" label="Terms of Service" />
          <SecondaryPill testId="support-btn" label="Support" />
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 mx-auto mt-16 sm:mt-20 flex max-w-7xl items-center justify-between px-6 sm:px-10">
        <motion.p
          data-testid="footer-copyright"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[11px] sm:text-[12px] font-medium tracking-[0.18em] text-neutral-700"
        >
          © 2026 ANTAHA. ALL RIGHTS RESERVED.
        </motion.p>

        <motion.div
          data-testid="crafted-badge"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center gap-3 rounded-full
                     border border-black/[0.08] bg-white/70 backdrop-blur-md
                     px-5 py-2.5
                     shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_22px_-14px_rgba(0,0,0,0.2)]"
        >
          <span className="text-[11px] font-semibold tracking-[0.22em] text-neutral-700">
            CRAFTED WITH
          </span>
          <motion.span
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-red-500 text-base leading-none"
          >
            ♥
          </motion.span>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-neutral-700">
            BY
          </span>
          <span className="font-semibold text-[14px] tracking-[-0.01em] text-neutral-900">
            Antaha
          </span>
        </motion.div>

        <ScrollTopButton />
      </div>
    </footer>
  );
};

export default Footer;
