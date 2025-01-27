import React, { useRef, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import image1 from "../assets/image314.png"

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
]

export default function HowItWorks() {
  const [activeSection, setActiveSection] = useState(0)
  const [allSectionsViewed, setAllSectionsViewed] = useState(false)
  const sectionRefs = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const sectionHeight = containerHeight / sections.length

      const newActiveSection = Math.floor((scrollPosition - containerTop) / sectionHeight)
      if (newActiveSection >= 0 && newActiveSection < sections.length) {
        setActiveSection(newActiveSection)
        if (newActiveSection === sections.length - 1) {
          setAllSectionsViewed(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`how-it-works ${allSectionsViewed ? "all-viewed" : ""}`} ref={containerRef}>
      <div className="how-it-works__container">
        <div className="how-it-works__content">
          <h2>How it works</h2>
          <div className="steps">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className={`step ${activeSection === index ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeSection === index ? 1 : 0.3, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="step-content">
                  <div className="step-marker" />
                  <h3>{section.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="how-it-works__visual">
          <div className="image-container">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeSection}
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

