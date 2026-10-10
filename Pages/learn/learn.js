import { useOutletContext } from "react-router-dom";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";

const Learn = () => {
  const { studySet } = useOutletContext();
  const { flashcards } = useFlashcards();
  const studySetFlashcards = flashcards.filter((card) => card.studySetId === studySet.id);

  return (
    <div className="learn">
      <h1>{studySet.title} — Learn</h1>
      <p>
        Study mode for this set. You have {studySetFlashcards.length} flashcard
        {studySetFlashcards.length === 1 ? "" : "s"} ready to review.
      </p>
      <p>Study mode coming soon.</p>
    </div>
  );
};

export default Learn;
