import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const user = localStorage.getItem("user");

    if (user) {
      navigate("/dashboard"); // Trips
    } else {
      navigate("/login"); // Login first
    }
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Plan Your Dream Trip 🌍</h1>
        <p>Explore destinations and manage your trips easily</p>

        <button className="cta-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
