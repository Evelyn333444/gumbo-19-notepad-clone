import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDukyLGmjENpasBeHL-IzT8KWAlOxqKMgw",
  authDomain: "notepad-clone-sept-1-2026.firebaseapp.com",
  projectId: "notepad-clone-sept-1-2026",
  storageBucket: "notepad-clone-sept-1-2026.firebasestorage.app",
  messagingSenderId: "329859560233",
  appId: "1:329859560233:web:0fa08a5f43851dd4de3d38",
  measurementId: "G-S60N60JW2F"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };