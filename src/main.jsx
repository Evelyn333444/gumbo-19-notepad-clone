import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FlashcardProvider } from "./context/FlashcardContext.jsx";
import { StudySetProvider } from "./context/StudySetContext.jsx";
import { NotepadProvider } from "./context/NotepadContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FlashcardProvider>
        <StudySetProvider>
          <NotepadProvider>
            <App />
          </NotepadProvider>
        </StudySetProvider>
      </FlashcardProvider>
    </BrowserRouter>
  </StrictMode>,
);
