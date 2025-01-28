import React, { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import image1 from "../assets/image314.png"

const sections = [
  {
    title: "Describe your Dream profile",
    image: image1,
  },
  {
    title: "Make the best Hire",
    image: image1,
  },
  {
    title: "Describe your Dream profile",
    image: image1,
  },
  {
    title: "Describe your Dream profile",
    image: image1,
  },
]

export default function HowItWorks() {
  const [activeSection, setActiveSection] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      if (isMobile) {
        // Mobile scroll behavior
        const scrollProgress = Math.abs(window.scrollY - container.offsetTop);
        const totalHeight = container.scrollHeight - windowHeight;
        const newSection = Math.floor((scrollProgress / totalHeight) * sections.length);
        setActiveSection(Math.min(newSection, sections.length - 1));
      } else {
        // Desktop scroll behavior
        if (containerTop <= 0 && containerTop > -containerHeight + windowHeight) {
          setIsFixed(true);
          const scrollPosition = Math.abs(containerTop);
          const sectionHeight = containerHeight / sections.length;
          const newActiveSection = Math.min(
            Math.floor(scrollPosition / sectionHeight),
            sections.length - 1
          );
          setActiveSection(newActiveSection);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className="how-it-works" ref={containerRef}>
      <div className={`how-it-works__container ${isFixed ? "fixed" : ""}`}>
        <div className="how-it-works__content">
          <h2>How it works</h2>
          <div className="steps">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`step ${activeSection === index ? "active" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: activeSection === index ? 1 : 0.3,
                  x: activeSection === index ? 0 : -20,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="step-content">
                  <motion.div
                    className="step-marker"
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: activeSection === index ? 1.2 : 1,
                      backgroundColor: activeSection === index ? "#ffffff" : "rgba(255, 255, 255, 0.2)",
                    }}
                  />
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{
                      x: activeSection === index ? 0 : -10,
                      opacity: activeSection === index ? 1 : 0.7,
                    }}
                  >
                    <h3>{section.title}</h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="how-it-works__visual">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className="image-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <img src={sections[activeSection].image || "/placeholder.svg"} alt={sections[activeSection].title} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
