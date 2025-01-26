import { useEffect, useState, useRef } from "react";

export function useScrollSections(sections) {
  const [activeSection, setActiveSection] = useState(0);
  const observers = useRef([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = new Array(sections).fill(null);
    observers.current = new Array(sections).fill(null);

    const createObserver = (index) => {
      if (observers.current[index]) {
        observers.current[index].disconnect();
      }

      observers.current[index] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      if (sectionRefs.current[index]) {
        observers.current[index].observe(sectionRefs.current[index]);
      }
    };

    for (let i = 0; i < sections; i++) {
      createObserver(i);
    }

    return () => {
      observers.current.forEach((observer) => observer?.disconnect());
    };
  }, [sections]);

  const setSectionRef = (index) => (element) => {
    if (element && !sectionRefs.current[index]) {
      sectionRefs.current[index] = element;
      if (observers.current[index]) {
        observers.current[index].observe(element);
      }
    }
  };

  return { activeSection, setSectionRef };
}
