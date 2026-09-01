const flashcardBackTemplate = () => {
  return (
    <div className="flashcardBackTemplate">
      <h2>Flashcard Back Template</h2>
      <div className="flashcardBackTemplate__container">
        <input type="text" placeholder="Enter the content for the flashcard back..." />
        //add a feature allowing them to upload an image, audio recording (foreign language purposes, perhaps), or video (for visual learners, or for foreign language purposes, perhaps) to the flashcard front.
        <input type="file" accept="image/*,audio/*,video/*" />
      </div>
    </div>
  )
}

export default flashcardFrontTemplate