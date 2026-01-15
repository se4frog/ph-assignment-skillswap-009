// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXOLYSFwv8DxdOz9nZyB5nWwZngwOGFs",
  authDomain: "skillswap-z.firebaseapp.com",
  projectId: "skillswap-z",
  storageBucket: "skillswap-z.firebasestorage.app",
  messagingSenderId: "237501943530",
  appId: "1:237501943530:web:d900c7cd4141c4205f9193"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;