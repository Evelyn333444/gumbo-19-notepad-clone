import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlashcardFrontTemplate from "../../Components/flashcardFrontTemplate/flashcardFrontTemplate";
import FlashcardBackTemplate from "../../Components/flashcardBackTemplate/flashcardBackTemplate";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";

const FlashcardInput = () => {
  const navigate = useNavigate();
  const { addFlashcard } = useFlashcards();
  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (!frontText.trim() && !frontFile) {
      setError("Add text or a file for the front of the card.");
      return;
    }
    if (!backText.trim() && !backFile) {
      setError("Add text or a file for the back of the card.");
      return;
    }

    addFlashcard({
      frontText: frontText.trim(),
      backText: backText.trim(),
      frontFileName: frontFile?.name || null,
      backFileName: backFile?.name || null,
      frontFileUrl: frontFile ? URL.createObjectURL(frontFile) : null,
      backFileUrl: backFile ? URL.createObjectURL(backFile) : null,
    });

    navigate("/flashcards");
  };

  return (
    <div className="flashcardTemplate">
      <h2>Create a Flashcard</h2>
      <FlashcardFrontTemplate
        frontText={frontText}
        onFrontTextChange={setFrontText}
        onFrontFileChange={(e) => setFrontFile(e.target.files?.[0] || null)}
      />
      <FlashcardBackTemplate
        backText={backText}
        onBackTextChange={setBackText}
        onBackFileChange={(e) => setBackFile(e.target.files?.[0] || null)}
      />
      {error && <p style={{ color: "#dc2626" }}>{error}</p>}
      <button className="createFlashcard" type="button" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default FlashcardInput;
