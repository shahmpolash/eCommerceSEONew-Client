// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCX_Y4gM8W_dAHEQtg-J0B5ZkMUXwDtsM",
  authDomain: "seofor-ecommerce.firebaseapp.com",
  projectId: "seofor-ecommerce",
  storageBucket: "seofor-ecommerce.appspot.com",
  messagingSenderId: "1052591518390",
  appId: "1:1052591518390:web:bddf8f18195137c4a6ac17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;