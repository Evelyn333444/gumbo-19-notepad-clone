import React from 'react';
import alertLogout from '../alertLogout/alertLogout';
import logout from '../logout/logout';

const HeaderFlash = () => {
  return (
    <div className="headerFlash">
      <div className="headerFlash__container">
        <h1 className="headerFlash__title">Flashcards</h1>
        <nav>
            <ul>
                <li><a href="/">study sets</a></li>
                <li><a href="/logout">logout</a></li>
                <li><a href="/contact">contact</a></li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderFlash;
