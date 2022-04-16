// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Rzw7t0ixqfSqTDe6sJ1Fu5noIUyvTTs",
  authDomain: "westin-photography.firebaseapp.com",
  projectId: "westin-photography",
  storageBucket: "westin-photography.appspot.com",
  messagingSenderId: "1073085696857",
  appId: "1:1073085696857:web:52f8e5f556694aa95a5a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;