import React from "react";
import "../styles/MainSection.scss";
// import DashboardCard from "./DashboardCard";

const MainSection = () => {
  return (
    <main className="main-section">
      <div className="welcome">
        <h1>Welcome to GoodSpace AI</h1>
        <p>
          Connect with the <span className="highlight">top talent</span> today!
        </p>
        <div className="contact-form">
          <select>
            <option>+91</option>
          </select>
          <input type="text" placeholder="Enter your contact number" />
          <button>Try Now</button>
        </div>
      </div>
      <div className="dashboard-preview">
        {/* <DashboardCard /> */}
      </div>
    </main>
  );
};

export default MainSection;
