import React from "react";
 
import Header from "./components/Header";
import "./style.css";
import SmallHeading from "./components/SmallHeading"

import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
 

const App = () => {
   return (
     <div > <Header/>
     <div className="todo-container">
        <SmallHeading/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <Button/>
       
     </div></div>
   
   );
};

export default App;