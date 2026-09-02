const FlashcardBackTemplate = ({ backText, onBackTextChange, onBackFileChange }) => {
  return (
    <div className="flashcardBackTemplate">
      <h2>Flashcard Back</h2>
      <div className="flashcardBackTemplate__container">
        <input
          type="text"
          placeholder="Enter the content for the flashcard back..."
          value={backText}
          onChange={(e) => onBackTextChange(e.target.value)}
        />
        <input type="file" accept="image/*,audio/*,video/*" onChange={onBackFileChange} />
      </div>
    </div>
  );
};

export default FlashcardBackTemplate;
