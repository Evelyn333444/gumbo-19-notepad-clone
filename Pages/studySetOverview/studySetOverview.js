import { Link, useOutletContext } from "react-router-dom";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";
import { useNotepads } from "../../src/context/NotepadContext.jsx";
import "./studySetOverview.css";

const formatCreatedDate = (createdAt) =>
  new Date(createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const StudySetOverview = () => {
  const { studySet } = useOutletContext();
  const { flashcards } = useFlashcards();
  const { getNotepadByStudySet } = useNotepads();

  const studySetFlashcards = flashcards.filter((card) => card.studySetId === studySet.id);
  const notepad = getNotepadByStudySet(studySet.id);
  const hasNotes = Boolean(notepad.userNotes?.trim());
  const basePath = `/study-sets/${studySet.id}`;

  return (
    <div className="studySetOverview">
      <div className="studySetOverview__header">
        <p className="studySetOverview__label">Study Set</p>
        <p className="studySetOverview__date">{formatCreatedDate(studySet.createdAt)}</p>
      </div>
      <p className="studySetOverview__description">
        {studySet.description || "No description"}
      </p>
      <p className="studySetOverview__intro">
        Everything you add here stays in this study set — flashcards, notes, and learn mode
        all in one place.
      </p>
      <div className="studySetOverview__sections">
        <Link to={`${basePath}/flashcards`} className="studySetOverview__section">
          <h3>Flashcards</h3>
          <p>{studySetFlashcards.length} card{studySetFlashcards.length === 1 ? "" : "s"}</p>
        </Link>
        <Link to={`${basePath}/notepad`} className="studySetOverview__section">
          <h3>Notepad</h3>
          <p>{hasNotes ? "Notes saved" : "No notes yet"}</p>
        </Link>
        <Link to={`${basePath}/learn`} className="studySetOverview__section">
          <h3>Learn</h3>
          <p>Study this set</p>
        </Link>
      </div>
    </div>
  );
};

export default StudySetOverview;
