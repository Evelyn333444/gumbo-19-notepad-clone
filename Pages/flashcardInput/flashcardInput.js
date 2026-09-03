import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FlashcardFrontTemplate from "../../Components/flashcardFrontTemplate/flashcardFrontTemplate";
import FlashcardBackTemplate from "../../Components/flashcardBackTemplate/flashcardBackTemplate";
import { useFlashcards } from "../../src/context/FlashcardContext.jsx";

const FlashcardInput = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { flashcards, addFlashcard, updateFlashcard } = useFlashcards();
  const existingCard = id ? flashcards.find((card) => card.id === id) : null;
  const isEditing = Boolean(id);

  const [frontText, setFrontText] = useState("");
  const [backText, setBackText] = useState("");
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditing && !existingCard) {
      navigate("/flashcards", { replace: true });
      return;
    }
    if (existingCard) {
      setFrontText(existingCard.frontText || "");
      setBackText(existingCard.backText || "");
    }
  }, [existingCard, isEditing, navigate]);

  const handleSave = () => {
    const hasFront = frontText.trim() || frontFile || existingCard?.frontFileName;
    const hasBack = backText.trim() || backFile || existingCard?.backFileName;

    if (!hasFront) {
      setError("Add text or a file for the front of the card.");
      return;
    }
    if (!hasBack) {
      setError("Add text or a file for the back of the card.");
      return;
    }

    const cardData = {
      frontText: frontText.trim(),
      backText: backText.trim(),
      frontFileName: frontFile?.name ?? existingCard?.frontFileName ?? null,
      backFileName: backFile?.name ?? existingCard?.backFileName ?? null,
      frontFileUrl: frontFile
        ? URL.createObjectURL(frontFile)
        : existingCard?.frontFileUrl ?? null,
      backFileUrl: backFile
        ? URL.createObjectURL(backFile)
        : existingCard?.backFileUrl ?? null,
    };

    if (isEditing) {
      updateFlashcard(id, cardData);
    } else {
      addFlashcard(cardData);
    }

    navigate("/flashcards");
  };

  return (
    <div className="flashcardTemplate">
      <h2>{isEditing ? "Edit Flashcard" : "Create a Flashcard"}</h2>
      <FlashcardFrontTemplate
        frontText={frontText}
        frontFile={frontFile}
        frontFileName={existingCard?.frontFileName}
        frontFileUrl={!frontFile ? existingCard?.frontFileUrl : null}
        onFrontTextChange={setFrontText}
        onFrontFileChange={(e) => setFrontFile(e.target.files?.[0] || null)}
      />
      <FlashcardBackTemplate
        backText={backText}
        backFile={backFile}
        backFileName={existingCard?.backFileName}
        backFileUrl={!backFile ? existingCard?.backFileUrl : null}
        onBackTextChange={setBackText}
        onBackFileChange={(e) => setBackFile(e.target.files?.[0] || null)}
      />
      {error && <p style={{ color: "#dc2626" }}>{error}</p>}
      <button className="createFlashcard" type="button" onClick={handleSave}>
        {isEditing ? "Save changes" : "Create"}
      </button>
      <button
        className="flashcardTemplate__cancel"
        type="button"
        onClick={() => navigate("/flashcards")}
      >
        Cancel
      </button>
    </div>
  );
};

export default FlashcardInput;
