"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { categories, projects } from "@/data/projects";
import { Project } from "@/data/projects";
import ProjectModal from "@/components/ui/ProjectModal";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section-pad relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.35em] uppercase text-[#4DA3FF] mb-3">/ 02</p>
          <h2 className="section-title">Selected Works</h2>
          <p className="text-base md:text-lg text-[#9A9A9A] mt-4">Posters, thumbnails, logos, and cinematic visual experiments.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                activeCategory === category.id
                  ? "bg-[#4DA3FF] text-white border-[#4DA3FF]"
                  : "bg-[#171717] text-[#B0B0B0] border-[#2B2B2B] hover:border-[#4DA3FF]/50"
              }`}
              data-hover
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filtered.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-2xl border border-[#2B2B2B] bg-[#151515] overflow-hidden hover:border-[#4DA3FF]/50 transition-colors"
                data-hover
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={1600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="p-5">
                  <p className="text-xs tracking-[0.2em] uppercase text-[#4DA3FF] mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold text-[#F2F2F2] leading-snug">{project.title}</h3>
                  <p className="text-sm text-[#8F8F8F] mt-2 line-clamp-2">{project.description}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
