import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-69246.firebaseapp.com",
  projectId: "chat-69246",
  storageBucket: "chat-69246.appspot.com",
  messagingSenderId: "387664142982",
  appId: "1:387664142982:web:7647cc8d282b8667522707"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
