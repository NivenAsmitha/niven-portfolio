// Central source of truth for the portfolio content.

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: "fullstack" | "game" | "iot" | "desktop" | "research";
  github?: string;
  demo?: string;
  gradient: string;
  icon: string;
}

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  description: string;
  type: "education" | "work" | "leadership";
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  color: string;
}

export interface Highlight {
  title: string;
  description: string;
  meta: string;
  href?: string;
}

export const personal = {
  name: "Niven Liyanage",
  initials: "NL",
  role: "Junior Game Developer | Computing Undergraduate",
  taglines: [
    "Junior Game Developer",
    "Roblox & Luau Developer",
    "Full-Stack Developer",
    "IoT Builder",
  ],
  bio: [
    "I am a Junior Game Developer at Sea Pony Studios and a Computing undergraduate specializing in Information Systems. I build interactive Roblox experiences, full-stack web applications, IoT prototypes, and practical database systems.",
    "My work combines player-focused design with dependable engineering. I enjoy turning real-world problems into clear, useful products, collaborating with teams, and continuously learning across game, web, and embedded development.",
  ],
  stats: [
    { label: "Projects", value: "7+" },
    { label: "Technologies", value: "20+" },
    { label: "Hackathon Finals", value: "2" },
    { label: "Committed", value: "100%" },
  ],
  email: "nivenasmitha345@gmail.com",
  phone: "+94 77 111 2852",
  location: "Maharagama, Colombo, Sri Lanka",
  github: "https://github.com/NivenAsmitha",
  linkedin: "https://www.linkedin.com/in/niven-liyanage-81b1b4335",
  whatsapp: "https://wa.me/94771112852?text=Hi%20Niven,%20I%20saw%20your%20portfolio",
  cv: "/Niven_Liyanage_CV.pdf",
  photo: "/Niven_Profile.jpg",
  heroPhoto: "/profile.jpg",
  formspreeEndpoint: "",
};

export const skills: Skill[] = [
  { name: "Roblox Studio", level: 90, category: "frontend", icon: "SiRobloxstudio" },
  { name: "Luau", level: 88, category: "frontend", icon: "SiLuau" },
  { name: "React", level: 85, category: "frontend", icon: "FaReact" },
  { name: "React Native", level: 40, category: "frontend", icon: "FaReact" },
  { name: "Flutter", level: 35, category: "frontend", icon: "SiFlutter" },
  { name: "Next.js", level: 82, category: "frontend", icon: "SiNextdotjs" },
  { name: "TypeScript", level: 82, category: "frontend", icon: "SiTypescript" },
  { name: "HTML / CSS", level: 90, category: "frontend", icon: "FaHtml5" },
  { name: "Tailwind CSS", level: 86, category: "frontend", icon: "SiTailwindcss" },
  { name: "JavaScript", level: 88, category: "backend", icon: "FaJs" },
  { name: "Python", level: 78, category: "backend", icon: "SiPython" },
  { name: "Java", level: 82, category: "backend", icon: "FaJava" },
  { name: "PHP", level: 78, category: "backend", icon: "FaPhp" },
  { name: "Django", level: 76, category: "backend", icon: "SiDjango" },
  { name: "NestJS", level: 80, category: "backend", icon: "SiNestjs" },
  { name: "PostgreSQL", level: 84, category: "backend", icon: "SiPostgresql" },
  { name: "MySQL", level: 84, category: "backend", icon: "SiMysql" },
  { name: "MongoDB", level: 72, category: "backend", icon: "SiMongodb" },
  { name: "Arduino / ESP32", level: 82, category: "tools", icon: "SiArduino" },
  { name: "Git / GitHub", level: 88, category: "tools", icon: "FaGitAlt" },
  { name: "Postman", level: 84, category: "tools", icon: "SiPostman" },
  { name: "VS Code", level: 92, category: "tools", icon: "TbBrandVscode" },
];

export const timeline: TimelineItem[] = [
  {
    title: "Junior Game Developer",
    org: "Sea Pony Studios",
    period: "Feb 2026 - Present",
    description: "Developing Roblox gameplay systems, responsive interfaces, player progression, and persistent data-driven experiences.",
    type: "work",
  },
  {
    title: "Intern Game Developer",
    org: "Sea Pony Studios",
    period: "Feb 2026 - Aug 2026",
    description: "Built hands-on experience with Roblox Studio, Luau scripting, gameplay mechanics, UI development, and collaborative production workflows.",
    type: "work",
  },
  {
    title: "Robotics Club President",
    org: "LNBTI Campus",
    period: "Mar 2025 - May 2026",
    description: "Led student robotics initiatives, organized collaborative technical activities, and supported member development.",
    type: "leadership",
  },
  {
    title: "Robotics Club Secretary",
    org: "LNBTI Campus",
    period: "Mar 2024 - Mar 2025",
    description: "Coordinated club communication, documentation, events, and member participation.",
    type: "leadership",
  },
  {
    title: "BSc (Hons) in Computing - Information Systems",
    org: "LNBTI / University of Greenwich (UK)",
    period: "Jan 2023 - Present",
    description: "Studying information systems, software development, databases, business analysis, and user-focused solution design.",
    type: "education",
  },
  {
    title: "Diploma in IT",
    org: "ICBT Campus",
    period: "Mar 2022 - Dec 2022",
    description: "Completed with Merit.",
    type: "education",
  },
  {
    title: "Diploma in English",
    org: "ICBT Campus",
    period: "Mar 2022 - Dec 2022",
    description: "Completed with Merit.",
    type: "education",
  },
];

export const projects: Project[] = [
  {
    title: "Ceylon DryWay",
    description: "Tourist-friendly platform for discovering verified dry-toilet facilities across Sri Lanka, with owner submissions, reviewer approvals, and quality reporting.",
    tags: ["Next.js", "TypeScript", "NestJS", "PostGIS", "JWT"],
    category: "fullstack",
    demo: "https://www.comfortgo.lk/",
    gradient: "cyan-blue",
    icon: "FaMapMarkedAlt",
  },
  {
    title: "Coco Connect",
    description: "Full-stack blockchain platform connecting coconut-industry stakeholders through transparent supply-chain tracking and secure transactions.",
    tags: ["React", "Django", "PostgreSQL", "Blockchain", "REST API"],
    category: "fullstack",
    gradient: "emerald-cyan",
    icon: "FaLink",
  },
  {
    title: "Fit4All Roblox Game",
    description: "Interactive fitness-themed Roblox experience with engaging mechanics, responsive interfaces, player progression, and persistent data storage.",
    tags: ["Roblox Studio", "Luau", "DataStoreService", "3D Design"],
    category: "game",
    demo: "https://www.roblox.com/share?code=85c6585c1f4d394da416be23e774ad58&type=ExperienceDetails&stamp=1790836727706",
    gradient: "violet-pink",
    icon: "FaGamepad",
  },
  {
    title: "Motor Service Management",
    description: "Vehicle-service platform for customers, vehicles, appointments, repairs, progress updates, and automatic email notifications.",
    tags: ["React", "NestJS", "PostgreSQL", "Railway", "Email"],
    category: "fullstack",
    demo: "https://www.csmotorsservice.lk/",
    gradient: "amber-red",
    icon: "FaCar",
  },
  {
    title: "Automated Tank Water Control",
    description: "Arduino-based system that detects tank levels, automates water-pump operation, and safely controls a 230V AC pump through a relay.",
    tags: ["Arduino", "Ultrasonic Sensor", "LCD", "Relay Control"],
    category: "iot",
    gradient: "blue-emerald",
    icon: "FaWater",
  },
  {
    title: "Salon Management & POS",
    description: "Java desktop system for managing salon bookings, services, billing, and inventory through a practical operator-focused interface.",
    tags: ["Java", "Swing", "MySQL", "JDBC", "NetBeans"],
    category: "desktop",
    gradient: "amber-violet",
    icon: "FaCashRegister",
  },
  {
    title: "Neuro Calm",
    description: "Embedded stress-detection system that analyzes sensor data and provides real-time, frequency-based calming feedback through a connected web interface.",
    tags: ["ESP32", "Heart-Rate Sensor", "JavaScript", "Wi-Fi", "LCD"],
    category: "research",
    gradient: "pink-violet",
    icon: "FaHeartbeat",
  },
];

export const certifications: Highlight[] = [
  {
    title: "Microsoft Azure AI Essentials",
    description: "Professional certificate covering Azure AI fundamentals, machine-learning concepts, AI workloads, and responsible AI.",
    meta: "Professional Certificate",
    href: "https://url-shortener.me/6JVP",
  },
  {
    title: "Introduction to Business Analytics",
    description: "Training in data-analysis fundamentals, data-driven decision-making, insight interpretation, and reporting.",
    meta: "Certificate",
    href: "https://url-shortener.me/6JWU",
  },
];

export const achievements: Highlight[] = [
  {
    title: "CYPHER 3.0 - Top 9",
    description: "Finalist in Inside Hacker's Mind, an inter-university data-security hackathon at Kotelawala Defence University.",
    meta: "Hackathon Finalist",
  },
  {
    title: "Cyberverse 2025 - 4th Place",
    description: "Recognized for strong problem-solving and creativity at the LNBTI Cyberverse 2025 Hackathon.",
    meta: "Hackathon Finalist",
  },
  {
    title: "JASPER 2025 Research Symposium",
    description: "Presented an IoT-based embedded system for stress detection and relief through therapeutic frequencies.",
    meta: "Research Presentation",
  },
  {
    title: "Robotics Club Leadership",
    description: "Recognized by LNBTI for leadership and service in the campus Robotics Club.",
    meta: "Leadership",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "FaEnvelope",
    color: "bg-brand-600 hover:bg-brand-500",
  },
  {
    label: "GitHub",
    value: "@NivenAsmitha",
    href: personal.github,
    icon: "FaGithub",
    color: "bg-zinc-700 hover:bg-zinc-600",
  },
  {
    label: "LinkedIn",
    value: "Niven Liyanage",
    href: personal.linkedin,
    icon: "FaLinkedinIn",
    color: "bg-blue-700 hover:bg-blue-600",
  },
  {
    label: "WhatsApp",
    value: personal.phone,
    href: personal.whatsapp,
    icon: "FaWhatsapp",
    color: "bg-green-600 hover:bg-green-500",
  },
  {
    label: "Download CV",
    value: "PDF format",
    href: personal.cv,
    icon: "FaFileDownload",
    color: "bg-emerald-600 hover:bg-emerald-500",
  },
];
