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
]

export default function HowItWorks() {
  const [activeSection, setActiveSection] = useState(0)
  const [isFixed, setIsFixed] = useState(false)
  const containerRef = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target)
          setActiveSection(index)
        }
      })
    }, options)

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    // Observer for the container to handle fixed positioning
    const containerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(entry.isIntersecting)
      },
      { threshold: [0, 1] },
    )

    if (containerRef.current) {
      containerObserver.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      containerObserver.disconnect()
    }
  }, [])

  return (
    <div className="how-it-works" ref={containerRef}>
      <div className={`how-it-works__container ${isFixed ? "fixed" : ""}`}>
        <div className="how-it-works__content">
          <h2>How it works</h2>
          <div className="steps">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)}
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
            <motion.div
              className="progress-indicator"
              style={{
                top: `${(activeSection * 100) / (sections.length - 1)}%`,
              }}
            />
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

