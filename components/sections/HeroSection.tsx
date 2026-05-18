"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GlowButton from "@/components/ui/GlowButton";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!bgRef.current || window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#080808]" />
      <div ref={bgRef} className="absolute inset-0 transition-transform duration-500 ease-out">
        <div className="absolute -top-16 left-1/3 h-72 w-72 rounded-full bg-[#4DA3FF]/15 blur-3xl" />
        <div className="absolute bottom-8 right-1/4 h-72 w-72 rounded-full bg-[#6F7DFF]/15 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.75))]" />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="max-w-[1280px] mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#4DA3FF] mb-4">
              Graphic Designer and Photo Editor
            </p>
            <h1 className="display-title">TAUX</h1>
            <p className="mt-5 text-base md:text-lg text-[#B5B5B5] max-w-xl leading-relaxed">
              Midhun Vijay KM, a 20-year-old creator from Kerala building cinematic posters,
              thumbnails, logos, and photo edits with a gaming studio atmosphere.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <GlowButton href="#projects" size="lg">View Works</GlowButton>
              <GlowButton href="#photoshop" variant="outline" size="lg">Enter Edit Suite</GlowButton>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#7A7A7A] flex flex-col items-center">
        <span className="text-[10px] tracking-[0.35em]">SCROLL</span>
        <ChevronDown size={16} className="mt-1 animate-float-soft" />
      </div>
    </section>
  );
}
