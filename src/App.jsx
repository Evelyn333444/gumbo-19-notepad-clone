import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Pages/homepage/homepage.js";
import LoggedIn from "../Pages/loggedIn/loggedIn.js";
import LogoutPage from "../Pages/logout/logoutPage.js";
import StudySets from "../Pages/studySets/studySets.js";
import StudySetLayout from "../Pages/studySetLayout/studySetLayout.js";
import StudySetOverview from "../Pages/studySetOverview/studySetOverview.js";
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
      <Route path="/study-sets/:studySetId" element={<StudySetLayout />}>
        <Route index element={<StudySetOverview />} />
        <Route path="flashcards" element={<Flashcard />} />
        <Route path="flashcards/input" element={<FlashcardInput />} />
        <Route path="flashcards/input/:id" element={<FlashcardInput />} />
        <Route path="notepad" element={<Notepad />} />
        <Route path="learn" element={<Learn />} />
      </Route>
      <Route path="/flashcards" element={<Flashcard />} />
      <Route path="/flashcards/input" element={<FlashcardInput />} />
      <Route path="/flashcards/input/:id" element={<FlashcardInput />} />
      <Route path="/notepad" element={<Navigate to="/study-sets" replace />} />
      <Route path="/learn" element={<Navigate to="/study-sets" replace />} />
    </Routes>
  );
}

//The App.jsx file should contain routes to all the pages that will show on the website
