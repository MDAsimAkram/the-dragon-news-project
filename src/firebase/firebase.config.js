// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('environment variable', import.meta.env.VITE_apiKey)

const firebaseConfig = {
  apiKey: "AIzaSyBJwC1a1M_m4p_9D4EUpJ9B2c6rMI7vcbc",
  authDomain: "the-news-dragon-new.firebaseapp.com",
  projectId: "the-news-dragon-new",
  storageBucket: "the-news-dragon-new.appspot.com",
  messagingSenderId: "419385771410",
  appId: "1:419385771410:web:673dcb60b7cf8b0beb2d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;