const FlashcardFrontTemplate = ({
  frontText = "",
  onFrontTextChange,
  onFrontFileChange,
  readOnly = false,
  frontFileName = null,
  frontFileUrl = null,
}) => {
  const isImage = frontFileUrl && frontFileName?.match(/\.(jpg|jpeg|png|gif|webp)$/i);

  return (
    <div className={`flashcardFrontTemplate ${readOnly ? "flashcardFrontTemplate--display" : ""}`}>
      {!readOnly && <h2>Flashcard Front</h2>}
      <div className="flashcardFrontTemplate__container">
        {readOnly ? (
          <>
            <p className="flashcardFrontTemplate__text">
              {frontText || frontFileName || "No front content"}
            </p>
            {isImage && (
              <img src={frontFileUrl} alt="Front" className="flashcardFrontTemplate__media" />
            )}
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter the content for the flashcard front..."
              value={frontText}
              onChange={(e) => onFrontTextChange(e.target.value)}
            />
            <input type="file" accept="image/*,audio/*,video/*" onChange={onFrontFileChange} />
          </>
        )}
      </div>
    </div>
  );
};

export default FlashcardFrontTemplate;
