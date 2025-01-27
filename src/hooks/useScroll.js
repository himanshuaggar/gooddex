import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import image1 from "../assets/image314.png"
import { useScrollSections } from "../hooks/useScroll"

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
  const containerRef = useRef < HTMLDivElement > (null)
  const { activeSection, setSectionRef } = useScrollSections(sections.length)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${(sections.length - 1) * 100}%`])

  return (
    <div className="how-it-works" ref={containerRef}>
      <div className="how-it-works__container">
        <div className="how-it-works__content">
          <h2>How it works</h2>
          <div className="steps">
            {sections.map((section, index) => (
              <div key={index} ref={setSectionRef(index)} className={`step ${activeSection === index ? "active" : ""}`}>
                <div className="step-content">
                  <div className="step-marker" />
                  <h3>{section.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div className="how-it-works__visual" style={{ y }}>
          {sections.map((section, index) => (
            <div key={index} className={`image-container ${activeSection === index ? "active" : ""}`}>
              <img src={section.image || "/placeholder.svg"} alt={section.title} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

