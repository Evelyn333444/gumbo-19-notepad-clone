import { Link } from "react-router-dom";
import "./headerHome.css";

const CONTACT_EMAIL = "brackesb12@gmail.com";
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=Notepad%20Clone%20Feedback`;

const HeaderHome = () => {
  return (
    <div className="headerHome">
      <div className="headerHome__container">
        <nav className="headerHome__title">
          <ul className="headerHome__nav">
            <li><Link to="/login">login</Link></li>
            <li>about me</li>
            <li>about the website</li>
            <li>
              <a href={MAILTO_LINK} className="headerHome__contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderHome;
