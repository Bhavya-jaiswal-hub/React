import React from 'react';
import { useWeather } from "../Context/Weather";

const Input = () => {
  const weather = useWeather();

  // optional: safeguard in case context is not provided
  if (!weather) return null;

  return (
    <input
      className='input'
      placeholder='Search here'
      value={weather.searchCity}
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
