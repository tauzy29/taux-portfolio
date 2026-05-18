"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, Tag, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-[101] flex flex-col rounded-2xl overflow-hidden"
            style={{
              background: "rgba(18, 18, 18, 0.98)",
              border: "1px solid rgba(77, 163, 255, 0.15)",
              boxShadow: "0 0 80px rgba(77, 163, 255, 0.1)",
            }}
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <button
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-[#FF5F57] hover:brightness-125 transition-all"
                  />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[#888] text-xs font-mono ml-2">
                  taux-studio / {project.category}
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-[#888] hover:text-[#EDEDED] transition-colors"
                data-hover
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto grid grid-cols-1 lg:grid-cols-[1fr_360px]">
              {/* Image */}
              <div className="relative bg-[#111] flex items-center justify-center p-6 min-h-[300px]">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
                {/* Nav arrows */}
                {onPrev && (
                  <button
                    onClick={onPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1E1E1E]/80 border border-[#2A2A2A] flex items-center justify-center text-[#888] hover:text-[#4DA3FF] hover:border-[#4DA3FF]/40 transition-all"
                    data-hover
                  >
                    <ChevronLeft size={18} />
                  </button>
                )}
                {onNext && (
                  <button
                    onClick={onNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1E1E1E]/80 border border-[#2A2A2A] flex items-center justify-center text-[#888] hover:text-[#4DA3FF] hover:border-[#4DA3FF]/40 transition-all"
                    data-hover
                  >
                    <ChevronRight size={18} />
                  </button>
                )}
              </div>

              {/* Info panel */}
              <div className="border-t lg:border-t-0 lg:border-l border-[#2A2A2A] p-6 flex flex-col gap-6 overflow-auto">
                <div>
                  <span className="inline-block text-xs font-mono text-[#4DA3FF] bg-[#4DA3FF]/10 px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h2
                    className="text-2xl font-bold text-[#EDEDED] leading-tight"
                    style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
                  >
                    {project.title}
                  </h2>
                </div>

                <p className="text-[#888] text-sm leading-relaxed">
                  {project.description}
                </p>

                {project.client && (
                  <div className="flex items-center gap-2 text-sm">
                    <User size={14} className="text-[#4DA3FF]" />
                    <span className="text-[#666]">Client:</span>
                    <span className="text-[#EDEDED] font-medium">{project.client}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs text-[#666] mb-3">
                    <Tag size={12} />
                    TAGS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-[#1E1E1E] border border-[#2A2A2A] text-[#888]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-[#2A2A2A]">
                  <p className="text-xs text-[#555] text-center">
                    Crafted by{" "}
                    <span className="text-[#4DA3FF] font-semibold">TAUX</span> —
                    @taux.jpeg
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
