import { useState } from "react";
import CreateStudySet from "../../Components/createStudySet/createStudySet";
import FinishedStudySet from "../../Components/finishedStudySet/finishedStudySet";
import PendingStudySet from "../../Components/pendingStudySet/pendingStudySet";
import { useStudySets } from "../../src/context/StudySetContext.jsx";
import "./studySets.css";

const StudySets = () => {
  const { studySets } = useStudySets();
  const [showCreate, setShowCreate] = useState(false);

  if (showCreate) {
    return <CreateStudySet onClose={() => setShowCreate(false)} />;
  }

  return (
    <div className="studySets">
      <div className="studySets__container">
        <h1 className="studySets__title">Study Sets</h1>
        <div className="studySets__content">
          <div className="studySets__nav">
            <ul>
              <li>
                <button type="button" onClick={() => setShowCreate(true)}>
                  Create a New Study Set
                </button>
              </li>
              <li><a href="/study-sets/search">Search Study Sets</a></li>
              <li><a href="/study-sets/collaborate">Collaborate on Study Sets</a></li>
            </ul>
            <p>
              If you create a study set, you can invite others to study the set or add to it.
              You just need their account usernames.
            </p>
          </div>
          <div className="studySets__main">
            <div className="studySets__created">
              {studySets.length === 0 ? (
                <p className="finishedStudySets__empty">
                  No study sets yet. Click &quot;Create a New Study Set&quot; to create one.
                </p>
              ) : (
                <div className="finishedStudySets">
                  {studySets.map((studySet) => (
                    <FinishedStudySet key={studySet.id} studySet={studySet} />
                  ))}
                </div>
              )}
            </div>
            <div className="studySets__pending">
              <PendingStudySet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySets;
