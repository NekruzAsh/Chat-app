// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4q9vgpVe2YDBA_fnRp-H74Jf-fpcKXUY",
  authDomain: "chatapp-3a0e9.firebaseapp.com",
  projectId: "chatapp-3a0e9",
  storageBucket: "chatapp-3a0e9.appspot.com",
  messagingSenderId: "710489239873",
  appId: "1:710489239873:web:e1c1e8ae45d068c043b1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);