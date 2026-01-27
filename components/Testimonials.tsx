"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "pekish",
    location: "North Macedonia",
    rating: 5,
    text: "Excellent guy to work with! Good communication and fast delivery.",
    project: "API & Integrations",
    price: "$200-$400",
  },
  {
    name: "jonhatan_codein",
    location: "Spain",
    rating: 5,
    text: "Tony Y did an AMAZING job on the software development project, exceeding all my expectations! Working with him was a pleasure due to his politeness and professionalism. Highly recommend! 👍",
    project: "Full Stack Web Applications",
    price: "$100-$200",
    repeat: true,
  },
  {
    name: "newdaycoupon",
    location: "United States",
    rating: 5,
    text: "A self-taught and full-time developer who truly understood everything I asked and delivered perfectly. I'm sure I'll want to work together again in the future. Highly recommended!",
    project: "Full Stack Web Applications",
    price: "Up to $50",
  },
  {
    name: "xxobamacarexx",
    location: "Canada",
    rating: 5,
    text: "Adept problem solver and very professional. Worked with him many times before and will continue to do so in the future. Hasn't let me down yet. He's straightforward and saves me a lot of headache in terms of having to deal with code, and as well as having to deal with other unsavory, unprofessional developers. I'm very happy that I can just go to him now.",
    project: "Full Stack Web Applications",
    price: "$200-$400",
    repeat: true,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from clients who&apos;ve worked with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-dark-card p-6 rounded-lg border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all relative"
            >
              {testimonial.repeat && (
                <span className="absolute top-4 right-4 text-xs px-2 py-1 bg-neon-green/20 text-neon-green rounded">
                  Repeat Client
                </span>
              )}
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center text-dark-bg font-bold text-lg mr-4">
                  {testimonial.name[0].toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>

              <div className="pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400">
                  <span className="text-neon-cyan">{testimonial.project}</span> • {testimonial.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.fiverr.com/tony_yaser"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-neon-cyan hover:text-neon-cyan/80 transition-colors"
          >
            View more reviews on Fiverr
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
