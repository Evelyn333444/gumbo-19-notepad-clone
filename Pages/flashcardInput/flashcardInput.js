import FlashcardFrontTemplate from "../../Components/flashcardFrontTemplate/flashcardFrontTemplate";
import FlashcardBackTemplate from "../../Components/flashcardBackTemplate/flashcardBackTemplate";

const FlashcardInput = () => {
  return (
    <div className="flashcardTemplate">
      <h2>Flashcard Template</h2>
      <FlashcardFrontTemplate />
      <FlashcardBackTemplate />
    </div>
  );
};

export default FlashcardInput;
