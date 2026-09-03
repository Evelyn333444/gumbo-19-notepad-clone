import { useState } from "react";
import FlashcardFrontTemplate from "../flashcardFrontTemplate/flashcardFrontTemplate";
import FlashcardBackTemplate from "../flashcardBackTemplate/flashcardBackTemplate";

const FinishedFlashcard = ({ card }) => {
  const [showBack, setShowBack] = useState(false);

  return (
    <button
      type="button"
      className={`finishedFlashcard ${showBack ? "finishedFlashcard--flipped" : ""}`}
      onClick={() => setShowBack((prev) => !prev)}
      aria-label={showBack ? "Show front of flashcard" : "Show back of flashcard"}
    >
      <div className="finishedFlashcard__inner">
        <div className="finishedFlashcard__face finishedFlashcard__front">
          <span className="finishedFlashcard__label">Front</span>
          <FlashcardFrontTemplate
            readOnly
            frontText={card.frontText}
            frontFileName={card.frontFileName}
            frontFileUrl={card.frontFileUrl}
          />
        </div>
        <div className="finishedFlashcard__face finishedFlashcard__back">
          <span className="finishedFlashcard__label">Back</span>
          <FlashcardBackTemplate
            readOnly
            backText={card.backText}
            backFileName={card.backFileName}
            backFileUrl={card.backFileUrl}
          />
        </div>
      </div>
      <span className="finishedFlashcard__hint">Click to flip</span>
    </button>
  );
};

export default FinishedFlashcard;
