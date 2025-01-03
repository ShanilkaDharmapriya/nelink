import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyGbu1MDvcL6iGHo8m3JfJe2cSpS98g4Q",
  authDomain: "full-stack-react-74328.firebaseapp.com",
  projectId: "full-stack-react-74328",
  storageBucket: "full-stack-react-74328.firebasestorage.app",
  messagingSenderId: "301088320439",
  appId: "1:301088320439:web:0512ef97e128092a015632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
