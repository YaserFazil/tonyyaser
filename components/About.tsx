"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-surface relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Tony</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            <span className="text-neon-cyan font-semibold">Tony Yaser</span> is a passionate full-stack developer
            with over <span className="text-neon-green font-semibold">7 years</span> of experience specializing in AI
            automation and intelligent systems.
          </p>

          <p>
            He has helped dozens of companies grow and scale by building custom automation solutions that eliminate
            repetitive manual work. His expertise spans web development, AI/ML integration, and creating intelligent
            agents that handle complex business workflows.
          </p>

          <p>
            What drives him is solving real business problems. He has saved clients{" "}
            <span className="text-neon-green font-semibold">10,000+ hours</span> of manual work and{" "}
            <span className="text-neon-green font-semibold">$50,000+</span> in operational costs through intelligent
            automation.
          </p>

          <div className="mt-8 p-6 bg-dark-card rounded-lg border border-neon-cyan/20">
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Certifications & Credentials</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="text-neon-green mr-2">✓</span>
                Certified by the Saudi Federation for Cyber Security, Programming & Drones
              </li>
              <li className="flex items-center">
                <span className="text-neon-green mr-2">✓</span>
                Certified by Turkcell, a leading Turkish telecommunications company in Türkiye
              </li>
            </ul>
          </div>

          <p className="mt-6">
            When he is not coding, he is constantly learning about the latest AI technologies and automation techniques. He
            believe that the future of business lies in intelligent automation that allows people to focus on what truly
            matters, building relationships, making strategic decisions, and growing their businesses instead of being stuck in repetitive manual work.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-neon-cyan text-dark-bg font-semibold rounded-lg text-lg hover:bg-neon-cyan/80 transition-all"
            >
              Let&apos;s Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
