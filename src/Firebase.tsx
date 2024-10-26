import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgjgJTAQA33fQ186G7hbm4bd4KcfXeQXo",
  authDomain: "akshit-portfolio-13.firebaseapp.com",
  projectId: "akshit-portfolio-13",
  storageBucket: "akshit-portfolio-13.appspot.com",
  messagingSenderId: "308834485670",
  appId: "1:308834485670:web:c6c853e48ffc356e69fb67",
  measurementId: "G-Z1KFMM33K5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);