export default function FeatureShowcase({
  title,
  description,
  image,
  className = "",
}) {
  return (
    <div className={`feature-showcase ${className}`}>
      <div className="feature-showcase__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="feature-showcase__image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
    </div>
  );
}
