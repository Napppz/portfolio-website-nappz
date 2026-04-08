"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Python",
    icon: "/tech-icons/Python-icon-notext.png",
    description: "Data Analysis, Machine Learning, Automation",
    color: "from-blue-500 to-yellow-500",
  },
  {
    name: "Java",
    icon: "/tech-icons/Java-icon.png",
    description: "OOP, Desktop Applications",
    color: "from-orange-500 to-orange-400",
  },
  {
    name: "JavaScript",
    icon: "/tech-icons/JVS-icon.png",
    description: "Interactive Web Apps",
    color: "from-yellow-500 to-yellow-400",
  },
  {
    name: "React",
    icon: "/tech-icons/React-icon.png",
    description: "Frontend Framework",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    name: "Next.js",
    icon: "/tech-icons/nextjs_icon_132160.png",
    description: "Full-stack React Framework",
    color: "from-gray-800 to-black",
  },
  {
    name: "PHP",
    icon: "/tech-icons/PHP-icon.png",
    description: "Backend Scripting",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    name: "MySQL",
    icon: "/tech-icons/mysql-icon.png",
    description: "Relational Database",
    color: "from-blue-600 to-orange-500",
  },
  {
    name: "HTML",
    icon: "/tech-icons/html-icon.png",
    description: "Semantic HTML",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "CSS",
    icon: "/tech-icons/CSS3_icon_and_wordmark.png",
    description: "Tailwind CSS, Styling",
    color: "from-blue-500 to-indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="mb-12 text-center"
        >
          <p className="font-mono text-2xl md:text-3xl font-bold tracking-widest text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2 uppercase">
            KEAHLIAN
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
            Bahasa Pemrograman
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
              className="group relative p-4 md:p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:border-primary/50 transition-colors duration-200 flex flex-col items-center text-center gap-4 shadow-lg cursor-pointer"
            >
              {/* Background gradient glow on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 shadow-inner">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  fill
                  className="object-contain p-2 drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-2">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
