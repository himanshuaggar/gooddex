import { useState, useEffect } from 'react';
import './styles/global.scss';
import "./styles/sty.scss"
import gooddex from './assets/gooddex.png';
import profcard from './assets/card.png';
import CompanyShowcase from './components/Company'
import BentoGrid from './components/BentoGrid';
import Testimonials from './components/Testimonials';
import SmartHiring from './components/SmartHiring';
import HowItWorks from './components/HowItWorks';
import FAQSection from './components/FAQ';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { FiExternalLink } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';


function App() {

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: 'IN', prefix: '+91' });

  const countryCodes = [
    { code: 'IN', prefix: '+91', name: 'India' },
    { code: 'US', prefix: '+1', name: 'United States' },
    { code: 'UK', prefix: '+44', name: 'United Kingdom' },
    { code: 'CA', prefix: '+1', name: 'Canada' },
    { code: 'AU', prefix: '+61', name: 'Australia' }
  ];


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setError("");

    window.location.href = `https://goodspace.ai/`;
  };


  return (
    <div className="App">
      <div className="gooddex">
        <nav className="navbar">
          <div className="navbar__logo">
            <img
              src={gooddex}
              alt="GoodDex Logo"
              className="logo"
            />
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
            <a
              href="https://goodspace.ai/products"
              className="dropdown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Products
            </a>
            <a
              href="https://goodspace.ai/company"
              className="dropdown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Company
            </a>
            <a
              href="https://goodspace.ai/blogs"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blogs
            </a>
            <a
              href="https://goodspace.ai/pricing"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pricing
            </a>
          </div>

          <div className={`navbar__actions ${isMenuOpen ? 'active' : ''}`}>
            <button onClick={() => window.location.href = 'https://goodspace.ai/'} className="btn btn--secondary">Login/Signup</button>
            <button onClick={() => window.location.href = 'https://goodspace.ai/'} className="btn btn--nav">
              Looking for job?{" "}
              <FiExternalLink size={16} />
            </button>
          </div>
        </nav>

        <main className="main">
          <section className="hero">
            <div className="welcome-badge">
              ✨<span className='welcome-text'> WELCOME TO GOODSPACE AI</span>
            </div>
            <h1 className="hero__title">
              Connect with the <span className="highlight">top talent</span> today!
            </h1>

            <form onSubmit={handlePhoneSubmit} className="phone-input">
              <div
                className={`phone-input__prefix ${isDropdownOpen ? 'active' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedCountry.code} {selectedCountry.prefix}
                {isDropdownOpen && (
                  <div className="country-dropdown">
                    {countryCodes.map((country) => (
                      <div
                        key={country.code}
                        className="country-option"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCountry(country);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span>{country.code}</span>
                        <span>{country.prefix}</span>
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <input
                type="tel"
                placeholder="Enter your contact number"
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setPhoneNumber(value);
                  setError("");
                }}
                required
                maxLength="10"
                pattern="[0-9]{10}"
                className={`phone-input__field ${error ? 'error' : ''}`}
              />
              <button
                type="submit"
                className="btn btn--primary"
              >
                Try Now →
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}

            <div className='image-container'>
              <img
                src={profcard}
                alt="Profile"
                className="image"
              />
            </div>
          </section>


        </main>
        <CompanyShowcase />

        <section className="why-gooddex">
          <h2 className="section-title">
            Why{" "}
            <img
              src={gooddex}
              alt="GoodDex"
              className="logo"
            />
          </h2>
          <BentoGrid />
        </section>
        <Testimonials />
        <SmartHiring />
        <HowItWorks />
        <FAQSection />
        <Banner />
        <div></div>
        <br />
        <Footer />
      </div>
    </div>
  );
}

export default App;
