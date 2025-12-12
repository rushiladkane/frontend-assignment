// src/components/Hero.tsx
import type { FC } from "react";

import { motion } from "framer-motion";

const Hero: FC = () => {
  const handleGetStarted = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <p className="text-sm text-indigo-600 font-medium">Frontend Assignment</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Build a clean & modern frontend
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            This starter uses React, TypeScript and TailwindCSS. Replace this content
            with your Figma design — match spacing, fonts and responsive behaviour.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleGetStarted}
              className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Get Started"
            >
              Get Started
            </button>

            <a
              href="#about"
              className="inline-flex items-center px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-0 md:w-1/2"
        >
          <div className="bg-indigo-50 rounded-xl p-8 shadow-lg">
            <div className="h-40 rounded bg-indigo-100 flex items-center justify-center text-indigo-700">
              Mockup — replace with screenshot
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="p-3 border rounded bg-white">Feature A</div>
              <div className="p-3 border rounded bg-white">Feature B</div>
              <div className="p-3 border rounded bg-white">Feature C</div>
              <div className="p-3 border rounded bg-white">Feature D</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
