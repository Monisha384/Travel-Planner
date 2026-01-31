import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account 🌍</h2>
        <p>Join us and start planning your journey</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button className="auth-btn" onClick={handleRegister}>
          Register
        </button>

        <p className="auth-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
