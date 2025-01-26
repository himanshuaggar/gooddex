import FeatureShowcase from "./FeatureShowcase";
import feature1 from "../assets/Feature1.png";
import feature2 from "../assets/Feature2.png";

export default function SmartHiring() {
  return (
    <section className="smart-hiring">
      <h2 className="section-title">Smarter Hiring Through Data and AI</h2>
      <div className="features-container">
        <FeatureShowcase
          title="Streamline Hiring with AI-Powered Interviews"
          description="GoodDex’s AI Interviewer conducts unbiased interviews and provides detailed performance summaries through intuitive dashboards, helping you make smarter hiring decisions effortlessly."
          image={feature2}
          className="interview-feature"
        />
        <FeatureShowcase
          title="Leverage Insights to Build Your Dream Team"
          description="Book a demo to explore how GoodDex transforms your hiring process. Our platform connects you with top-tier candidates, tailored to your specific requirements. Leverage advanced tools and AI-driven insights to make smarter hiring decisions. Discover the easiest way to build your dream team today!"
          image={feature1}
          className="insights-feature"
        />
      </div>
    </section>
  );
}
