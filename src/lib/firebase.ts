import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA4dh7sdlLzxNXO23fYk-eZS29z5acxIGw",
  authDomain: "osman-digital-marketing.firebaseapp.com",
  databaseURL: "https://osman-digital-marketing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "osman-digital-marketing",
  storageBucket: "osman-digital-marketing.firebasestorage.app",
  messagingSenderId: "399002391232",
  appId: "1:399002391232:web:87a1d83a96f7f0cc4e5325",
  measurementId: "G-731J108HNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
