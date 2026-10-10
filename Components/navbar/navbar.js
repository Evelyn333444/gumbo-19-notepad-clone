import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <h2>??App-Name??</h2>
        </div>
        <div className="navbar__menu">
          <ul>
            <li><Link to="/study-sets">Study Sets</Link></li>
            <li><Link to="/flashcards">Flashcards</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
