const FlashcardBackTemplate = () => {
  return (
    <div className="flashcardBackTemplate">
      <h2>Flashcard Back Template</h2>
      <div className="flashcardBackTemplate__container">
        <input type="text" placeholder="Enter the content for the flashcard back..." />
        <input type="file" accept="image/*,audio/*,video/*" />
      </div>
    </div>
  );
};

export default FlashcardBackTemplate;
