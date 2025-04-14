import React, { useState, useEffect } from "react";
import { getPosts,getRandomUser } from "./api";
import "./App.css";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";

const App = () => {
  const [data, setData] = useState(null);
  const [userData,setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);
  
  useEffect(() =>{
     getRandomUser().then((user) => setUserData(user.results[0]))
  },[]);

  console.log(userData)

  return (
    <div className="App">
     { userData &&  <UserCard data={userData}/>} 
      {
       
        data
          ? data.map((e) => <PostCard title ={e.title} body= {e.body}/>)
          : <p>No data</p>
      }
    </div>
  );
};

export default App;
