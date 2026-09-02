const FlashcardFrontTemplate = ({ frontText, onFrontTextChange, onFrontFileChange }) => {
  return (
    <div className="flashcardFrontTemplate">
      <h2>Flashcard Front</h2>
      <div className="flashcardFrontTemplate__container">
        <input
          type="text"
          placeholder="Enter the content for the flashcard front..."
          value={frontText}
          onChange={(e) => onFrontTextChange(e.target.value)}
        />
        <input type="file" accept="image/*,audio/*,video/*" onChange={onFrontFileChange} />
      </div>
    </div>
  );
};

export default FlashcardFrontTemplate;
