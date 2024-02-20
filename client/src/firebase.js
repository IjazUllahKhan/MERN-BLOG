// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ddc6a.firebaseapp.com",
  projectId: "mern-blog-ddc6a",
  storageBucket: "mern-blog-ddc6a.appspot.com",
  messagingSenderId: "159041440346",
  appId: "1:159041440346:web:a3173643a65e100fea6663"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);