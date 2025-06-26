import React , { useState} from "react"
import {getAuth ,signInWithEmailAndPassword} from "firebase/auth" 
import {app} from  "../firebase"

const auth = getAuth(app)

const Signin  = () => {
    
      const [email,setEmail] = useState("");
      const [password,setPassword] = useState("");

      const  Signinuser = () => {
         signInWithEmailAndPassword(auth,email,password).then((value) => console.log("sign in successfully")).catch((err) => console.log(err));
      } 



     return (
        <div className="sign-in">
         <h1> sign in page</h1>
          <label>E-Mail:</label>     
          <input type="email"  placeholder="Enter your email here"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
          <label>Password:</label>
          <input type="password"  placeholder="Enter your password here" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={Signinuser}>Sign in </button>

         

        </div>
     )
}

export default Signin;