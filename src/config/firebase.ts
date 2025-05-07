// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVo6_5r7WjvV-GQ2EmfZnIC8AZX0PqZx4",
  authDomain: "prytech-v1.firebaseapp.com",
  projectId: "prytech-v1",
  storageBucket: "prytech-v1.firebasestorage.app",
  messagingSenderId: "250694154822",
  appId: "1:250694154822:web:5ebee9bb8bbcae8cc82847"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;