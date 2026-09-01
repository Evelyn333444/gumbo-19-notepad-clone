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
        <textarea placeholder="Write your notes here..." />
      </div>
    </div>
  );
};

export default Notepad;
