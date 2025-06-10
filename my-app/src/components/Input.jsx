import React from 'react';
// import { useWeather } from "../Context/Weather";

const Input  =(props) =>   {
    return (
      <div>
        <input placeholder = {props.placeholder} value = {props.value} onChange = {props.onChange}  />
      </div>
    )
}   


export default Input;