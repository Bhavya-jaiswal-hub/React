import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { WeatherProvider } from './Context/Weather';



import {BrowserRouter,Routes,Route} from "react-router-dom"


// import { CartProvider } from './Context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {
   return (
    <div>
   <h1> HOME PAGE </h1>
    </div>
    
   )
}
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
   </Routes>
   {/* <App/> */}
   </BrowserRouter>
    {/* <CartProvider>
      <App />
    </CartProvider> */}

    
  {/* <WeatherProvider>
  <App/>
  </WeatherProvider> */}
 
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
