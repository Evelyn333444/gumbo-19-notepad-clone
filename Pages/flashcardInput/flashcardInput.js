import flashcardFrontTemplate from "../../Components/flashcardFrontTemplate/flashcardFrontTemplate"
import flashcardBackTemplate from "../../Components/flashcardBackTemplate/flashcardBackTemplate"

//This page will show when the user clicks on the "Add flashcards" button on the Flashcard page. It will allow them to input the content for the front and back of the flashcard, and then save it to their study set.

const flashcardInput = () => {
  return (
    <div className="flashcardTemplate">
      <h2>Flashcard Template</h2>
      <flashcardFrontTemplate />
      <flashcardBackTemplate />
    </div>
  )
}

export default flashcardInput