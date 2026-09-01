import React from 'react'
import navbar from '../../Components/navbar/navbar'
import headerFlash from '../../Components/headerFlash/headerFlash'
import footerFlash from '../../Components/footerFlash/footerFlash'

//This page will show when the user clicks on the "Flashcards" button on the navbar. It will allow them to view their flashcards, and add, delete, or edit them.

const flashcard = () => {
  return (
    <div className="flashcard">
        <headerFlash />
      <navbar />
      //add a search bar to search for a specific flashcard.
      <div className="flashcard__container">
        <input type="text" placeholder="Search flashcards..." />
        <button>Add flashcards</button>
        <button>Delete flashcards</button>
        <button>Edit flashcards</button>
        //here I want a dropdown menu for collaborators, the creator, and your own view/edit status (not everyones). Also, only show first names, not usernames.
        <div className="flashcard__content">
            //allow the user to randomize flashcards, show them which ones they got right and wrong, and show them the right answer.
            //add a 'click here' button to see what their percentage of correct answers is, if they want it
            //add an audio feature to read the flashcard aloud, and allow all users (view and edit) to highlight and circle important terms on flashcards.
            //The edits will be personal, and won't affect the overall study set. Therefore, if one user highlights something, no other collaborator can see it (even the creator).
            //Collaborators can communicate on the app, allowing them to share insights of what might be important info to review without interfering with others or the original study set. This will be a chat feature, where users can communicate with each other, and the creator can moderate the chat if they want to.
            //Viewers and editors can chat together, but the creator can set up a chat with editors only.
        </div>
        <footerFlash />
      </div>      
    </div>
  )
}

export default flashcard