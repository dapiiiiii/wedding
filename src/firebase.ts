// src/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfSRvYoqs0-2IAhRJoUcYzmP_KVNWwcHY",
  authDomain: "wedding-9e1f5.firebaseapp.com",
  projectId: "wedding-9e1f5",
  storageBucket: "wedding-9e1f5.appspot.com",
  messagingSenderId: "584372696168",
  appId: "1:584372696168:web:cd3e4b024c016a3e8737dd",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
