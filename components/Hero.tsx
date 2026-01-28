"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  initialY: number;
  targetY: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side
    if (typeof window !== 'undefined') {
      const newParticles: Particle[] = Array.from({ length: 50 }, () => {
        const initialY = Math.random() * window.innerHeight;
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          initialY: initialY,
          targetY: initialY + (Math.random() * 200 - 100),
          opacity: Math.random() * 0.5 + 0.3,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        };
      });
      setParticles(newParticles);
    }
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full"
              initial={{
                x: particle.x,
                y: particle.initialY,
                opacity: particle.opacity,
              }}
              animate={{
                y: [particle.initialY, particle.targetY],
                opacity: [particle.opacity, particle.opacity + 0.3, particle.opacity],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.p
            variants={textVariants}
            className="text-neon-cyan text-lg mb-4 font-mono"
          >
            Hi, I&apos;m
          </motion.p>
          
          <motion.h1
            variants={textVariants}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Tony Yaser</span>
          </motion.h1>
          
          <motion.div
            variants={textVariants}
            className="text-2xl md:text-4xl mb-8"
          >
            <TypewriterText
              texts={[
                "I build AI agents that automate businesses",
                "I create intelligent automation solutions",
                "I turn manual work into smart systems",
              ]}
            />
          </motion.div>
          
          <motion.p
            variants={textVariants}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Custom AI automation solutions that save businesses{" "}
            <span className="text-neon-green font-semibold">200-300 hours/month</span> and{" "}
            <span className="text-neon-green font-semibold">$8,000+/month</span> in costs
          </motion.p>
          
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-neon-cyan text-dark-bg font-semibold rounded-lg text-lg hover:bg-neon-cyan/80 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00F5FF" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-lg text-lg hover:bg-neon-cyan/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute transform -translate-x-1/2 bottom-[-8.5rem] left-[46%] md:left-[49%]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TypewriterText({ texts }: { texts: string[] }) {
  const [mounted, setMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const currentText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [displayedText, isDeleting, currentTextIndex, texts, mounted]);

  // Render placeholder on server to match initial client render
  if (!mounted) {
    return (
      <span className="text-neon-cyan">
        <span className="inline-block w-0.5 h-8 bg-neon-cyan ml-1 opacity-0" />
      </span>
    );
  }

  return (
    <span className="text-neon-cyan">
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-neon-cyan ml-1"
      />
    </span>
  );
}
