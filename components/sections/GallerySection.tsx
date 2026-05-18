"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { projects } from "@/data/projects";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const allProjects = projects;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setHoveredCard(id);
  };

  return (
    <section id="gallery" className="section-pad relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 blur-[150px] rounded-full"
        style={{ background: "radial-gradient(circle, #4DA3FF, transparent)" }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-16 text-center">
          <p className="text-xs text-[#4DA3FF] tracking-[0.4em] font-mono mb-3">/ 04</p>
          <h2
            className="text-4xl md:text-6xl font-bebas section-title"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
          >
            WALL GALLERY
          </h2>
          <p className="text-[#888] text-sm mt-6 max-w-xl mx-auto">
            Every frame tells a story. Click to go fullscreen.
          </p>
        </motion.div>

        {/* Featured row — large cards */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {featuredProjects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden border border-[#2A2A2A] hover:border-[#4DA3FF]/40 transition-all duration-500 ${
                i === 0 ? "md:col-span-2 aspect-video" : "aspect-[3/4]"
              }`}
              onMouseMove={(e) => handleMouseMove(e, project.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setLightboxImg({ src: project.image, title: project.title })}
              whileHover={{ scale: 1.01 }}
              data-hover
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Spotlight effect */}
              {hoveredCard === project.id && (
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(77,163,255,0.12), transparent 70%)`,
                  }}
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                <span className="text-[10px] text-[#4DA3FF] font-mono tracking-widest block mb-1">
                  {project.category.toUpperCase()}
                </span>
                <h3
                  className="text-xl font-bebas text-white tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                <ZoomIn size={14} className="text-[#4DA3FF]" />
              </div>

              {project.featured && (
                <div className="absolute top-4 left-4 text-[10px] px-2.5 py-1 rounded-full bg-[#4DA3FF]/20 text-[#4DA3FF] border border-[#4DA3FF]/30 backdrop-blur font-mono z-30">
                  FEATURED
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* All works grid */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {allProjects.map((project, i) => (
            <motion.div
              key={project.id + "-grid"}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[3/4] border border-[#2A2A2A] hover:border-[#4DA3FF]/40 transition-all duration-300"
              onClick={() => setLightboxImg({ src: project.image, title: project.title })}
              whileHover={{ y: -4, scale: 1.02 }}
              data-hover
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs font-medium leading-snug">{project.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[200]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-6 md:inset-12 z-[201] flex flex-col items-center"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <span
                  className="text-[#EDEDED] font-bebas text-2xl tracking-widest"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  {lightboxImg.title}
                </span>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="w-10 h-10 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] flex items-center justify-center text-[#888] hover:text-[#EDEDED] transition-colors"
                  data-hover
                >
                  <X size={18} />
                </button>
              </div>
              <div className="relative flex-1 w-full rounded-xl overflow-hidden">
                <Image
                  src={lightboxImg.src}
                  alt={lightboxImg.title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <p className="text-[#555] text-xs mt-4 font-mono">Crafted by TAUX · @taux.jpeg</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
