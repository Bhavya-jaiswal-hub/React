import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCm5vy8JHNPnNZ-p6cPrAjMK_21GVLwhlw",
  authDomain: "learning-project-57699.firebaseapp.com",
  projectId: "learning-project-57699",
  storageBucket: "learning-project-57699.firebasestorage.app",
  messagingSenderId: "135341639778",
  appId: "1:135341639778:web:97954d51767b083f10a93b",
  databaseURL: "https://learning-project-57699-default-rtdb.firebaseio.com"
};  


export const app = initializeApp( firebaseConfig );