import { useEffect, useState, useRef } from "react";

export function useScrollSections(sections) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    sectionRefs.current = new Array(sections).fill(null);

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      isScrollingRef.current = true;

      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestSection = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = index;
          }
        }
      });

      setActiveSection(closestSection);

      timeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sections]);

  const setSectionRef = (index) => (element) => {
    if (element) {
      sectionRefs.current[index] = element;
    }
  };

  return { activeSection, setSectionRef };
}