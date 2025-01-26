import { useState, useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel({ testimonials = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideElement = entry.target;
            const index = Array.from(slideElement.parentNode.children).indexOf(
              slideElement
            );
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.9,
      }
    );

    const slides = carouselRef.current.getElementsByClassName("carousel-slide");
    Array.from(slides).forEach((slide) => {
      observerRef.current.observe(slide);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="testimonial-carousel">
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div
              key={idx}
              className={`carousel-slide ${
                idx === activeIndex ? "active" : ""
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
