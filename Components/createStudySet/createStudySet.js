import { useState } from "react";
import { useStudySets } from "../../src/context/StudySetContext.jsx";

const CreateStudySet = ({ onClose }) => {
  const { addStudySet } = useStudySets();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleCreate = () => {
    if (!title.trim()) {
      setError("Enter a title for the study set.");
      return;
    }

    addStudySet({
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
    });

    onClose();
  };

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
      {error && <p style={{ color: "#dc2626" }}>{error}</p>}
      <button className="createStudySet__submit" type="button" onClick={handleCreate}>
        Create
      </button>
      <button className="createStudySet__cancel" type="button" onClick={onClose}>
        Cancel
      </button>
    </div>
  );
};

export default CreateStudySet;
