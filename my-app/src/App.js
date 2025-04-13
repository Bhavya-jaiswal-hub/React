import React, { useState, useEffect } from "react";
import { getPosts } from "./api";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  return (
    <div className="App">
      {
        data
          ? data.map((e) => <li key={e.id}>{e.title}</li>)
          : <p>No data</p>
      }
    </div>
  );
};

export default App;
