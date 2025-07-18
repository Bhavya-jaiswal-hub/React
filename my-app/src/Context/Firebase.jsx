import { createContext, useContext} from "react"; 
import { initializeApp } from "firebase/app"; 
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {getDatabase ,set ,ref} from "firebase/database"

  const firebaseConfig = {
  apiKey: "AIzaSyCm5vy8JHNPnNZ-p6cPrAjMK_21GVLwhlw",
  authDomain: "learning-project-57699.firebaseapp.com",
  projectId: "learning-project-57699",
  storageBucket: "learning-project-57699.firebasestorage.app",
  messagingSenderId: "135341639778",
  appId: "1:135341639778:web:97954d51767b083f10a93b",
  databaseURL: "https://learning-project-57699-default-rtdb.firebaseio.com"
};  

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const provider = new GoogleAuthProvider();


const FirebaseContext = createContext(null);

   export const useFirebase = () =>  useContext(FirebaseContext)


 


export const FirebaseProvider = (props) => {
    const signupUserWithEmailAndPassword = (email,password) => {
         return  createUserWithEmailAndPassword(firebaseAuth,email,password).then(value => alert(
            'successful signup'
         ))
         
    }
    const putData = (key,data) => set(ref(database,key),data);

    const signupWithGoogle = () => {
         signInWithPopup(firebaseAuth,provider)
    }
         
    
     return (
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword , putData,signupWithGoogle}}>
            {props.children}
        </FirebaseContext.Provider>
     )
}