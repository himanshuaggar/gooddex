import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import goodspace from "../assets/goodspace.png";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img
            src={goodspace}
            alt="GoodSpace"
            className="logo"
          />
          <p className="tagline">World's #1st AI Recruitment Platform</p>

          <div className="connect-section">
            <h3>Let's Connect</h3>
            <div className="contact-info">
              <a href="mailto:info@goodspace.ai" className="contact-link">
                <Mail className="icon" />
                info@goodspace.ai
              </a>
              <a href="tel:+919810914690" className="contact-link">
                <Phone className="icon" />
                +91 98109 14690
              </a>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <FaInstagram color="#fff"  size={40} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn color="#fff" size={40} />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF color="#fff" size={35} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter color="#fff" size={40} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Hire by Location</h3>
            <ul>
              <li>
                <a href="#">Hiring in Bangalore</a>
              </li>
              <li>
                <a href="#">Hiring in Gurgaon</a>
              </li>
              <li>
                <a href="#">Hiring in Noida</a>
              </li>
              <li>
                <a href="#">Hiring in Mumbai</a>
              </li>
              <li>
                <a href="#">Hiring in Hyderabad</a>
              </li>
              <li>
                <a href="#">Hiring in Pune</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Hire by Designation</h3>
            <ul>
              <li>
                <a href="#">Hire Android Developers</a>
              </li>
              <li>
                <a href="#">Hire FullStack Engineers</a>
              </li>
              <li>
                <a href="#">Hire Sales Executive</a>
              </li>
              <li>
                <a href="#">Hire Business Analyst</a>
              </li>
              <li>
                <a href="#">Hire HR Recruiter</a>
              </li>
              <li>
                <a href="#">Hire Marketing Executive</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Press Room</a>
              </li>
              <li>
                <a href="#">Find Blood Donors</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 GoodSpace AI™. All rights reserved worldwide.</p>
      </div>
    </footer>
  );
}
