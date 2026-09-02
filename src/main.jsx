import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FlashcardProvider } from "./context/FlashcardContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FlashcardProvider>
        <App />
      </FlashcardProvider>
    </BrowserRouter>
  </StrictMode>,
);
