import React, { useState, useEffect } from "react";
import { getPosts,getRandomUser } from "./api";
import "./App.css";
import PostCard from "./components/PostCard";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      {
        data
          ? data.map((e) => <PostCard title ={e.title} body= {e.body}/>)
          : <p>No data</p>
      }
    </div>
  );
};

export default App;
