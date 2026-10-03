"use client";

import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiStar } from "react-icons/fi";
import { achievements, certifications, type Highlight } from "@/data/portfolio";
import { SectionWrapper, fadeUp, staggerContainer } from "@/components/ui/SectionWrapper";

function HighlightCard({ item, certification = false }: { item: Highlight; certification?: boolean }) {
  const Icon = certification ? FiAward : FiStar;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="relative p-6 bg-white/70 dark:bg-[#04060e]/80"
      style={{ border: `1px solid ${certification ? "rgba(0,245,255,0.18)" : "rgba(255,0,60,0.18)"}` }}
    >
      <div
        className="absolute top-0 left-0 w-6 h-6"
        style={{ borderTop: `2px solid ${certification ? "#00f5ff" : "#ff003c"}`, borderLeft: `2px solid ${certification ? "#00f5ff" : "#ff003c"}` }}
      />
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 flex items-center justify-center flex-shrink-0"
          style={{ color: certification ? "#00f5ff" : "#ff003c", border: `1px solid ${certification ? "rgba(0,245,255,0.3)" : "rgba(255,0,60,0.3)"}` }}
        >
          <Icon size={18} />
        </div>
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] mb-2" style={{ color: certification ? "#00f5ff" : "#ff003c" }}>
            {item.meta}
          </p>
          <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
          <p className="text-sm leading-relaxed mt-2 text-slate-600 dark:text-slate-300">{item.description}</p>
          {item.href && (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-wider" style={{ color: "#00f5ff" }}>
              View credential <FiExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Highlights() {
  return (
    <SectionWrapper id="highlights" className="py-24 md:py-32 cyber-darker relative">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div className="cyber-divider" />
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="terminal-label mb-3">Milestones</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-[#e8f4f8]">
              Certifications &amp; <span className="heading-accent">Achievements</span>
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5 mb-12">
            {certifications.map((item) => <HighlightCard key={item.title} item={item} certification />)}
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-5">
            {achievements.map((item) => <HighlightCard key={item.title} item={item} />)}
          </motion.div>
        </motion.div>
      </div>
      <div className="cyber-divider mt-16" />
    </SectionWrapper>
  );
}
