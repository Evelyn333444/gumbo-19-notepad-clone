import Navbar from "../../Components/navbar/navbar";
import HeaderFlash from "../../Components/headerFlash/headerFlash";
import FooterFlash from "../../Components/footerFlash/footerFlash";

const Flashcard = () => {
  return (
    <div className="flashcard">
      <HeaderFlash />
      <Navbar />
      <div className="flashcard__container">
        <input type="text" placeholder="Search flashcards..." />
        <button type="button">Add flashcards</button>
        <button type="button">Delete flashcards</button>
        <button type="button">Edit flashcards</button>
        <div className="flashcard__content" />
      </div>
      <FooterFlash />
    </div>
  );
};

export default Flashcard;
