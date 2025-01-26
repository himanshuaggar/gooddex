import amico from "../assets/amico.png"
export default function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <div className="text">
          <h2>
            Build Your Team With <br />
            The Best Candidates
          </h2>
          <button className="get-started-btn">
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="illustration">
          <img
            src={amico}
            alt="Team illustration"
          />
        </div>
      </div>
    </div>
  );
}
