"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FiBookOpen, FiBriefcase, FiCode, FiMapPin } from "react-icons/fi";
import { staggerContainer, fadeUp, fadeIn } from "@/components/ui/SectionWrapper";
import { personal } from "@/data/portfolio";

const focusAreas = [
  { icon: FiCode, label: "Roblox & Luau" },
  { icon: FiBriefcase, label: "Full-Stack Apps" },
  { icon: FiBookOpen, label: "IoT & Research" },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className="cyber-bracket text-center p-4"
      style={{ background: "rgba(0,245,255,0.03)", border: "1px solid rgba(0,245,255,0.15)" }}
    >
      <p className="text-2xl font-black font-mono" style={{ color: "#00f5ff", textShadow: "0 0 10px rgba(0,245,255,0.5)" }}>
        {value}
      </p>
      <p className="font-mono text-xs uppercase tracking-widest mt-1 text-slate-500 dark:text-slate-400">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="cyber-divider" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center max-w-6xl mx-auto"
        >
          <motion.div variants={fadeIn} className="relative">
            <div
              className="absolute -inset-px pointer-events-none"
              style={{ background: "linear-gradient(135deg, #00f5ff, transparent 45%, #ff003c)", filter: "blur(5px)", opacity: 0.45 }}
            />
            <div
              className="relative p-8 md:p-10 bg-white/80 dark:bg-[#04060e]/95"
              style={{ border: "1px solid rgba(0,245,255,0.25)" }}
            >
              <div className="absolute top-0 left-0 w-8 h-8" style={{ borderTop: "2px solid #00f5ff", borderLeft: "2px solid #00f5ff" }} />
              <div className="absolute bottom-0 right-0 w-8 h-8" style={{ borderBottom: "2px solid #ff003c", borderRight: "2px solid #ff003c" }} />

              <div
                className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-7"
                style={{
                  border: "1px solid rgba(0,245,255,0.45)",
                  boxShadow: "0 0 30px rgba(0,245,255,0.2)",
                }}
              >
                <Image
                  src={personal.photo}
                  alt={`${personal.name} profile photo`}
                  fill
                  sizes="128px"
                  className="object-cover"
                  style={{ objectPosition: "center 22%" }}
                />
              </div>

              <div className="text-center">
                <p className="font-mono text-xs uppercase tracking-[0.25em] mb-2" style={{ color: "#00f5ff" }}>Developer Profile</p>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">{personal.name}</h3>
                <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">{personal.role}</p>
                <p className="font-mono text-xs mt-4 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
                  <FiMapPin style={{ color: "#ff003c" }} /> {personal.location}
                </p>
              </div>

              <div className="grid gap-2 mt-7">
                {focusAreas.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 px-4 py-3" style={{ background: "rgba(0,245,255,0.035)", border: "1px solid rgba(0,245,255,0.1)" }}>
                    <Icon size={15} style={{ color: "#00f5ff" }} />
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-600 dark:text-slate-300">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.div variants={fadeUp}>
              <p className="terminal-label mb-3">About Me</p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-[#e8f4f8]">
                Building Playable &amp; <span className="heading-accent">Practical Experiences</span>
              </h2>
            </motion.div>

            {personal.bio.map((paragraph) => (
              <motion.p key={paragraph} variants={fadeUp} className="leading-relaxed text-slate-600 dark:text-slate-300">
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3 pt-4">
              {personal.stats.map((stat) => <StatCard key={stat.label} {...stat} />)}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <div className="cyber-divider mt-16" />
    </section>
  );
}
