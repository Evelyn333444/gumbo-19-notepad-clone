# Notepad Clone

React + Vite study app with Firebase Authentication.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Routes

- `/` — Homepage
- `/logged-in` — Logged-in dashboard
- `/study-sets` — Study sets
- `/flashcards` — Flashcards
- `/flashcards/input` — Add flashcards
- `/notepad` — Notepad
- `/learn` — Learn mode (placeholder)

## Environment variables

Firebase credentials are stored in `.env.local` (not committed to git).

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your Firebase project values from the Firebase Console.

Required variables:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`
