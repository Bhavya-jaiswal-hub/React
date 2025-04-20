// import React, { useState, useEffect } from "react";
// import { getPosts,getRandomUser } from "./api";
import React from 'react'
import Card from './components/Card'
import Button from './components/Button'
import Input from './components/Input'
// import Item from './components/Item';
// import Cart from './components/Cart';
// import { useContext } from 'react';
import "./App.css";
// import Counter from './components/Counter';
// import { ConterContext}  from "./Contexts/Counter"
// import PostCard from "./components/PostCard";
// import UserCard from "./components/UserCard";

const App = () => {
  // const counterState = useContext(ConterContext)
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
      {/* <Item name="Macbook pro"  price={100000}/>
      <Item name="Pen drive"  price={40000}/>
      <Item name="Mobile"  price={350000}/> */}
      {/* <Cart/> */}
       {/* <h1>
        Count is {counterState.count}
       </h1>

       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/> */}

       <h1> Weather forcast</h1>
       <Input/>
       <br></br>
       <Button value="Search"/>
       <Card/>
       <Button value="Refresh"/>
  

    </div>
  );
};

export default App;
