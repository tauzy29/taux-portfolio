"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  MapPin,
  Calendar,
  Gamepad2,
  Zap,
} from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const timeline = [
  {
    year: "2022",
    title: "Started with Canva",
    body: "Made my first poster for a friend's gaming page. Fell in love instantly.",
  },
  {
    year: "2023",
    title: "Discovered Photo Editing",
    body: "Started experimenting with layer masks, blending modes — a whole new universe.",
  },
  {
    year: "2024",
    title: "First Real Client",
    body: "MenAtArms Gaming. Valorant esports thumbnails. The grind began.",
  },
  {
    year: "2025",
    title: "Found My Style",
    body: "Dark. Cinematic. Neon. No compromise on aesthetics.",
  },
];

const tools = [
  { icon: "🎨", name: "Affinity Photo" },
  { icon: "📸", name: "Lightroom" },
  { icon: "🖌️", name: "Canva" },
  { icon: "📱", name: "Picsart" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16 text-center"
        >
          <p className="text-xs text-[#4DA3FF] tracking-[0.4em] font-mono mb-3">/ 01</p>
          <h2
            className="text-4xl md:text-6xl font-bebas section-title"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
          >
            THE CREATOR
          </h2>
          <p className="text-[#888] mt-6 max-w-2xl mx-auto leading-relaxed">
            I'm TAUX — a self-taught graphic designer and photo editor from Kerala. 
            My world is esports, gaming, and cinematic aesthetics. Everything I design 
            feels like it belongs in a cutscene or a championship ceremony.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile Details */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass rounded-2xl p-8 border border-[#2A2A2A]">
              <h3 className="text-2xl font-bebas gradient-text tracking-widest mb-6" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                MIDHUN VIJAY KM
              </h3>
              
              <div className="space-y-4 text-sm text-[#888]">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#4DA3FF]" />
                  <span>Kerala, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-[#4DA3FF]" />
                  <span>20 years old</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad2 size={16} className="text-[#4DA3FF]" />
                  <span>Valorant & design nerd</span>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-[#2A2A2A]">
              <p className="text-xs text-[#555] tracking-widest mb-4 flex items-center gap-2">
                <Palette size={12} className="text-[#4DA3FF]" />
                PRIMARY TOOLS
              </p>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#1E1E1E] border border-[#2A2A2A] text-xs text-[#EDEDED]"
                  >
                    <span className="text-lg">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6 border border-[#2A2A2A]">
              <p className="text-xs text-[#555] tracking-widest mb-4 flex items-center gap-2">
                <Zap size={12} className="text-[#4DA3FF]" />
                INSPIRATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                {["Valorant Esports", "Lofi Aesthetics", "Neon Noir", "Film Posters", "Kerala Vibes"].map((tag) => (
                  <span key={tag} className="inline-block text-[11px] px-3 py-1.5 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-[#888]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-7">
            <div className="h-full glass rounded-2xl p-8 border border-[#2A2A2A]">
              <h3 className="text-xl font-bebas text-[#EDEDED] tracking-widest mb-8" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                THE JOURNEY
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-[#2A2A2A]">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    custom={i + 2}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#1E1E1E] border-2 border-[#4DA3FF] flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF]" />
                    </div>
                    <span className="inline-block text-xs font-mono text-[#4DA3FF] font-bold tracking-widest whitespace-nowrap">
                      {item.year}
                    </span>
                    <h4 className="text-[#EDEDED] text-base font-semibold mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#888] text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
