import React from 'react'
import {useWeather} from "../Context/Weather"


 
const Input = () => {

    const weather = useWeather();
    
      return (
        <input  className='input'   placeholder='Search here'
        value = {weather.searchCity}
        onChange = {(e) => weather.setSearchCity(e.target)}
        />

        
      );
};
export default Input