// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEh6r53rCLKgwRsCZKGrzafDsG2q13woU",
  authDomain: "netflix-clone-react-5c40e.firebaseapp.com",
  projectId: "netflix-clone-react-5c40e",
  storageBucket: "netflix-clone-react-5c40e.appspot.com",
  messagingSenderId: "99787784286",
  appId: "1:99787784286:web:168377c43f41b4346cf4cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);