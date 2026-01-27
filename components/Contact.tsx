"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Ready to automate your business processes? Let's discuss how AI can transform your workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Get In Touch</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <a
                    href="mailto:tonyyaser1@gmail.com"
                    className="text-neon-cyan hover:text-neon-cyan/80 transition-colors"
                  >
                    tonyyaser1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-neon-purple/20 flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Fiverr Profile</div>
                  <a
                    href="https://www.fiverr.com/tony_yaser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-purple hover:text-neon-purple/80 transition-colors"
                  >
                    View My Services
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-dark-card rounded-lg border border-neon-cyan/20">
              <h4 className="text-lg font-semibold mb-2 text-neon-cyan">Response Time</h4>
              <p className="text-gray-300 text-sm">Average response time: 1 hour</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-card p-6 rounded-lg border border-neon-cyan/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan">Schedule a Call</h3>
            <p className="text-gray-300 mb-6 text-sm">
              Book a free consultation to discuss your automation needs and see how I can help.
            </p>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/tonyyaser/ai-automation-projects"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
