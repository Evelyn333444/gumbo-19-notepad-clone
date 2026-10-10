import { createContext, useContext, useEffect, useState } from "react";

const NotepadContext = createContext(null);
const STORAGE_KEY = "notepad-clone-notepads";

export function NotepadProvider({ children }) {
  const [notepads, setNotepads] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setNotepads(JSON.parse(saved));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notepads));
  }, [notepads]);

  const getNotepadByStudySet = (studySetId) =>
    notepads.find((notepad) => notepad.studySetId === studySetId) ?? {
      studySetId,
      userNotes: "",
    };

  const saveNotepad = (studySetId, userNotes) => {
    setNotepads((prev) => {
      const existing = prev.find((notepad) => notepad.studySetId === studySetId);
      if (existing) {
        return prev.map((notepad) =>
          notepad.studySetId === studySetId ? { ...notepad, userNotes } : notepad
        );
      }
      return [...prev, { studySetId, userNotes }];
    });
  };

  return (
    <NotepadContext.Provider value={{ notepads, getNotepadByStudySet, saveNotepad }}>
      {children}
    </NotepadContext.Provider>
  );
}

export function useNotepads() {
  const context = useContext(NotepadContext);
  if (!context) {
    throw new Error("useNotepads must be used within NotepadProvider");
  }
  return context;
}
