// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUuXBcsQcLGJbYJJSFgTDZ6If5h3Hl-9I",
  authDomain: "e-commerce-60990.firebaseapp.com",
  projectId: "e-commerce-60990",
  storageBucket: "e-commerce-60990.appspot.com",
  messagingSenderId: "662269517642",
  appId: "1:662269517642:web:522291ba33bffa340e2bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);