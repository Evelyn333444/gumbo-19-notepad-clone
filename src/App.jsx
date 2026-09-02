import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/homepage/homepage.js";
import LoggedIn from "../Pages/loggedIn/loggedIn.js";
import LogoutPage from "../Pages/logout/logoutPage.js";
import StudySets from "../Pages/studySets/studySets.js";
import Flashcard from "../Pages/flashcard/flashcard.js";
import FlashcardInput from "../Pages/flashcardInput/flashcardInput.js";
import Notepad from "../Pages/notepad/notepad.js";
import Learn from "../Pages/learn/learn.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/logged-in" element={<LoggedIn />} />
      <Route path="/logout" element={<LogoutPage />} />
      <Route path="/study-sets" element={<StudySets />} />
      <Route path="/flashcards" element={<Flashcard />} />
      <Route path="/flashcards/input" element={<FlashcardInput />} />
      <Route path="/notepad" element={<Notepad />} />
      <Route path="/learn" element={<Learn />} />
    </Routes>
  );
}
