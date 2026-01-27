"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 95, icon: "🐍" },
  { name: "JavaScript", level: 90, icon: "⚡" },
  { name: "AI/ML", level: 88, icon: "🤖" },
  { name: "Automation", level: 92, icon: "⚙️" },
  { name: "API Integration", level: 90, icon: "🔌" },
  { name: "Web Development", level: 85, icon: "🌐" },
  { name: "Voice Recognition", level: 80, icon: "🎤" },
  { name: "CRM Systems", level: 85, icon: "📊" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-dark-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build intelligent automation solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dark-card p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all group"
            >
              <div className="text-4xl mb-4 text-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-4">{skill.name}</h3>
              <div className="relative h-2 bg-dark-surface rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <div className="text-right text-sm text-gray-400 mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "Django", "Flask", "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: "spring" }}
                className="px-4 py-2 bg-dark-card border border-neon-cyan/30 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all cursor-default"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
