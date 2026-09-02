import { Link } from "react-router-dom";
import "./logout.css";

const Logout = () => {
  return (
    <div className="logout-container">
      <h1>You have been logged out.</h1>
      <p>Thank you for using our app!</p>
      <Link to="/" className="logout-container__link">
        Return to Home
      </Link>
    </div>
  );
};

export default Logout;
