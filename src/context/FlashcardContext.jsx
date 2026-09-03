import { createContext, useContext, useEffect, useState } from "react";

const FlashcardContext = createContext(null);
const STORAGE_KEY = "notepad-clone-flashcards";

export function FlashcardProvider({ children }) {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFlashcards(JSON.parse(saved));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    const toSave = flashcards.map(({ frontFileUrl, backFileUrl, ...rest }) => rest);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  }, [flashcards]);

  const addFlashcard = (card) => {
    setFlashcards((prev) => [...prev, { id: crypto.randomUUID(), ...card }]);
  };

  const removeFlashcard = (id) => {
    setFlashcards((prev) => prev.filter((card) => card.id !== id));
  };

  const updateFlashcard = (id, updates) => {
    setFlashcards((prev) =>
      prev.map((card) => (card.id === id ? { ...card, ...updates } : card))
    );
  };

  return (
    <FlashcardContext.Provider value={{ flashcards, addFlashcard, removeFlashcard, updateFlashcard }}>
      {children}
    </FlashcardContext.Provider>
  );
}

export function useFlashcards() {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error("useFlashcards must be used within FlashcardProvider");
  }
  return context;
}
