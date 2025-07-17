import   React , {useState} from 'react'
import {getAuth, createUserWithEmailAndPassword}    from "firebase/auth"
import {app} from "../firebase"  

  const auth = getAuth(app)

const Signup = () => {
     const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")  


      const createUser = () => {
          createUserWithEmailAndPassword(auth,email,password).then((value) => alert('success')) 

      }

  return (
    <div className='sign-up-user'>
        <label>email:</label>
        <input type="email" required placeholder='Enter your email here' onChange={(e) => setEmail(e.target.value)} value = {email} />
          <label>Password:</label>
        <input type="Password" required placeholder='Enter your Password here' onChange={(e) => setPassword(e.target.value)} value = {password} />
        <button onClick={createUser}>Sign up </button>
    </div>
  )
}

export default Signup