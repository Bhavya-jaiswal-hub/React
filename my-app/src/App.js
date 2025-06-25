// import {getPosts,getRandomUser}  from './api'
//  import {getDatabase ,ref,set} from "firebase/database"
// import {getAuth , createUserWithEmailAndPassword} from "firebase/auth"
import Signup from "./pages/signuppage";
//  import {app}  from  "./firebase"
 // import {useState,useEffect}  from 'react';
// import UserCard  from './components/UserCard';
import './App.css'

//  const auth = getAuth(app);
// import Card from "./components/Card";
// import Input from './components/Input';
// import PostCard from   './components/PostCard';
// import Board from "./TicTacToeGame/Board";
// const db = getDatabase(app) // this db will give you the instance of the database of the firebase 
const App = () => {

 
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
  return (
    <div className="App">
       {/* <h1> Firebase project  </h1> 
       <button className="btn" onClick={signupUser}>create user</button>  */}
       <Signup/>
     {/* <Input placeholder="search the country" />
     <Card /> */}
      {/* {userdata &&  <UserCard data={userdata} /> }
      <button onClick={refresh}>Refresh User</button>
      {data ? data.map((e) => <div className='box-cover'><PostCard title={e.title} body={e.body}/></div>) : <h1> </h1>} */}
     {/* <Board / > */}
    </div>
  );
};

export default App;
