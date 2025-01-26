import { useEffect, useRef, useState } from "react";
import image1 from "../assets/image314.png";
import image2 from "../assets/image123.png";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollSections } from "../hooks/useScroll";

const sections = [
  {
    title: "Describe your Dream profile",
    description: "Dive deep into profiles",
    image: image1,
  },
  {
    title: "Make the best Hire",
    description: "Select and connect with the perfect candidate",
    image: image1,
  },
  {
    title: "Describe your Dream profile",
    description: "Dive deep into profiles",
    image: image1,
  },
];

export default function HowItWorks() {
  const { activeSection, setSectionRef } = useScrollSections(sections.length);

  return (
    <div className="how-it-works">
      <div className="how-it-works__container">
        <div className="how-it-works__content">
          <h2>How it works</h2>
          <div className="steps">
            {sections.map((section, index) => (
              <div
                key={index}
                ref={setSectionRef(index)}
                className={`step ${activeSection === index ? "active" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: activeSection === index ? 1 : 0.3,
                    x: activeSection === index ? 0 : -20,
                  }}
                  transition={{ duration: 0.5 }}
                  className="step-content"
                >
                  <div className="step-marker" />
                  <h3>{section.title}</h3>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="how-it-works__visual">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="image-container"
            >
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
