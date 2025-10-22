// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOu4oPW9v2pIqrOXwjJ_McoYkkUkPvhkE",
  authDomain: "my-assignment-nine-4baaa.firebaseapp.com",
  projectId: "my-assignment-nine-4baaa",
  storageBucket: "my-assignment-nine-4baaa.firebasestorage.app",
  messagingSenderId: "871129531341",
  appId: "1:871129531341:web:3d4dfa43a3e0a91aedba84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);