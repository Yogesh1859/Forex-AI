// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDGQSi3gcv5n8dvpmLTbgQfwpd25oc6aJ8",
  authDomain: "forex-ai-6062a.firebaseapp.com",
  projectId: "forex-ai-6062a",
  storageBucket: "forex-ai-6062a.firebasestorage.app",
  messagingSenderId: "1040564263887",
  appId: "1:1040564263887:web:8fde3ac70b647fd12dd0ba",
  measurementId: "G-0QC9XV4KGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };