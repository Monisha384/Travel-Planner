import "./PlanTrip.css";
import destinations from "./destinationsData";

function PlanTrip() {
  return (
    <div className="plan-trip">

      <h1>Plan Your Trip 🧭</h1>
      <p>Select a travel style and explore ideas</p>

      {/* Ideas Section */}
      <div className="idea-grid">
        <div className="idea-card">🏖️ Beach Trips</div>
        <div className="idea-card">🏔️ Hill Stations</div>
        <div className="idea-card">🏙️ City Tours</div>
        <div className="idea-card">🌲 Nature & Forest</div>
        <div className="idea-card">🛕 Heritage Places</div>
        <div className="idea-card">🎢 Adventure Trips</div>
      </div>

      {/* Suggested Places */}
      <h2>Suggested Places</h2>

      <div className="trip-grid">
        {destinations.map((place, index) => (
          <div className="trip-card" key={index}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.location}</p>
            <p>{place.description}</p>

            <p>⭐ {place.rating || 4.5} / 5</p>
            <p>👀 {place.views || 1200} viewers</p>

            <p><strong>Budget:</strong> {place.budget}</p>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <h2>Map View</h2>
      <div className="map-box">
        <img
          src="https://img.freepik.com/free-photo/flat-lay-autumn-traveling-elements-assortment-with-wooden-letters_23-2148634192.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Map"
          className="map-img"
        />
      </div>

    </div>
  );
}

export default PlanTrip;
