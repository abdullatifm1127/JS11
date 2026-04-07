// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrBOlFYk9Qhcz4jWxwVnX-DYwi2qMHp98",
  authDomain: "framework-next-81cc4.firebaseapp.com",
  projectId: "framework-next-81cc4",
  storageBucket: "framework-next-81cc4.firebasestorage.app",
  messagingSenderId: "271492418382",
  appId: "1:271492418382:web:58195848fa72efec30ec1f"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;