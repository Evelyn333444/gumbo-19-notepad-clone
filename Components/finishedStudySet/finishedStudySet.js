import { useNavigate } from "react-router-dom";
import "./finishedStudySet.css";

const formatCreatedDate = (createdAt) =>
  new Date(createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const FinishedStudySet = ({ studySet }) => {
  const navigate = useNavigate();

  return (
    <div className="finishedStudySet">
      <button
        type="button"
        className="finishedStudySet__card"
        onClick={() => navigate(`/study-sets/${studySet.id}`)}
        aria-label={`Open flashcards for ${studySet.title}`}
      >
        <div className="finishedStudySet__header">
          <span className="finishedStudySet__label">Study Set</span>
          <span className="finishedStudySet__date">{formatCreatedDate(studySet.createdAt)}</span>
        </div>
        <h3 className="finishedStudySet__title">{studySet.title}</h3>
        <p className="finishedStudySet__description">
          {studySet.description || "No description"}
        </p>
      </button>
    </div>
  );
};

export default FinishedStudySet;
