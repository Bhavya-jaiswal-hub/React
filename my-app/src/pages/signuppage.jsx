import React, { useState } from "react";

import {getAuth ,createUserWithEmailAndPassword} from "firebase/auth" 
import {app}  from "../firebase"

const auth  = getAuth(app);

 

const Signup = () => {

      const [email,setEmail] = useState("");
      const [password,setPassword] = useState("");

      const createuser = () => {
         createUserWithEmailAndPassword(auth,email,password).then(value => alert("success"));
      }

     return (
        <div className="sign-up">
         <label>E-Mail:</label>     
         <input type="email"  placeholder="Enter your email here"  value={email}  onChange={(e) => setEmail(e.target.value)}/>
         <label>Password:</label>
         <input type="password"  placeholder="Enter your password here" value={password} onChange={(e) => setPassword(e.target.value)}/>
         <button onClick={createuser}>Submit</button>

        </div>
     )
}

export default Signup;