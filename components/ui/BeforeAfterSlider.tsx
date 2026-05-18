"use client";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setSliderPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] md:aspect-video overflow-hidden rounded-xl select-none"
      onMouseMove={(e) => dragging.current && updateSlider(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onTouchMove={(e) => updateSlider(e.touches[0].clientX)}
    >
      <Image src={afterSrc} alt="After edit" width={1600} height={1000} className="w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <Image src={beforeSrc} alt="Before edit" width={1600} height={1000} className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-0 bottom-0 w-0.5 bg-[#4DA3FF]" style={{ left: `${sliderPos}%` }} />

      <motion.button
        type="button"
        onMouseDown={() => (dragging.current = true)}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#4DA3FF] text-white flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
        whileHover={{ scale: 1.06 }}
        data-hover
      >
        <span className="text-sm">||</span>
      </motion.button>

      <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-black/65 text-white">{beforeLabel}</span>
      <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-[#4DA3FF]/25 text-[#DCEBFF] border border-[#4DA3FF]/40">{afterLabel}</span>
    </div>
  );
}
