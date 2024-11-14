// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-platform-a0452.firebaseapp.com",
  projectId: "blog-platform-a0452",
  storageBucket: "blog-platform-a0452.appspot.com",
  messagingSenderId: "638409847385",
  appId: "1:638409847385:web:924a7b7df9a08f33a7b748"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);