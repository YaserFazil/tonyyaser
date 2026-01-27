"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-neon-cyan/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Tony Yaser</h3>
            <p className="text-gray-400 text-sm">
              AI Automation Specialist helping businesses streamline operations and reduce costs through intelligent automation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-neon-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-neon-cyan transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-cyan transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-cyan transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-cyan">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:tonyyaser1@gmail.com"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  tonyyaser1@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.fiverr.com/tony_yaser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-cyan transition-colors"
                >
                  Fiverr Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tony Yaser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
