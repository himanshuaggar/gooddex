import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg'; 
import avatar3 from '../assets/avatar3.jpg';
import gooddex from '../assets/gooddex.png';


function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      rating: 5,
      comment:
        "GoodDex has transformed our hiring process. The AI-powered matching is incredibly accurate!",
      avatar: avatar2,
    },
    {
      name: "Michael Chen",
      role: "Talent Acquisition",
      company: "InnovateX",
      rating: 5,
      comment:
        "The quality of candidates we get through GoodDex is outstanding. Saved us countless hours!",
      avatar: avatar3,
    },
    {
      name: "Emily Rodriguez",
      role: "Recruiting Manager",
      company: "GlobalTech",
      rating: 5,
      comment:
        "Best platform for finding tech talent. The AI screening is a game-changer.",
      avatar: avatar2,
    },
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp",
      rating: 5,
      comment:
        "GoodDex has transformed our hiring process. The AI-powered matching is incredibly accurate!",
      avatar: avatar1,
    },
    {
      name: "Michael Chen",
      role: "Talent Acquisition",
      company: "InnovateX",
      rating: 5,
      comment:
        "The quality of candidates we get through GoodDex is outstanding. Saved us countless hours!",
      avatar: avatar2,
    },
    {
      name: "Emily Rodriguez",
      role: "Recruiting Manager",
      company: "GlobalTech",
      rating: 5,
      comment:
        "Best platform for finding tech talent. The AI screening is a game-changer.",
      avatar: avatar3,
    },
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">
        What Our Client Says About{" "}
        <img src={gooddex} alt="GoodDex" className="logo" />
      </h2>
      <p className="section-subtitle">
        Things That Make Us The Best Place To Start Your Search For Best Talent!
      </p>
      <TestimonialCarousel testimonials={testimonials} />
    </section>
  );
}

export default Testimonials;
