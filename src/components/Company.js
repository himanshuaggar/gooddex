import hdfc from "../assets/Logo.png";
import deloitte from "../assets/deloitte-1 1.png";
import lenskart from "../assets/logo2.png";
import mobikwik from "../assets/mobikwik.png";
import cognizant from "../assets/Logo3.png";
import zomato from "../assets/Logo4.png";
import flipkart from "../assets/Logo5.png";
import genpact from "../assets/Logo6.png";

export default function CompanyShowcase() {
  const companies = [
    { name: "HDFC BANK", logo: hdfc },
    { name: "Cognizant", logo: cognizant },
    { name: "Zomato", logo: zomato },
    { name: "Flipkart", logo: flipkart },
    { name: "Deloitte", logo: deloitte },
    { name: "Genpact", logo: genpact },
    { name: "Lenskart", logo: lenskart },
    { name: "MobiKwik", logo: mobikwik },
  ];

  return (
    <section className="company-showcase">
      <h3 className="company-showcase__title">
        We're Already Hiring Smarter – Are You?
      </h3>
      <div className="company-showcase__grid">
        {companies.map((company) => (
          <div key={company.name} className="company-logo">
            <img src={company.logo || "/placeholder.svg"} alt={company.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
