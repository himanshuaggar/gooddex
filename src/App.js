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
              Products <ChevronDown size={16} />
            </a>
            <a
              href="https://goodspace.ai/company"
              className="dropdown"
              target="_blank"
              rel="noopener noreferrer"
            >
              Company <ChevronDown size={16} />
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
            <button className="btn btn--secondary">Login/Signup</button>
            <button className="btn btn--nav">
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

            <div className="phone-input">
              <div className="phone-input__prefix">IN +91</div>
              <input
                type="tel"
                placeholder="Enter your contact number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="phone-input__field"
              />
              <button className="btn btn--primary" style={{fontWeight:'600', fontSize:'1rem'}}>Try Now →</button>
            </div>
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
