import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBo7Cj9M9O9emIT2dsQWtcdAe_HhZ6pVBc",
  authDomain: "app-a7123.firebaseapp.com",
  projectId: "app-a7123",
  storageBucket: "app-a7123.firebasestorage.app",
  messagingSenderId: "325886531721",
  appId: "1:325886531721:web:5c117ddab66504179a8e58",
  databaseURL: "https://app-a7123-default-rtdb.firebaseio.com",
};

 export const app = initializeApp(firebaseConfig);