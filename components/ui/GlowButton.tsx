"use client";
import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  magnetic?: boolean;
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  magnetic = true,
}: GlowButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-[#4DA3FF] to-[#7B61FF]
      text-white font-semibold
      shadow-[0_0_20px_rgba(77,163,255,0.3),0_0_60px_rgba(77,163,255,0.1)]
      hover:shadow-[0_0_30px_rgba(77,163,255,0.5),0_0_80px_rgba(77,163,255,0.2)]
      hover:brightness-110
    `,
    outline: `
      border border-[#4DA3FF]/50 text-[#4DA3FF] font-medium
      hover:bg-[#4DA3FF]/10 hover:border-[#4DA3FF]
      hover:shadow-[0_0_20px_rgba(77,163,255,0.2)]
    `,
    ghost: `
      text-[#888] hover:text-[#EDEDED] font-medium
    `,
  };

  const commonClasses = `
    relative inline-flex items-center justify-center gap-2
    rounded-full tracking-wide transition-all duration-300 whitespace-nowrap
    ${sizeClasses[size]} ${variantClasses[variant]} ${className}
  `;

  const content = (
    <motion.span
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex items-center justify-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={commonClasses}
        data-hover
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={commonClasses}
      data-hover
    >
      {content}
    </button>
  );
}
