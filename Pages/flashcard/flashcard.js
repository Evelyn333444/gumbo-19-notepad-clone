import { Link } from "react-router-dom";
import Navbar from "../../Components/navbar/navbar";
import HeaderFlash from "../../Components/headerFlash/headerFlash";
import FooterFlash from "../../Components/footerFlash/footerFlash";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";

const Flashcard = () => {
  const { flashcards } = useFlashcards();

  return (
    <div className="flashcard">
      <Navbar />
      <HeaderFlash />
      <div className="flashcard__container">
        <input type="text" placeholder="Search flashcards..." />
        <Link to="/flashcards/input">
          <button className="addFlashcard" type="button">Add flashcards</button>
        </Link>
        <button className="deleteFlashcard" type="button">Delete flashcards</button>
        <button className="editFlashcard" type="button">Edit flashcards</button>
        <div className="flashcard__content" />
      </div>
      <div className="finishedFlashcards">
        {flashcards.length === 0 ? (
          <p>No flashcards yet. Click &quot;Add flashcards&quot; to create one.</p>
        ) : (
          flashcards.map((card) => (
            <div key={card.id} className="finishedFlashcard">
              <div className="finishedFlashcard__front">
                <strong>Front:</strong> {card.frontText || card.frontFileName}
                {card.frontFileUrl && card.frontFileName?.match(/\.(jpg|jpeg|png|gif|webp)$/i) && (
                  <img src={card.frontFileUrl} alt="Front" style={{ maxWidth: "200px", display: "block" }} />
                )}
              </div>
              <div className="finishedFlashcard__back">
                <strong>Back:</strong> {card.backText || card.backFileName}
                {card.backFileUrl && card.backFileName?.match(/\.(jpg|jpeg|png|gif|webp)$/i) && (
                  <img src={card.backFileUrl} alt="Back" style={{ maxWidth: "200px", display: "block" }} />
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <FooterFlash />
    </div>
  );
};

export default Flashcard;
