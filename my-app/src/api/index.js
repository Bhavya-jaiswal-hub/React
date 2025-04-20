const baseURL = "https://api.weatherapi.com/v1/current.json?key=0314e96146d5491698b63836252004";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`); // Use backticks here
  return await response.json();
};
