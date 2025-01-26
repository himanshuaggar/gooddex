import cursor from "../assets/cursor.png";
import chart from "../assets/chart.png";
import helix from "../assets/helix.png";
import message from "../assets/message.png"

export function BentoCard({ title, description, className = "", image, alt }) {
  return (
    <div className={`bento-card ${className}`}>
      <div className="bento-card__content">
      <div className="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
        {image && <img src={image} alt={alt || title} className="image" />}
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <div className="bento-grid">
      <BentoCard
        title="Advanced Filtering"
        description="Utilise advanced filters for skills, location, and industry."
        className="small"
        image={helix}
      />
      <BentoCard
        title="Vast Talent Pool"
        description="Access 10 million curated job seeker profiles instantly."
        className="wide"
        image={chart}
      />
      <BentoCard
        title="Direct Contact Access"
        description="Effortlessly reach candidates with immediate contact information."
        className="wide"
        image={message}
      />
      <BentoCard
        title="Active Profiles"
        description="Engage with up-to-date, actively seeking candidates."
        className="small"
        image={cursor}
      />
    </div>
  );
}
