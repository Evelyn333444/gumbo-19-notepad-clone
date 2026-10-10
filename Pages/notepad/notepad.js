import { useEffect, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { annotate } from "rough-notation";
import { useNotepads } from "../../src/context/NotepadContext.jsx";

const Notepad = () => {
  const { studySet } = useOutletContext();
  const { getNotepadByStudySet, saveNotepad } = useNotepads();
  const notepad = getNotepadByStudySet(studySet.id);
  const textareaRef = useRef(null);

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
  }, [studySet.id]);

  const handleNotesChange = (event) => {
    saveNotepad(studySet.id, event.target.value);
  };

  const handleReadAloud = () => {
    const textToRead = textareaRef.current?.value ?? "";
    if (!textToRead.trim()) return;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support read-aloud audio.");
    }
  };

  return (
    <div className="notepad">
      <h2>{studySet.title} — Notepad</h2>
      <div className="notepad__container">
        <div id="note-container">
          <p id="p-1" className="notatable">
            The core hypothesis of this project relies on data integrity.
          </p>
          <p id="p-2" className="notatable">
            We must test this on at least three different environments.
          </p>
        </div>
        <textarea
          ref={textareaRef}
          className="userNotes"
          placeholder="Write your notes here..."
          value={notepad.userNotes}
          onChange={handleNotesChange}
        />
        <button className="speakBtn" type="button" onClick={handleReadAloud}>
          Read Aloud
        </button>
      </div>
    </div>
  );
};

export default Notepad;
