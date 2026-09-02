import { Link } from "react-router-dom";
import "./headerFlash.css";

const CONTACT_EMAIL = "brackesb12@gmail.com";
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=Notepad%20Clone%20Feedback`;

const HeaderFlash = () => {
  return (
    <div className="headerFlash">
      <div className="headerFlash__container">
        <h1 className="headerFlash__title">Flashcards</h1>
        <nav>
          <ul>
            <li><Link to="/study-sets">study sets</Link></li>
            <li><Link to="/logout">logout</Link></li>
            <li>
              <a href={MAILTO_LINK} className="headerFlash__contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderFlash;
