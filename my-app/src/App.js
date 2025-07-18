// import {getPosts,getRandomUser}  from './api'
//  import {getDatabase ,ref,set} from "firebase/database"
// import {getAuth , createUserWithEmailAndPassword} from "firebase/auth"
// import {getDatabase,set,ref} from "firebase/database"
// import {app} from "./firebase"
// import Signup from "./pages/Signup"
// import Signin from "./pages/Signin";
// import { getAuth,createUserWithEmailAndPassword } from "firebase/auth"; 

//  import {app}  from  "./firebase"
 import {useState}  from 'react';
// import UserCard  from './components/UserCard';
import {useFirebase} from "./Context/Firebase"
import './App.css'

//  const auth = getAuth(app);
// import Card from "./components/Card";
// import Input from './components/Input';
// import PostCard from   './components/PostCard';
// import Board from "./TicTacToeGame/Board";
// const db = getDatabase(app) // this db will give you the instance of the database of the firebase 
function App() {
  //  const db = getDatabase(app)
  const firebase = useFirebase();
 
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
  //  const Auth = getAuth(app)
  // const signupUser  = () => {
  //    createUserWithEmailAndPassword(auth,"bhavyajaiswal71@gmai.com","bhav@1234").then((value) => console.log(value));
  // }
  // const [data,setData] = useState(null); 
  // const [userdata,setUserdata] = useState(null);
  // useEffect(() => {
  //    getPosts().then((posts) => setData(posts));
  // },[]);
  // useEffect(() => {
  //    getRandomUser().then((user) => setUserdata(user.results[0])); 
  // },[]);
  // const refresh = () => {
  //     getRandomUser().then((user) => setUserdata(user.results[0])); 
  // };
  // const putData = () => {
  //    set(ref  (db,"users/bhavya"),{
  //      id: 1,
  //      name: "bhavya jaiswal",
  //      age: 21,
  //    });
  // }; 
  //  const putData = () => {
  //   set(ref(db,"users/bhavya") , {
  //     college: "Mohit Kumar garg engineering college",
  //     id: 1, 
  //     Name: "Bhavya jaiswal",
  //     age: 21,
  //   })   
  //  }
  // const createUser = () => {
  //    createUserWithEmailAndPassword(Auth, "bhavyajaiswal71@gmail.com", "bhav@1234").then((value) => console.log(value))
  // }
  return (
    <div className="App">
      <h1> Firebase start</h1>
      <h3> sign up </h3>
      <label>Enter your email:</label>
      <input type="email" placeholder="Enter your email here" onChange={(e) =>setEmail(e.target.value)} value={email}   />
      <br></br>
      <label>set the password:</label>
      <input type='password' placeholder='Enter the password here' onChange={(e) => setPassword(e.target.value)} value={password} />
      <button onClick={() => {
        firebase.signupUserWithEmailAndPassword(email,password)
      }}>
        Create User
      </button>  

      <button onClick={firebase.signupWithGoogle}>sign up with Google</button>
      {/* <Signup /> 
      <Signin /> */}
      {/* <button  onClick={createUser}>Create User</button> */}

      {/* <button onClick={putData}>Put Data</button> */}
      {/* <h1> Firebase project  </h1>
            <button className="btn" onClick={signupUser}>create user</button>  */}

      {/* <Input placeholder="search the country" />
            <Card /> */}
      {/* {userdata &&  <UserCard data={userdata} /> }
            <button onClick={refresh}>Refresh User</button>
            {data ? data.map((e) => <div className='box-cover'><PostCard title={e.title} body={e.body}/></div>) : <h1> </h1>} */}
      {/* <Board / > */}
    </div>
  );
}

export default App;
