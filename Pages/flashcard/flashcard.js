import { useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import HeaderFlash from "../../Components/headerFlash/headerFlash";
import FooterFlash from "../../Components/footerFlash/footerFlash";
import FinishedFlashcard from "../../Components/finishedFlashcard/finishedFlashcard";
import Navbar from "../../Components/navbar/navbar";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";
import "./flashcard.css";

const Flashcard = () => {
  const { studySetId } = useParams();
  const outletContext = useOutletContext();
  const studySet = outletContext?.studySet;
  const { flashcards, removeFlashcard } = useFlashcards();
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const visibleFlashcards = studySetId
    ? flashcards.filter((card) => card.studySetId === studySetId)
    : flashcards.filter((card) => !card.studySetId);

  const inputPath = studySetId
    ? `/study-sets/${studySetId}/flashcards/input`
    : "/flashcards/input";

  const emptyMessage = studySet
    ? `No flashcards in "${studySet.title}" yet. Click "Add flashcards" to create one.`
    : 'No flashcards yet. Click "Add flashcards" to create one.';

  return (
    <div className="flashcard">
      {!studySetId && <Navbar />}
      <HeaderFlash />
      <div className="flashcard__container">
        <input type="text" placeholder="Search flashcards..." />
        <Link to={inputPath}>
          <button className="addFlashcard" type="button">Add flashcards</button>
        </Link>
        <button
          type="button"
          className={`deleteFlashcard ${isDeleteMode ? "deleteFlashcard--active" : ""}`}
          onClick={() => {
            setIsDeleteMode((prev) => !prev);
            setIsEditMode(false);
          }}
        >
          {isDeleteMode ? "Cancel delete" : "Delete flashcards"}
        </button>
        <button
          type="button"
          className={`editFlashcard ${isEditMode ? "editFlashcard--active" : ""}`}
          onClick={() => {
            setIsEditMode((prev) => !prev);
            setIsDeleteMode(false);
          }}
        >
          {isEditMode ? "Cancel edit" : "Edit flashcards"}
        </button>
        <div className="flashcard__content" />
      </div>
      <div className="finishedFlashcards">
        {visibleFlashcards.length === 0 ? (
          <p>{emptyMessage}</p>
        ) : (
          visibleFlashcards.map((card) => (
            <FinishedFlashcard
              key={card.id}
              card={card}
              studySetId={studySetId}
              isDeleteMode={isDeleteMode}
              isEditMode={isEditMode}
              onDelete={() => removeFlashcard(card.id)}
            />
          ))
        )}
      </div>
      <FooterFlash />
    </div>
  );
};

export default Flashcard;
