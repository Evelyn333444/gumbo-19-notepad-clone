import { useState } from "react";

const CreateStudySet = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="createStudySet">
      <h2>Create a study set to store notes and flashcards for a specific class.</h2>
      <div className="studySetContent">
        <input
          type="text"
          placeholder="Enter the title of the study set..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter a description of the study set..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="createStudySet__submit" type="button" onClick={onClose}>
        Create
      </button>
      <button className="createStudySet__cancel" type="button" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default CreateStudySet;
