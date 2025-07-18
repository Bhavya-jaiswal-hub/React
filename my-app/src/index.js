import React from 'react';

import ReactDOM from 'react-dom/client';
import { FirebaseProvider } from './Context/Firebase';
// import { BrowserRouter,Routes,Route,useParams } from 'react-router-dom';
import App from './App';
import './index.css'; // Optional: if you want to use global CSS styles

const root = ReactDOM.createRoot(document.getElementById('root'));

// const Home = () => {

//   const [posts,setPosts] = useState([]);

//    useEffect(() => {
//      fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json()).then((data) => setPosts(data) )
//    },[])


//    return (
//      <div> 
//      <div className='post-container'>
//         {posts.map((post) => (
//            <li key={post.id}>{post.title}</li>
//         ))}
//      </div>

//      </div>
//    )
// }

// const About  = () => {
//    return (
//     <h1> About page </h1>
//    )
// }

// const Profile  = () => {
//    return (
//     <h1> Profile page </h1>
//    )
// }

// const Settings =  () => {
//    return (
//     <h1> Settings page</h1>
//    )
// }

// const SayUser = () => {
//   const Params  = useParams();
//   // console.log("Params",Params)
//    return (
//     <h1> your name is {Params.userId} </h1>
//    )
// }
 
root.render(
  
   
    <React.StrictMode>
     <FirebaseProvider> 

        <App /> 
   
     </FirebaseProvider>
      </React.StrictMode>

 /* <BrowserRouter>
 <Routes>
  <Route path='/' element = {<Home />} />
   <Route path='/about' element = {<About />} />
    {/* <Route path='/about/profile' element = {<Profile />} /> this is one way of doing routing  */
    /* <Route path="about">
     <Route path="profile"  element={<Profile />} />
     <Route path = "profile/settings" element = {<Settings />} />
    </Route> */
    /* <Route path="/user/:userId" element={<SayUser />} /> */
 /* </Routes> */

 /* </BrowserRouter> */ 

     
  
);
