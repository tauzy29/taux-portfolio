"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Send, ExternalLink, X } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
import GlowButton from "@/components/ui/GlowButton";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

const socials = [
  {
    label: "Instagram",
    handle: "@taux.jpeg",
    href: "https://instagram.com/taux.jpeg",
    icon: InstagramIcon,
    color: "#E1306C",
    desc: "Design posts & experiments",
  },
  {
    label: "Email",
    handle: "taux.designs@gmail.com",
    href: "mailto:taux.designs@gmail.com",
    icon: Mail,
    color: "#4DA3FF",
    desc: "For project inquiries",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdajkznk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden" ref={ref}>
      {/* BG */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4DA3FF]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7B61FF]/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-5 blur-[150px]"
        style={{ background: "radial-gradient(ellipse, #4DA3FF 0%, transparent 60%)" }} />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-xs text-[#4DA3FF] tracking-[0.4em] font-mono mb-3">/ 06</p>
          <h2
            className="text-4xl md:text-6xl font-bebas section-title"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px" }}
          >
            LET'S WORK
          </h2>
          <p className="text-[#888] text-sm mt-6 max-w-lg mx-auto leading-relaxed">
            Got a project in mind? A gaming channel, esports org, or creative vision that
            needs a cinematic touch? Let's make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Social links */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            <h3
              className="text-2xl font-bebas gradient-text tracking-widest"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              FIND ME HERE
            </h3>

            {socials.map((social, i) => {
              const Icon = social.icon;
              const isEmail = social.label === "Email";
              const Component = isEmail ? motion.button : motion.a;
              const props: any = isEmail
                ? { onClick: () => setShowEmailOptions(true) }
                : { href: social.href, target: "_blank", rel: "noopener noreferrer" };

              return (
                <Component
                  key={i}
                  {...props}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[#2A2A2A] hover:border-opacity-50 transition-all duration-300 group w-full text-left"
                  style={{ background: "#171717" }}
                  onMouseEnter={(e: any) => {
                    e.currentTarget.style.borderColor = `${social.color}40`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${social.color}10`;
                  }}
                  onMouseLeave={(e: any) => {
                    e.currentTarget.style.borderColor = "#2A2A2A";
                    e.currentTarget.style.boxShadow = "";
                  }}
                  data-hover
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${social.color}15`, border: `1px solid ${social.color}30` }}
                  >
                    <Icon size={20} style={{ color: social.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#EDEDED] font-medium text-sm">{social.label}</p>
                    <p className="text-[#666] text-xs font-mono truncate">{social.handle}</p>
                    <p className="text-[#555] text-[11px] mt-0.5">{social.desc}</p>
                  </div>
                  {!isEmail && (
                    <ExternalLink size={14} className="text-[#555] group-hover:text-[#EDEDED] transition-colors flex-shrink-0" />
                  )}
                </Component>
              );
            })}

            {/* Open for work badge */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="glass rounded-2xl p-5 border border-[#4DA3FF]/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#28C840] animate-pulse-glow" />
                <span className="text-[#28C840] text-xs font-mono font-semibold tracking-widest">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className="text-[#666] text-sm">
                Open to freelance projects, esports branding, thumbnail packages, and creative collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <h3
              className="text-2xl font-bebas gradient-text tracking-widest mb-6"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              SEND A MESSAGE
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#666] font-mono mb-2 tracking-widest">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-[#171717] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[#EDEDED] text-sm placeholder-[#444] focus:outline-none focus:border-[#4DA3FF]/60 focus:bg-[#1A1A1A] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs text-[#666] font-mono mb-2 tracking-widest">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-[#171717] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[#EDEDED] text-sm placeholder-[#444] focus:outline-none focus:border-[#4DA3FF]/60 focus:bg-[#1A1A1A] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs text-[#666] font-mono mb-2 tracking-widest">
                  YOUR MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#171717] border border-[#2A2A2A] rounded-xl px-4 py-3 text-[#EDEDED] text-sm placeholder-[#444] focus:outline-none focus:border-[#4DA3FF]/60 focus:bg-[#1A1A1A] transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? "bg-[#28C840]/20 border border-[#28C840]/40 text-[#28C840]"
                    : isSubmitting
                    ? "bg-[#333] text-[#888] cursor-not-allowed"
                    : "bg-gradient-to-r from-[#4DA3FF] to-[#7B61FF] text-white shadow-[0_0_20px_rgba(77,163,255,0.3)] hover:shadow-[0_0_30px_rgba(77,163,255,0.5)]"
                }`}
                data-hover
              >
                {sent ? (
                  <>
                    <span>✓</span>
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  "SENDING..."
                ) : (
                  <>
                    <Send size={16} />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mt-24 pt-10 border-t border-[#1E1E1E] text-center"
        >
          <p
            className="text-5xl md:text-7xl font-bebas gradient-text opacity-10 select-none mb-6"
            style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "0.2em" }}
          >
            TAUX
          </p>
          <div className="relative z-10">
            <p className="text-[#555] text-[10px] md:text-xs font-mono">
              © 2026 TAUX (Midhun Vijay KM) · Kerala, India · All rights reserved
            </p>
            <p className="text-[#3A3A3A] text-[10px] mt-2 tracking-widest">
              GRAPHIC DESIGNER · PHOTO EDITOR
            </p>
          </div>
        </motion.div>
      </div>

      {/* Email Client Selector Modal */}
      <AnimatePresence>
        {showEmailOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowEmailOptions(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#121212] border border-[#2A2A2A] rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailOptions(false)}
                className="absolute top-4 right-4 text-[#666] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-white font-bebas text-2xl mb-2 tracking-wide mt-2">CHOOSE EMAIL APP</h3>
              <p className="text-[#888] text-sm mb-6">How would you like to send your email to <strong className="text-[#EDEDED]">taux.designs@gmail.com</strong>?</p>
              
              <div className="space-y-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=taux.designs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowEmailOptions(false)}
                  className="flex items-center gap-4 p-3 rounded-xl border border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-[#EA4335]/50 transition-colors w-full group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#EA4335]/10 text-[#EA4335] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <span className="text-[#EDEDED] font-medium">Open in Gmail</span>
                </a>

                <a
                  href="https://outlook.live.com/mail/0/deeplink/compose?to=taux.designs@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowEmailOptions(false)}
                  className="flex items-center gap-4 p-3 rounded-xl border border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-[#0078D4]/50 transition-colors w-full group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0078D4]/10 text-[#0078D4] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <span className="text-[#EDEDED] font-medium">Open in Outlook</span>
                </a>

                <a
                  href="mailto:taux.designs@gmail.com"
                  onClick={() => setShowEmailOptions(false)}
                  className="flex items-center gap-4 p-3 rounded-xl border border-[#2A2A2A] hover:bg-[#1A1A1A] hover:border-[#888]/50 transition-colors w-full group"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#333] text-[#CCC] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <span className="text-[#EDEDED] font-medium">Use Default App</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
