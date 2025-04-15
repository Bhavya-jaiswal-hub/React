// import React, { useState, useEffect } from "react";
// import { getPosts,getRandomUser } from "./api";
import React from 'react'
import { useContext } from 'react';
import "./App.css";
import Counter from './components/Counter';
import { ConterContext}  from "./Contexts/Counter"
// import PostCard from "./components/PostCard";
// import UserCard from "./components/UserCard";

const App = () => {
  const counterState = useContext(ConterContext)
  // const [data, setData] = useState(null);
  // const [userData,setUserData] = useState(null);

  // useEffect(() => {
  //   getPosts().then((posts) => setData(posts));
  // }, []);
  
  // useEffect(() =>{
  //    getRandomUser().then((user) => setUserData(user.results[0]))
  // },[]);

  // const refresh = () => {
  //    getRandomUser().then((user) => setUserData(user.results[0]))
  // };

  return (
    <div className="App">
       <h1>
        Count is {counterState.count}
       </h1>

       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/>

    </div>
  );
};

export default App;
