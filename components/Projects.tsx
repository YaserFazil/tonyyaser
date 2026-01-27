"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Real Estate Listings & Bookings Sync",
    client: "Real Estate Company",
    problem: "Manual updating of listings and bookings across multiple platforms causing errors and wasted time",
    solution: "Automated sync system that updates all platforms simultaneously, eliminating human errors",
    results: {
      hoursSaved: "200-300",
      costReduction: "$8,000+",
      period: "per month",
    },
    tech: ["Python", "API Integration", "Automation", "Web Scraping"],
    color: "cyan",
  },
  {
    id: 2,
    title: "AI Voice-Controlled Lender System",
    client: "Lender/Loan Company",
    problem: "Manual loan application and tracking processes requiring extensive human intervention",
    solution: "AI bot with voice commands for complete loan management - applications, tracking, approvals, payments",
    features: [
      "Voice commands for loan applications",
      "Track loan status in real-time",
      "Probability of approval predictions",
      "Appeal rejections with AI-generated reasons",
      "Automated payment processing",
      "Auto-generate agreements",
    ],
    tech: ["AI/ML", "Voice Recognition", "NLP", "Web App Integration"],
    color: "purple",
  },
  {
    id: 3,
    title: "AI Receptionist for Property Management",
    client: "Property Management Company",
    problem: "Manual call handling and booking management consuming staff time",
    solution: "24/7 AI receptionist that handles calls, manages bookings, and provides tenant information",
    features: [
      "Accepts calls from potential clients/tenants",
      "Makes booking requests automatically",
      "Checks availability for specific time periods",
      "Provides info about active bookings",
      "24/7 availability",
    ],
    tech: ["AI Voice Processing", "CRM Integration", "Calendar Systems", "NLP"],
    color: "green",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real automation solutions that deliver measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative"
            >
              <div
                className={`bg-dark-card border-2 rounded-lg p-6 h-full transition-all duration-300 cursor-pointer ${
                  project.color === "cyan"
                    ? "border-neon-cyan/30 hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/20"
                    : project.color === "purple"
                    ? "border-neon-purple/30 hover:border-neon-purple hover:shadow-lg hover:shadow-neon-purple/20"
                    : "border-neon-green/30 hover:border-neon-green hover:shadow-lg hover:shadow-neon-green/20"
                }`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.color === "cyan"
                        ? "bg-neon-cyan/20 text-neon-cyan"
                        : project.color === "purple"
                        ? "bg-neon-purple/20 text-neon-purple"
                        : "bg-neon-green/20 text-neon-green"
                    }`}
                  >
                    {project.client}
                  </span>
                </div>

                <p className="text-gray-400 mb-4 line-clamp-3">{project.problem}</p>

                {project.results && (
                  <div className="mb-4 p-4 bg-dark-surface rounded-lg">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-neon-green font-bold text-lg">{project.results.hoursSaved} hrs</div>
                        <div className="text-gray-500 text-xs">Saved {project.results.period}</div>
                      </div>
                      <div>
                        <div className="text-neon-green font-bold text-lg">{project.results.costReduction}</div>
                        <div className="text-gray-500 text-xs">Cost Reduction {project.results.period}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-dark-surface text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <h4 className="text-neon-cyan font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm mb-4">{project.solution}</p>
                    
                    {project.features && (
                      <>
                        <h4 className="text-neon-cyan font-semibold mb-2">Features:</h4>
                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="mt-4">
                      <h4 className="text-neon-cyan font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-neon-cyan/20 text-neon-cyan rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="mt-4 text-neon-cyan text-sm font-semibold">
                  {selectedProject === project.id ? "Click to collapse" : "Click to expand →"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
