import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-interview-52e88.firebaseapp.com",
  projectId: "ai-interview-52e88",
  storageBucket: "ai-interview-52e88.firebasestorage.app",
  messagingSenderId: "195520244871",
  appId: "1:195520244871:web:be8a34af3eb962e0661c22"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider }