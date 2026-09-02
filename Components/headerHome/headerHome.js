import { useState } from "react";
import LoginToggle from "../loginToggle/loginToggle";
import "./headerHome.css";

const CONTACT_EMAIL = "brackesb12@gmail.com";
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=Notepad%20Clone%20Feedback`;

const HeaderHome = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="headerHome">
        <div className="headerHome__container">
          <nav className="headerHome__title">
            <ul className="headerHome__nav">
              <li>
                <button type="button" className="headerHome__login" onClick={() => setShowLogin(true)}>
                  login
                </button>
              </li>
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
      {showLogin && <LoginToggle onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default HeaderHome;
