import React from "react";
 
const TodoItem = (props) => {
    return (
        
        <div className="box"> 
            <div className="boxchild">{props.completed? <></> : <input type="checkbox" />}
            <span>{props.text}</span>
            </div>
         <p>...</p>
         </div>
   
    );
}

export default TodoItem;