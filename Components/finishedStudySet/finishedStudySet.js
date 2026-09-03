import { useState } from "react";
import "./finishedStudySet.css";

const formatCreatedDate = (createdAt) =>
  new Date(createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const FinishedStudySet = ({ studySet }) => {
  const [showBack, setShowBack] = useState(false);

  return (
    <div className="finishedStudySet">
      <button
        type="button"
        className={`finishedStudySet__flip ${showBack ? "finishedStudySet--flipped" : ""}`}
        onClick={() => setShowBack((prev) => !prev)}
        aria-label={showBack ? "Show study set details" : "Show created date"}
      >
        <div className="finishedStudySet__inner">
          <div className="finishedStudySet__face finishedStudySet__front">
            <span className="finishedStudySet__label">Study Set</span>
            <h3 className="finishedStudySet__title">{studySet.title}</h3>
            <p className="finishedStudySet__description">
              {studySet.description || "No description"}
            </p>
          </div>
          <div className="finishedStudySet__face finishedStudySet__back">
            <span className="finishedStudySet__label">Created</span>
            <p className="finishedStudySet__date">{formatCreatedDate(studySet.createdAt)}</p>
          </div>
        </div>
        <span className="finishedStudySet__hint">Click to flip</span>
      </button>
    </div>
  );
};

export default FinishedStudySet;
