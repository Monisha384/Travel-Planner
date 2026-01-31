import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import destinations from "./destinationsData";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <div className="dashboard-hero">
        <h1>Plan Your Next Adventure 🌍</h1>
        <p>Discover destinations and manage your trips easily</p>

        <button
          className="primary-btn"
          onClick={() => navigate("/plan-trip")}
        >
          Plan New Trip
        </button>
      </div>

      <h2 className="section-title">Popular Destinations</h2>

      <div className="trip-grid">
        {destinations.map((place, index) => (
          <div className="trip-card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <p><strong>Budget:</strong> {place.budget}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
