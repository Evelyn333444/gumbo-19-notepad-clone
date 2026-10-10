import { Navigate, Outlet, useParams } from "react-router-dom";
import StudySetNavbar from "../../Components/studySetNavbar/studySetNavbar";
import { useStudySets } from "../../src/context/StudySetContext.jsx";

const StudySetLayout = () => {
  const { studySetId } = useParams();
  const { studySets } = useStudySets();
  const studySet = studySets.find((set) => set.id === studySetId);

  if (!studySet) {
    return <Navigate to="/study-sets" replace />;
  }

  return (
    <div className="studySetLayout">
      <StudySetNavbar studySet={studySet} />
      <Outlet context={{ studySet }} />
    </div>
  );
};

export default StudySetLayout;
