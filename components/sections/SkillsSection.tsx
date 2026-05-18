"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const skills = [
  {
    name: "Affinity Photo",
    icon: "🎨",
    level: 85,
    desc: "Complex photo manipulation and compositing",
    accent: "#FF0066", // Affinity's pink/red
    tags: ["Compositing", "Retouching", "Layers"],
  },
  {
    name: "Lightroom",
    icon: "📸",
    level: 90,
    desc: "Color science, grading, and raw adjustments",
    accent: "#4DA3FF",
    tags: ["Presets", "Color Science", "RAW"],
  },
  {
    name: "Canva",
    icon: "🖌️",
    level: 95,
    desc: "Fast-paced social media graphics and templates",
    accent: "#00E5FF", // Canva gradient blue
    tags: ["Social Media", "Templates", "Speed"],
  },
  {
    name: "Picsart",
    icon: "📱",
    level: 80,
    desc: "Mobile-first creative edits and quick effects",
    accent: "#7B61FF",
    tags: ["Mobile", "Effects", "Quick Edits"],
  },
];

const softSkills = [
  { label: "Typography Layouts", value: 88 },
  { label: "Color Grading", value: 92 },
  { label: "Visual Storytelling", value: 85 },
  { label: "Composition", value: 90 },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#0D0D0D]" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-16 text-center">
          <p className="text-xs text-[#4DA3FF] tracking-[0.4em] font-mono mb-3">/ 05</p>
          <h2
            className="text-4xl md:text-6xl font-bebas section-title"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
          >
            THE TOOLKIT
          </h2>
          <p className="text-[#888] text-sm mt-6 max-w-xl mx-auto">
            My primary software stack and fundamental design skills.
          </p>
        </motion.div>

        {/* Tool cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 cursor-default overflow-hidden glass border border-[#2A2A2A] transition-all duration-300"
              style={{
                background: "#171717",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${skill.accent}40`;
                e.currentTarget.style.boxShadow = `0 10px 40px ${skill.accent}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A2A2A";
                e.currentTarget.style.boxShadow = "none";
              }}
              data-hover
            >
              {/* Icon */}
              <div className="text-3xl mb-5 opacity-80 group-hover:opacity-100 transition-opacity">
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold tracking-wide mb-2 text-[#EDEDED]">
                {skill.name}
              </h3>
              <p className="text-[#888] text-sm mb-6 leading-relaxed">{skill.desc}</p>

              {/* Level bar */}
              <div className="mb-5">
                <div className="flex justify-between text-xs text-[#666] mb-2 font-medium">
                  <span>Proficiency</span>
                  <span style={{ color: skill.accent }}>{skill.level}%</span>
                </div>
                <div className="h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.2, delay: i * 0.1 + 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.accent}, ${skill.accent}80)` }}
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded bg-[#252525] text-[#888] group-hover:bg-[#2A2A2A] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fundamentals */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bebas text-[#EDEDED] tracking-widest" style={{ fontFamily: "'Bebas Neue', cursive" }}>
              DESIGN FUNDAMENTALS
            </h3>
          </div>
          
          <div className="space-y-6">
            {softSkills.map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between text-sm text-[#888] mb-2 font-medium">
                  <span>{s.label}</span>
                  <span className="text-[#4DA3FF]">{s.value}%</span>
                </div>
                <div className="h-1.5 bg-[#1E1E1E] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${s.value}%` } : {}}
                    transition={{ duration: 1.4, delay: i * 0.15 + 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #4DA3FF, #7B61FF)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
