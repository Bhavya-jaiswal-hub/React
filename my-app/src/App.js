import React from "react";
 
import Header from "./components/Header";
import "./style.css";
import SmallHeading from "./components/SmallHeading"

import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
 

const App = () => {
   return (
     <div > <Header header="Todoie App"/>
     <div className="todo-container">
        <SmallHeading title="Todo"/>
        <TodoItem  text = "Eat"/>
        <TodoItem completed={true} text = "sleep" />
        <TodoItem text = "study"/>
        <TodoItem  text = "Dance"/>
        <TodoItem text = "pubg"/>
        <TodoItem text =  "walking"/>
        <TodoItem text = "coding"/>  
        <TodoItem text = "again sleep"/>
        <Button/>
       
     </div></div>
   // props are just the parameters in the function is used to create the dynamic components 
   );
};

export default App;