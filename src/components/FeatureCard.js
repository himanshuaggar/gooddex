export default function FeatureCard({ title, description, className = "" }) {
  return (
    <div className={`feature-card ${className}`}>
      <div className="feature-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
