import { FaStar } from "react-icons/fa";

export default function TestimonialCard({name, role, company, rating, comment, avatar}) {
  return (
    <div className="testimonial-card">
      <img src={avatar} alt={name} className="avatar" />
      <div className="testimonial-card__header">
        <div className="info">
        <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
                <FaStar />
              </span>
            ))}
          </div>
          <h4>{name}</h4>
          <p className="role">{role} at {company}</p>
        </div>
      </div>
      <p className="testimonial-card__comment">{comment}</p>
    </div>
  );
}