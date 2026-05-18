"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Move,
  Paintbrush,
  PenTool,
  Type,
  Sun,
  SlidersHorizontal,
  SquareDashed,
  Lasso,
  Activity,
  Eye,
  Layers,
  RotateCcw,
  ChevronsLeftRight
} from "lucide-react";

const tools = [
  { id: "move", name: "Move", icon: Move },
  { id: "pen", name: "Pen", icon: PenTool },
  { id: "lasso", name: "Lasso", icon: Lasso },
  { id: "mask", name: "Mask", icon: SquareDashed },
  { id: "brush", name: "Brush", icon: Paintbrush },
  { id: "dodge", name: "Dodge", icon: Sun },
  { id: "text", name: "Text", icon: Type },
  { id: "levels", name: "Levels", icon: SlidersHorizontal },
  { id: "curves", name: "Curves", icon: Activity },
];

const layersList = [
  { id: "grading", name: "Final Grade", tools: ["curves"] },
  { id: "levels", name: "Contrast & Shadows", tools: ["levels"] },
  { id: "text", name: "Typography", tools: ["text"] },
  { id: "fx2", name: "Cinematic Lighting", tools: ["dodge"] },
  { id: "fx1", name: "Texture & Grain", tools: ["brush"] },
  { id: "masking", name: "Subject Isolation", tools: ["mask"] },
  { id: "silhouette", name: "Character Silhouette", tools: ["lasso"] },
  { id: "vector", name: "Background Assets", tools: ["pen"] },
  { id: "base", name: "Base Canvas", tools: ["move"] },
];

const toolDescriptions: Record<string, string> = {
  move: "Navigate the workspace canvas using smooth inertia dragging. Base plate initialized.",
  pen: "Revealing the background vector 'V' asset from darkness via masked tracing.",
  lasso: "Gradually sweeping the character silhouette into the composition.",
  mask: "Isolating the subject with sharp focus, subtle drop-shadow depth, and dimensional pop.",
  brush: "Painting contrast, texture grain, and high-frequency details onto the character.",
  dodge: "Applying screen-blend rim lights, cinematic bloom, and dramatic edge highlights.",
  text: "Compositing typography layers with blur-to-focus optics and glow.",
  levels: "Crushing black levels and maximizing global contrast for the composite.",
  curves: "Finalizing with dramatic cinematic grading. Drag the slider to compare before & after."
};

export default function PhotoshopSection() {
  const [unlockedTools, setUnlockedTools] = useState<Set<string>>(new Set());
  const [activeTool, setActiveTool] = useState("move");
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToolClick = (toolId: string) => {
    setActiveTool(toolId);
    setUnlockedTools((prev) => new Set(prev).add(toolId));
  };

  const resetEdit = () => {
    setUnlockedTools(new Set());
    setActiveTool("move");
    setSliderPos(50);
  };

  const hasPen = unlockedTools.has("pen");
  const hasLasso = unlockedTools.has("lasso");
  const hasMask = unlockedTools.has("mask");
  const hasBrush = unlockedTools.has("brush");
  const hasDodge = unlockedTools.has("dodge");
  const hasText = unlockedTools.has("text");
  const hasLevels = unlockedTools.has("levels");
  const hasCurves = unlockedTools.has("curves");

  const activeLayers = layersList
    .filter((l) => l.id === "base" || l.tools.some((t) => unlockedTools.has(t)))
    .map((l) => l.id);
  const isLayerActive = (id: string) => activeLayers.includes(id);

  let cursorStyle = "default";
  if (activeTool === "move" && !hasCurves) cursorStyle = "grab";
  else if (hasCurves) cursorStyle = "default";
  else cursorStyle = "crosshair";

  return (
    <section id="photoshop" className="section-pad relative bg-[#090909] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-[#6F7DFF] mb-3">/ 03</p>
          <h2 className="section-title">Creative Suite</h2>
          <p className="text-base md:text-lg text-[#9A9A9A] mt-4 max-w-2xl mx-auto">
            A premium cinematic showcase simulating a high-end Photoshop workflow. Step through the tools to composite and grade the AAA thumbnail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60px_1fr] xl:grid-cols-[70px_1fr_280px] gap-4 md:gap-6">
          {/* LEFT: TOOLS PANEL */}
          <aside className="hidden lg:flex flex-col gap-2 rounded-2xl border border-[#2B2B2B] bg-[#121212]/80 backdrop-blur-md p-3 items-center z-20 shadow-2xl">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isUnlocked = unlockedTools.has(tool.id);
              const isActive = activeTool === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolClick(tool.id)}
                  className={`relative p-3 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "bg-[#252A4A] text-[#6F7DFF] border border-[#6F7DFF]/30 shadow-[0_0_15px_rgba(111,125,255,0.2)]"
                      : isUnlocked
                      ? "bg-[#1A1A1A] text-white border border-[#444]"
                      : "bg-transparent text-[#777] border border-transparent hover:bg-[#1A1A1A] hover:text-white"
                  }`}
                  title={tool.name}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="absolute left-full ml-3 px-2 py-1 bg-black/90 backdrop-blur-md text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap border border-[#333] z-50 transition-opacity">
                    {tool.name}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* Mobile Tools */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolClick(tool.id)}
                className={`flex-shrink-0 p-3 rounded-xl transition-all ${
                  activeTool === tool.id
                    ? "bg-[#252A4A] text-[#6F7DFF] border border-[#6F7DFF]/30"
                    : unlockedTools.has(tool.id)
                    ? "bg-[#1A1A1A] text-white border border-[#444]"
                    : "bg-[#121212] text-[#777] border border-[#2B2B2B]"
                }`}
              >
                <tool.icon size={18} />
              </button>
            ))}
          </div>

          {/* CENTER: CANVAS AREA */}
          <div className="flex flex-col gap-4">
            <div
              ref={containerRef}
              className="relative rounded-2xl border border-[#2B2B2B] overflow-hidden aspect-[4/5] md:aspect-video xl:aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              style={{
                cursor: cursorStyle,
                backgroundColor: "#050505",
              }}
            >
              {/* Draggable Composite Container */}
              <motion.div
                className="absolute inset-0 w-full h-full transform-gpu"
                drag={activeTool === "move" && !hasCurves}
                dragConstraints={containerRef}
                dragElastic={0.15}
                whileDrag={{ cursor: "grabbing" }}
                animate={{ x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  filter: hasLevels ? "contrast(115%) brightness(95%)" : "none",
                }}
              >
                {/* 1. BACKGROUND */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/editing-suite/bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* 2. PEN (V Logo Reveal) */}
                <AnimatePresence>
                  {hasPen && (
                    <motion.div
                      initial={{ clipPath: "circle(0% at 30% 50%)", opacity: 0 }}
                      animate={{ clipPath: "circle(150% at 30% 50%)", opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      className="absolute inset-0 z-5 pointer-events-none"
                    >
                      <Image src="/editing-suite/v.png" alt="V Logo" fill className="object-cover opacity-60 mix-blend-screen" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 3. LASSO & MASK (Character Reveal) */}
                <AnimatePresence>
                  {hasLasso && (
                    <motion.div
                      initial={{ clipPath: "inset(100% 0% 0% 0%)", filter: "blur(20px)", scale: 0.95, opacity: 0 }}
                      animate={{
                        clipPath: "inset(0% 0% 0% 0%)",
                        filter: hasMask ? "blur(0px)" : "blur(8px)",
                        scale: hasMask ? 1 : 0.98,
                        opacity: hasMask ? 1 : 0.5,
                      }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute inset-0 z-10 pointer-events-none"
                    >
                      <Image
                        src="/editing-suite/jett.png"
                        alt="Character Render"
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hasMask ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" : ""
                        }`}
                        style={{
                          filter: hasBrush ? "contrast(110%) brightness(105%)" : "none",
                        }}
                      />
                      {/* 4. BRUSH (Texture/Grain on character) */}
                      {hasBrush && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.15 }}
                          transition={{ duration: 1 }}
                          className="absolute inset-0 z-15 bg-[url('/noise.png')] mix-blend-overlay"
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 5. DODGE (Lighting FX) */}
                <AnimatePresence>
                  {hasDodge && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 z-20 pointer-events-none mix-blend-screen"
                    >
                      <div className="absolute top-[10%] left-[55%] w-[30%] h-[30%] bg-[#6F7DFF] blur-[80px] opacity-60" />
                      <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-[#FF5500] blur-[100px] opacity-30" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* 6. TEXT (Typography Reveal) */}
                <AnimatePresence>
                  {hasText && (
                    <motion.div
                      initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
                      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="absolute inset-0 z-30 pointer-events-none"
                    >
                      <Image
                        src="/editing-suite/text.png"
                        alt="Typography"
                        fill
                        className="object-cover drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* 7. CURVES (Final Image + Before/After Slider) */}
              <AnimatePresence>
                {hasCurves && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-50"
                  >
                    {/* Clipped Final Image */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                    >
                      <Image
                        src="/editing-suite/final.jpg"
                        alt="Final Grade"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Interactive Slider Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPos}
                      onChange={(e) => setSliderPos(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-50"
                    />

                    {/* Divider UI */}
                    <div
                      className="absolute top-0 bottom-0 w-[2px] bg-[#6F7DFF] shadow-[0_0_20px_rgba(111,125,255,1)] pointer-events-none z-40"
                      style={{ left: `calc(${sliderPos}% - 1px)` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#090909]/90 backdrop-blur-md border border-[#6F7DFF] flex items-center justify-center shadow-lg">
                        <ChevronsLeftRight size={14} className="text-[#6F7DFF]" />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 z-40 pointer-events-none">
                      Final Grade
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 z-40 pointer-events-none">
                      Composite RAW
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Tool Description Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTool}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-xl border border-[#2B2B2B] bg-[#121212]/80 backdrop-blur-md text-sm text-[#9A9A9A] flex items-center gap-3 shadow-lg"
              >
                <div className="w-2 h-2 rounded-full bg-[#6F7DFF] animate-pulse shrink-0" />
                <p>{toolDescriptions[activeTool]}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: LAYERS PANEL */}
          <aside className="hidden xl:flex flex-col gap-4 rounded-2xl border border-[#2B2B2B] bg-[#121212]/80 backdrop-blur-md p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#2B2B2B] pb-3">
              <h3 className="text-sm font-semibold tracking-wide text-white uppercase flex items-center gap-2">
                <Layers size={16} className="text-[#6F7DFF]" /> Layers
              </h3>
              <button
                onClick={resetEdit}
                className="text-[#777] hover:text-white transition"
                title="Reset Workspace"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {layersList.map((layer) => {
                const active = isLayerActive(layer.id);
                return (
                  <motion.div
                    key={layer.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${
                      active
                        ? "bg-[#1E233A] border-[#6F7DFF]/40 shadow-[inset_0_0_10px_rgba(111,125,255,0.1)]"
                        : "bg-[#171717] border-[#222]"
                    }`}
                  >
                    <div className="shrink-0 flex items-center justify-center w-6 text-[#777]">
                      {active ? (
                        <Eye size={16} className="text-[#6F7DFF]" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#444]" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        active ? "text-white" : "text-[#777]"
                      }`}
                    >
                      {layer.name}
                    </span>
                    {active && layer.id !== "base" && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6F7DFF] shadow-[0_0_8px_rgba(111,125,255,0.8)] animate-pulse" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
