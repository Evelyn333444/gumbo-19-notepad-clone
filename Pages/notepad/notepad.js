import { useEffect } from "react";
import { annotate } from "rough-notation";

const Notepad = () => {
  useEffect(() => {
    const activeNotations = {};

    const elements = document.querySelectorAll(".notatable");
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        const elementId = element.id;
        if (!activeNotations[elementId]) {
          const annotation = annotate(element, { type: "underline", color: "yellow" });
          annotation.show();
          activeNotations[elementId] = annotation;
        }
      });
    });

    return () => {
      elements.forEach((element) => {
        element.replaceWith(element.cloneNode(true));
      });
    };
  }, []);

  const speakBtn = document.getElementById('speakBtn');
const userNotes = document.getElementById('userNotes');

speakBtn.addEventListener('click', () => {
  // Check if browser supports speech synthesis
  if ('speechSynthesis' in window) {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    const textToRead = userNotes.value;
    if (textToRead.trim() === '') return;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    
    // Optional settings
    utterance.rate = 1.0; // Speed (0.1 to 10)
    utterance.pitch = 1.0; // Pitch (0 to 2)

    // Speak the text
    window.speechSynthesis.speak(utterance);
  } else {
    alert('Sorry, your browser does not support read-aloud audio.');
  }
});


  return (
    <div className="notepad">
      <h2>Notepad</h2>
      <div className="notepad__container">
        <div id="note-container">
          <p id="p-1" className="notatable">
            The core hypothesis of this project relies on data integrity.
          </p>
          <p id="p-2" className="notatable">
            We must test this on at least three different environments.
          </p>
        </div>
        <textarea className="userNotes" placeholder="Write your notes here..." />
        <button className="speakBtn">Read Aloud</button>

      </div>
    </div>
  );
};

export default Notepad;
