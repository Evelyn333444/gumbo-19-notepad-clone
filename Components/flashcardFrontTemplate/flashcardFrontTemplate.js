const FlashcardFrontTemplate = () => {
  return (
    <div className="flashcardFrontTemplate">
      <h2>Flashcard Front Template</h2>
      <div className="flashcardFrontTemplate__container">
        <input type="text" placeholder="Enter the content for the flashcard front..." />
        <input type="file" accept="image/*,audio/*,video/*" />
      </div>
    </div>
  );
};

export default FlashcardFrontTemplate;
