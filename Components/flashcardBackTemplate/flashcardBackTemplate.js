const FlashcardBackTemplate = ({
  backText = "",
  onBackTextChange,
  onBackFileChange,
  readOnly = false,
  backFileName = null,
  backFileUrl = null,
}) => {
  const isImage = backFileUrl && backFileName?.match(/\.(jpg|jpeg|png|gif|webp)$/i);

  return (
    <div className={`flashcardBackTemplate ${readOnly ? "flashcardBackTemplate--display" : ""}`}>
      {!readOnly && <h2>Flashcard Back</h2>}
      <div className="flashcardBackTemplate__container">
        {readOnly ? (
          <>
            <p className="flashcardBackTemplate__text">
              {backText || backFileName || "No back content"}
            </p>
            {isImage && (
              <img src={backFileUrl} alt="Back" className="flashcardBackTemplate__media" />
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter the content for the flashcard back..."
              value={backText}
              onChange={(e) => onBackTextChange(e.target.value)}
            />
            <input type="file" accept="image/*,audio/*,video/*" onChange={onBackFileChange} />
          </>
        )}
      </div>
    </div>
  );
};

export default FlashcardBackTemplate;
