import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Login successful"))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="sign-in-page">
      <h1>Login Form</h1>
      <label>Enter your email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Registered email here"
      />
      <label>Enter your password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Registered password here"
      />
      <button onClick={signinUser}>Login</button>
    </div>
  );
};

export default Signin;
