 import React from "react";
 const Button = (props) => {
    return (
        <button className="btn" onClick= { props.value} >
           {props.value}
        </button>
    )
 }
        
export default Button;