import { createContext, useContext, useEffect, useState } from "react";

const StudySetContext = createContext(null);
const STORAGE_KEY = "notepad-clone-study-sets";

export function StudySetProvider({ children }) {
  const [studySets, setStudySets] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setStudySets(JSON.parse(saved));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(studySets));
  }, [studySets]);

  const addStudySet = (studySet) => {
    setStudySets((prev) => [...prev, { id: crypto.randomUUID(), ...studySet }]);
  };

  return (
    <StudySetContext.Provider value={{ studySets, addStudySet }}>
      {children}
    </StudySetContext.Provider>
  );
}

export function useStudySets() {
  const context = useContext(StudySetContext);
  if (!context) {
    throw new Error("useStudySets must be used within StudySetProvider");
  }
  return context;
}
