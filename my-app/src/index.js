import React, { useEffect,useState }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { WeatherProvider } from './Context/Weather';



import {BrowserRouter,Routes,Route,useParams,NavLink} from "react-router-dom"


// import { CartProvider } from './Context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Home = () => {

  const [posts,setPosts] =useState([])

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setPosts(data));

  },[])
   return (
    <div className='post-container'>
    {
       posts.map((post) => ({ <NavLink to={'/post'}>post.title} </NavLink>) )
    }
    </div>
    
   )
}

const About = () => {
   return (
    <div>
     <h1> 
      About Page
     </h1>
    </div>
   )
}

const Profile = () => {
   return (
    <div>
      <h1>
        settings 
      </h1>
    </div>
   )
}

const Settings = () => {
   return (
    <div>
      <h1>
        sex karne ka bahut shok h mujhe 
      </h1>
    </div>
   )
}

const UserName = () => {

  const params = useParams();
   return (
     <div>
      <h1> Your name is {params.UserId}</h1>
     </div>
   )
}
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path ="/aboutUser/:UserId"  element={ <UserName />} /> 
      {/* <Route path="/account/profile"  element={<Profile />} /> */}
     <Route path="account">
      <Route path="profile"  element = {<Profile />} />
      <Route path="sextalk"  element = { <Settings/>} />

     </Route>

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
