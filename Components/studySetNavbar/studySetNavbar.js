import { Link } from "react-router-dom";
import "./studySetNavbar.css";

const StudySetNavbar = ({ studySet }) => {
  const basePath = `/study-sets/${studySet.id}`;

  return (
    <nav className="studySetNavbar">
      <div className="studySetNavbar__container">
        <div className="studySetNavbar__header">
          <Link to="/study-sets" className="studySetNavbar__back">
            ← All Study Sets
          </Link>
          <h2 className="studySetNavbar__title">{studySet.title}</h2>
        </div>
        <ul className="studySetNavbar__menu">
          <li><Link to={basePath}>Overview</Link></li>
          <li><Link to={`${basePath}/flashcards`}>Flashcards</Link></li>
          <li><Link to={`${basePath}/notepad`}>Notepad</Link></li>
          <li><Link to={`${basePath}/learn`}>Learn</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default StudySetNavbar;
