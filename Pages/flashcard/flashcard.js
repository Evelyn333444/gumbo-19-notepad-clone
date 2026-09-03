import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar/navbar";
import HeaderFlash from "../../Components/headerFlash/headerFlash";
import FooterFlash from "../../Components/footerFlash/footerFlash";
import FinishedFlashcard from "../../Components/finishedFlashcard/finishedFlashcard";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";
import "./flashcard.css";

const Flashcard = () => {
  const { flashcards, removeFlashcard } = useFlashcards();
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="flashcard">
      <Navbar />
      <HeaderFlash />
      <div className="flashcard__container">
        <input type="text" placeholder="Search flashcards..." />
        <Link to="/flashcards/input">
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
        {flashcards.length === 0 ? (
          <p>No flashcards yet. Click &quot;Add flashcards&quot; to create one.</p>
        ) : (
          flashcards.map((card) => (
            <FinishedFlashcard
              key={card.id}
              card={card}
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
